-- ============================================================================
-- MeatQuiz · сервер под клиент v113: свинина и время в рейтинге
-- Выполнить целиком в Supabase SQL Editor. Идемпотентно.
--
-- 1) Чек-констрейнты mode расширяются на pork/pork_find (текущий
--    civics_weights_mode_chk режет свинину: "violates check constraint").
-- 2) sync_leaderboard переписывается с ЯВНОЙ логикой: пожизненные
--    games/correct в leaderboard = СУММА по 4 игровым режимам
--    (test, find, pork, pork_find) из civics_stats этого пользователя.
--    write/read в рейтинг не идут. Имя не трогаем (его пишет клиент).
--    Рейтинг питается только серверной статистикой — файлом прогресса
--    (в нём одни веса) его не подделать.
-- ============================================================================

-- ---- 1. чек-констрейнты mode --------------------------------------------
alter table public.civics_weights
  drop constraint if exists civics_weights_mode_chk;
alter table public.civics_weights
  add constraint civics_weights_mode_chk
  check (mode in ('test','find','write','read','pork','pork_find'));

alter table public.civics_stats
  drop constraint if exists civics_stats_mode_chk;
alter table public.civics_stats
  add constraint civics_stats_mode_chk
  check (mode in ('test','find','write','read','pork','pork_find'));

-- ---- 2. рейтинг: сумма 4 игровых режимов ---------------------------------
create or replace function public.sync_leaderboard()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  g int;
  c int;
begin
  -- write/read статистика в рейтинг не идёт — выходим сразу
  if new.mode not in ('test','find','pork','pork_find') then
    return new;
  end if;

  select coalesce(sum(s.games),0), coalesce(sum(s.correct),0)
    into g, c
  from public.civics_stats s
  where s.user_id = new.user_id
    and s.mode in ('test','find','pork','pork_find');

  -- строка рейтинга могла ещё не существовать (клиент создаёт её при первом
  -- заходе в рейтинг) — заводим каркас с пустым именем, клиент допишет имя.
  insert into public.leaderboard (user_id, name, games, correct)
  values (new.user_id, '', g, c)
  on conflict (user_id) do update set
    -- только вверх: пересинк/слияние не должны понижать пожизненный счёт
    games      = greatest(public.leaderboard.games,   excluded.games),
    correct    = greatest(public.leaderboard.correct, excluded.correct),
    updated_at = now();

  return new;
end $$;

-- триггер уже существует (trg_sync_leaderboard on civics_stats) и подхватит
-- новое тело функции автоматически. Если его вдруг нет — раскомментируй:
-- create trigger trg_sync_leaderboard
-- after insert or update on public.civics_stats
-- for each row execute function public.sync_leaderboard();

-- ---- 3. пересчитать рейтинг по уже накопленной статистике ------------------
-- (одноразово: подтянет свинину, сыгранную ДО этого патча, у всех пользователей)
update public.leaderboard l set
  games = greatest(l.games, t.g),
  correct = greatest(l.correct, t.c),
  updated_at = now()
from ( select user_id, coalesce(sum(games),0) g, coalesce(sum(correct),0) c
       from public.civics_stats
       where mode in ('test','find','pork','pork_find')
       group by user_id ) t
where t.user_id = l.user_id;

-- проверка: рейтинг и сумма статистики должны сойтись
select l.user_id, l.name, l.games lb_games,
       coalesce(t.g,0) stats_games,
       case when l.games >= coalesce(t.g,0) then 'ok' else 'MISMATCH' end chk
from public.leaderboard l
left join ( select user_id, sum(games) g from public.civics_stats
            where mode in ('test','find','pork','pork_find') group by user_id ) t
  on t.user_id = l.user_id
order by l.updated_at desc;
