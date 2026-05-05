create extension if not exists "pgcrypto";

create table if not exists startups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  industry text,
  stage text,
  status text,
  founder_name text,
  founder_email text,
  assigned_mentor text,
  created_at timestamp with time zone default now()
);

create table if not exists weekly_updates (
  id uuid primary key default gen_random_uuid(),
  startup_id uuid references startups(id) on delete cascade,
  week_start date not null,
  accomplishments text,
  next_steps text,
  blockers text,
  help_needed text,
  confidence_score int check (confidence_score >= 1 and confidence_score <= 5),
  ai_summary text,
  ai_risk_level text,
  ai_action_items jsonb,
  ai_recommended_support text,
  created_at timestamp with time zone default now()
);

create table if not exists milestones (
  id uuid primary key default gen_random_uuid(),
  startup_id uuid references startups(id) on delete cascade,
  title text not null,
  description text,
  status text,
  due_date date,
  created_at timestamp with time zone default now()
);

create index if not exists startups_status_idx on startups(status);
create index if not exists startups_stage_idx on startups(stage);
create index if not exists weekly_updates_startup_week_idx on weekly_updates(startup_id, week_start desc);
create index if not exists milestones_startup_due_date_idx on milestones(startup_id, due_date);
