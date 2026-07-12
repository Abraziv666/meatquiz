-- ============================================================================
-- MeatQuiz · ПОЛНАЯ СХЕМА для нового проекта emqfaezqmoyhvzfgzrso (meatquiz-db)
-- Выполнить целиком в SQL Editor нового проекта. Идемпотентно.
-- Содержит: таблицы, режимы с pork, триггер рейтинга v2, RLS + анти-чит гранты,
-- недельный ролловер, авто-дедуп, pg_cron.
-- После SQL: Authentication → Sign In/Up → Email: "Confirm email" OFF,
-- "Allow new users to sign up" ON (адреса @testcit.app технические).
-- ============================================================================

-- ---------- 1. ТАБЛИЦЫ ------------------------------------------------------
create table if not exists public.civics_stats (
  user_id    uuid not null references auth.users(id) on delete cascade,
  mode       text not null,
  games      integer not null default 0,
  answered   integer not null default 0,
  correct    integer not null default 0,
  best_pct   integer not null default 0,
  last_pct   integer not null default 0,
  total_time bigint  not null default 0,
  extra      jsonb null,
  updated_at timestamptz not null default now(),
  constraint civics_stats_pkey primary key (user_id, mode),
  constraint civics_stats_mode_chk
    check (mode in ('test','find','write','read','pork','pork_find'))
);

create table if not exists public.civics_weights (
  user_id    uuid not null references auth.users(id) on delete cascade,
  mode       text not null,
  item_id    text not null,
  weight     integer not null default 0,
  seen       integer not null default 0,
  correct    integer not null default 0,
  wrong      integer not null default 0,
  last_seen  bigint null,
  updated_at timestamptz not null default now(),
  constraint civics_weights_pkey primary key (user_id, mode, item_id),
  constraint civics_weights_mode_chk
    check (mode in ('test','find','write','read','pork','pork_find'))
);

create table if not exists public.leaderboard (
  user_id       uuid not null primary key references auth.users(id) on delete cascade,
  name          text not null default '',
  games         integer not null default 0,
  correct       integer not null default 0,
  wk_games_base integer not null default 0,
  wk_corr_base  integer not null default 0,
  wk_start      date not null default (date_trunc('week',(now() at time zone 'utc')))::date,
  updated_at    timestamptz not null default now()
);

create table if not exists public.weekly_winners (
  week_start date not null,
  rank       integer not null,
  user_id    uuid null,
  name       text not null default '',
  games      integer not null default 0,
  correct    integer not null default 0,
  constraint weekly_winners_pkey primary key (week_start, rank)
);

-- недельный зачёт: security_invoker=off → view исполняется владельцем и
-- обходит RLS leaderboard — публичный рейтинг читается даже анонимом
create or replace view public.weekly_leaderboard
with (security_invoker = off) as
select user_id, name,
       greatest(games - wk_games_base, 0) as games,
       greatest(correct - wk_corr_base, 0) as correct,
       wk_start
from public.leaderboard;

-- ---------- 2. ТРИГГЕР РЕЙТИНГА (v2: сумма 4 игровых режимов) ---------------
create or replace function public.sync_leaderboard()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  g int; c int;
begin
  if new.mode not in ('test','find','pork','pork_find') then
    return new;                                  -- write/read в рейтинг не идут
  end if;
  select coalesce(sum(s.games),0), coalesce(sum(s.correct),0) into g, c
  from public.civics_stats s
  where s.user_id = new.user_id
    and s.mode in ('test','find','pork','pork_find');
  insert into public.leaderboard (user_id, name, games, correct)
  values (new.user_id, '', g, c)
  on conflict (user_id) do update set
    games      = greatest(public.leaderboard.games,   excluded.games),  -- только вверх
    correct    = greatest(public.leaderboard.correct, excluded.correct),
    updated_at = now();
  return new;
end $$;

drop trigger if exists trg_sync_leaderboard on public.civics_stats;
create trigger trg_sync_leaderboard
after insert or update on public.civics_stats
for each row execute function public.sync_leaderboard();

-- ---------- 3. RLS + АНТИ-ЧИТ ГРАНТЫ ---------------------------------------
alter table public.civics_stats   enable row level security;
alter table public.civics_weights enable row level security;
alter table public.leaderboard    enable row level security;
alter table public.weekly_winners enable row level security;

-- свои данные: полный доступ владельцу строки
drop policy if exists cs_own on public.civics_stats;
create policy cs_own on public.civics_stats
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists cw_own on public.civics_weights;
create policy cw_own on public.civics_weights
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- рейтинг: читают все (список топ-20 и своя строка в диагностике)
drop policy if exists lb_read on public.leaderboard;
create policy lb_read on public.leaderboard
  for select to anon, authenticated using (true);
-- свою строку можно завести и переименовать; счёт меняет ТОЛЬКО definer-триггер
drop policy if exists lb_ins_own on public.leaderboard;
create policy lb_ins_own on public.leaderboard
  for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists lb_upd_own on public.leaderboard;
create policy lb_upd_own on public.leaderboard
  for update to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- АНТИ-ЧИТ на уровне колонок: клиенту в leaderboard можно писать только имя.
-- games/correct/базы недели через API не редактируются — их ведут
-- security definer функции (триггер и ролловер), обходящие эти гранты.
revoke insert, update on public.leaderboard from anon, authenticated;
grant  insert (user_id, name) on public.leaderboard to authenticated;
grant  update (name, updated_at) on public.leaderboard to authenticated;

-- архив недель: читают все, пишет только ролловер (definer)
drop policy if exists ww_read on public.weekly_winners;
create policy ww_read on public.weekly_winners
  for select to anon, authenticated using (true);
revoke insert, update, delete on public.weekly_winners from anon, authenticated;

grant select on public.weekly_leaderboard to anon, authenticated;

-- ---------- 4. НЕДЕЛЬНЫЙ РОЛЛОВЕР -------------------------------------------
create or replace function public.meatquiz_weekly_rollover()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  cur_week date := (date_trunc('week',(now() at time zone 'utc')))::date;
begin
  insert into public.weekly_winners (week_start, rank, user_id, name, games, correct)
  select t.wk_start,
         row_number() over (order by t.games desc, t.correct desc, t.name),
         t.user_id, t.name, t.games, t.correct
  from ( select l.user_id, l.name,
                greatest(l.games   - l.wk_games_base, 0) as games,
                greatest(l.correct - l.wk_corr_base , 0) as correct,
                l.wk_start
         from public.leaderboard l
         where l.wk_start < cur_week ) t
  where t.games > 0
  order by t.games desc, t.correct desc, t.name
  limit 20
  on conflict (week_start, rank) do update set
    user_id = excluded.user_id, name = excluded.name,
    games   = excluded.games,   correct = excluded.correct;

  update public.leaderboard
     set wk_games_base = games, wk_corr_base = correct,
         wk_start = cur_week, updated_at = now()
   where wk_start < cur_week;
end $$;

revoke all on function public.meatquiz_weekly_rollover() from public, anon, authenticated;

-- ---------- 5. АВТО-ДЕДУП АККАУНТОВ -----------------------------------------
create or replace function public.meatquiz_dedup_users()
returns table(kept_user uuid, removed_user uuid, shared_local_id text)
language plpgsql
security definer
set search_path = public
as $$
declare
  g record; keeper uuid; loser uuid;
  k_lb public.leaderboard%rowtype; l_lb public.leaderboard%rowtype;
  d_games int; d_corr int;
begin
  for g in
    select u.raw_user_meta_data->>'local_id' as lid,
           array_agg(u.id order by u.last_sign_in_at desc nulls last,
                                    u.created_at desc) as ids
    from auth.users u
    where coalesce(u.raw_user_meta_data->>'local_id','') <> ''
    group by 1 having count(*) > 1
  loop
    keeper := g.ids[1];
    foreach loser in array g.ids[2:array_length(g.ids,1)] loop
      select * into k_lb from public.leaderboard where user_id = keeper;
      select * into l_lb from public.leaderboard where user_id = loser;

      insert into public.civics_stats as ks
             (user_id, mode, games, answered, correct, best_pct, last_pct, total_time, extra)
      select keeper, s.mode, s.games, s.answered, s.correct,
             s.best_pct, s.last_pct, s.total_time, s.extra
      from public.civics_stats s where s.user_id = loser
      on conflict (user_id, mode) do update set
        games      = greatest(ks.games,      excluded.games),
        answered   = greatest(ks.answered,   excluded.answered),
        correct    = greatest(ks.correct,    excluded.correct),
        best_pct   = greatest(ks.best_pct,   excluded.best_pct),
        total_time = greatest(ks.total_time, excluded.total_time),
        last_pct   = case when excluded.games >= ks.games then excluded.last_pct else ks.last_pct end,
        extra      = case when excluded.games >= ks.games then coalesce(excluded.extra, ks.extra) else ks.extra end,
        updated_at = now();

      insert into public.civics_weights as kw
             (user_id, mode, item_id, weight, seen, correct, wrong, last_seen)
      select keeper, w.mode, w.item_id, w.weight, w.seen, w.correct, w.wrong, w.last_seen
      from public.civics_weights w where w.user_id = loser
      on conflict (user_id, mode, item_id) do update set
        weight    = case when excluded.seen >= kw.seen then excluded.weight else kw.weight end,
        seen      = greatest(kw.seen,    excluded.seen),
        correct   = greatest(kw.correct, excluded.correct),
        wrong     = greatest(kw.wrong,   excluded.wrong),
        last_seen = greatest(coalesce(kw.last_seen,0), coalesce(excluded.last_seen,0)),
        updated_at = now();

      if l_lb.user_id is not null then
        if k_lb.user_id is not null then
          d_games := greatest(l_lb.games   - k_lb.games,   0);
          d_corr  := greatest(l_lb.correct - k_lb.correct, 0);
          update public.leaderboard set
            games         = greatest(games,   l_lb.games),
            correct       = greatest(correct, l_lb.correct),
            wk_games_base = least(wk_games_base + d_games, greatest(games,   l_lb.games)),
            wk_corr_base  = least(wk_corr_base  + d_corr,  greatest(correct, l_lb.correct)),
            updated_at    = now()
          where user_id = keeper;
        else
          insert into public.leaderboard
                 (user_id, name, games, correct, wk_games_base, wk_corr_base, wk_start)
          values (keeper, l_lb.name, l_lb.games, l_lb.correct,
                  l_lb.wk_games_base, l_lb.wk_corr_base, l_lb.wk_start)
          on conflict (user_id) do nothing;
        end if;
      end if;

      delete from auth.users where id = loser;
      kept_user := keeper; removed_user := loser; shared_local_id := g.lid;
      return next;
    end loop;
  end loop;
end $$;

revoke all on function public.meatquiz_dedup_users() from public, anon, authenticated;

-- ---------- 6. РАСПИСАНИЕ pg_cron -------------------------------------------
create extension if not exists pg_cron;

do $$
begin
  begin perform cron.unschedule('meatquiz-weekly-rollover'); exception when others then null; end;
  begin perform cron.unschedule('meatquiz-dedup');           exception when others then null; end;
end $$;

-- конец воскресенья по UTC (границы недель в проекте везде UTC)
select cron.schedule('meatquiz-weekly-rollover', '0 0 * * 1',
                     $$select public.meatquiz_weekly_rollover();$$);
-- ночной чистильщик дублей
select cron.schedule('meatquiz-dedup', '15 3 * * *',
                     $$select public.meatquiz_dedup_users();$$);

-- ---------- 7. КОНТРОЛЬ -----------------------------------------------------
select conname, pg_get_constraintdef(oid)
from pg_constraint
where conname in ('civics_stats_mode_chk','civics_weights_mode_chk');
select jobname, schedule from cron.job order by jobname;
