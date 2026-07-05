-- ============================================================================
-- MeatQuiz — схема базы данных Supabase (полная миграция для НОВОГО проекта)
-- ============================================================================
-- КАК ПРИМЕНИТЬ:
--   1. https://supabase.com → New project (имя, пароль БД, ближайший регион).
--   2. В проекте: SQL Editor → New query → вставь ВЕСЬ этот файл → Run.
--   3. Authentication → Sign In / Providers → Email:
--        включи Email, ВЫКЛЮЧИ "Confirm email"
--        (приложение делает технические адреса из логинов, писем никто не получит).
--   4. Project Settings → API: скопируй Project URL и anon/public key,
--      пропиши их в index.html (константы SUPABASE_URL и SUPABASE_KEY).
--   5. (необязательно) Недельный сброс по расписанию — см. блок pg_cron в конце.
--
-- Что использует клиент (index.html):
--   таблицы  : civics_weights, civics_stats, leaderboard, weekly_winners
--   витрина  : weekly_leaderboard (view)
--   функции  : ensure_week() (rpc), триггер sync_leaderboard на civics_stats
--   auth     : email+password, user_metadata (local_id/local_name)
-- Имена таблиц оставлены прежними (civics_*), чтобы не менять код клиента.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. Веса вопросов (личный прогресс по каждому отрубу)
-- ---------------------------------------------------------------------------
create table if not exists public.civics_weights (
  user_id   uuid not null references auth.users(id) on delete cascade,
  mode      text not null,                -- 'test' | 'write' | 'read'
  item_id   text not null,                -- ID вопроса, напр. 'FLAT_IRON_STEAK'
  weight    integer not null default 0,
  seen      integer not null default 0,
  correct   integer not null default 0,
  wrong     integer not null default 0,
  last_seen bigint,                       -- Date.now() клиента, мс
  updated_at timestamptz not null default now(),
  primary key (user_id, mode, item_id)
);

alter table public.civics_weights enable row level security;

create policy "weights: select own" on public.civics_weights
  for select using (auth.uid() = user_id);
create policy "weights: insert own" on public.civics_weights
  for insert with check (auth.uid() = user_id);
create policy "weights: update own" on public.civics_weights
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "weights: delete own" on public.civics_weights
  for delete using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 2. Личная статистика по режимам (питает рейтинг через триггер)
-- ---------------------------------------------------------------------------
create table if not exists public.civics_stats (
  user_id    uuid not null references auth.users(id) on delete cascade,
  mode       text not null,               -- 'test' | 'write' | 'read'
  games      integer not null default 0,  -- пройдено тестов (пожизненно)
  answered   integer not null default 0,  -- всего вопросов
  correct    integer not null default 0,  -- всего верных
  best_pct   integer not null default 0,
  last_pct   integer not null default 0,
  total_time bigint  not null default 0,
  extra      jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, mode)
);

alter table public.civics_stats enable row level security;

create policy "stats: select own" on public.civics_stats
  for select using (auth.uid() = user_id);
create policy "stats: insert own" on public.civics_stats
  for insert with check (auth.uid() = user_id);
create policy "stats: update own" on public.civics_stats
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "stats: delete own" on public.civics_stats
  for delete using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 3. Рейтинг (пожизненные счётчики + недельные базы)
--    games/correct и wk_* — СОБСТВЕННОСТЬ ТРИГГЕРА sync_leaderboard.
--    Клиент пишет только name (+ создаёт нулевую строку при регистрации).
-- ---------------------------------------------------------------------------
create table if not exists public.leaderboard (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  name          text not null default '',
  games         integer not null default 0,   -- = civics_stats.games (mode='test')
  correct       integer not null default 0,   -- = civics_stats.correct (mode='test')
  wk_games_base integer not null default 0,   -- значение games на начало недели
  wk_corr_base  integer not null default 0,   -- значение correct на начало недели
  wk_start      date    not null default (date_trunc('week', now() at time zone 'utc'))::date,
  updated_at    timestamptz not null default now()
);

alter table public.leaderboard enable row level security;

-- рейтинг публичный: читать могут все вошедшие (и аноним через витрину не нужен)
create policy "lb: select all" on public.leaderboard
  for select using (true);
create policy "lb: insert own" on public.leaderboard
  for insert with check (auth.uid() = user_id);
create policy "lb: update own" on public.leaderboard
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "lb: delete own" on public.leaderboard
  for delete using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 4. Триггер: civics_stats(mode='test') → leaderboard (счётчики)
--    security definer, чтобы обойти RLS-ограничение «клиент не пишет счётчики»:
--    сами счётчики обновляет сервер, а не клиент.
-- ---------------------------------------------------------------------------
create or replace function public.sync_leaderboard()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  wk date := (date_trunc('week', now() at time zone 'utc'))::date;
begin
  if new.mode <> 'test' then
    return new;
  end if;

  insert into public.leaderboard (user_id, name, games, correct,
                                  wk_games_base, wk_corr_base, wk_start, updated_at)
  values (new.user_id, '', new.games, new.correct, 0, 0, wk, now())
  on conflict (user_id) do update
    set games      = greatest(excluded.games,   public.leaderboard.games),
        correct    = greatest(excluded.correct, public.leaderboard.correct),
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_sync_leaderboard on public.civics_stats;
create trigger trg_sync_leaderboard
  after insert or update on public.civics_stats
  for each row execute function public.sync_leaderboard();

-- ---------------------------------------------------------------------------
-- 5. Летопись победителей (топ-3 завершённых недель)
-- ---------------------------------------------------------------------------
create table if not exists public.weekly_winners (
  week_start date    not null,
  rank       integer not null,             -- 1..3
  user_id    uuid,
  name       text not null default '',
  games      integer not null default 0,   -- игр за ту неделю
  correct    integer not null default 0,
  primary key (week_start, rank)
);

alter table public.weekly_winners enable row level security;
create policy "winners: select all" on public.weekly_winners
  for select using (true);
-- запись только серверной функцией ensure_week (security definer), клиенту insert не нужен

-- ---------------------------------------------------------------------------
-- 6. Витрина недельного рейтинга: games/correct, набранные С НАЧАЛА недели
-- ---------------------------------------------------------------------------
create or replace view public.weekly_leaderboard
with (security_invoker = off) as
select
  l.user_id,
  l.name,
  greatest(l.games   - l.wk_games_base, 0) as games,
  greatest(l.correct - l.wk_corr_base,  0) as correct,
  l.wk_start
from public.leaderboard l;

grant select on public.weekly_leaderboard to anon, authenticated;

-- ---------------------------------------------------------------------------
-- 7. Недельный сброс: фиксирует топ-3 прошедшей недели в weekly_winners
--    и переносит базы wk_*. Клиент вызывает rpc('ensure_week') при открытии
--    рейтинга — поэтому сброс происходит даже без pg_cron.
-- ---------------------------------------------------------------------------
create or replace function public.ensure_week()
returns void
language plpgsql
security definer set search_path = public
as $$
declare
  wk date := (date_trunc('week', now() at time zone 'utc'))::date;
begin
  -- есть ли строки прошлой недели, которые пора закрыть?
  if not exists (select 1 from public.leaderboard where wk_start < wk) then
    return;
  end if;

  -- топ-3 закрываемой недели → летопись (по неделе каждой строки)
  insert into public.weekly_winners (week_start, rank, user_id, name, games, correct)
  select wk_start,
         row_number() over (partition by wk_start
                            order by greatest(games - wk_games_base, 0) desc,
                                     greatest(correct - wk_corr_base, 0) desc,
                                     updated_at asc) as rank,
         user_id, name,
         greatest(games   - wk_games_base, 0),
         greatest(correct - wk_corr_base,  0)
  from public.leaderboard
  where wk_start < wk
    and greatest(games - wk_games_base, 0) > 0
  on conflict (week_start, rank) do nothing;

  -- ограничиваем летопись топ-3 (row_number выше уже даёт 1..N, лишние срезаем)
  delete from public.weekly_winners where rank > 3;

  -- новая неделя: базы = текущим пожизненным счётчикам
  update public.leaderboard
     set wk_games_base = games,
         wk_corr_base  = correct,
         wk_start      = wk,
         updated_at    = now()
   where wk_start < wk;
end;
$$;

grant execute on function public.ensure_week() to anon, authenticated;

-- ---------------------------------------------------------------------------
-- 8. (НЕОБЯЗАТЕЛЬНО) Автосброс каждый понедельник 00:05 UTC через pg_cron.
--    Database → Extensions → включи pg_cron, затем выполни:
-- ---------------------------------------------------------------------------
-- create extension if not exists pg_cron;
-- select cron.schedule('meatquiz-week-rollover', '5 0 * * 1', $$select public.ensure_week()$$);
