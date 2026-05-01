create table if not exists public.study_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.study_data enable row level security;

drop policy if exists "study_data_select_own" on public.study_data;
drop policy if exists "study_data_insert_own" on public.study_data;
drop policy if exists "study_data_update_own" on public.study_data;
drop policy if exists "study_data_delete_own" on public.study_data;

create policy "study_data_select_own"
on public.study_data
for select
to authenticated
using (auth.uid() = user_id);

create policy "study_data_insert_own"
on public.study_data
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "study_data_update_own"
on public.study_data
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "study_data_delete_own"
on public.study_data
for delete
to authenticated
using (auth.uid() = user_id);
