insert into startups (
  id,
  name,
  description,
  industry,
  stage,
  status,
  founder_name,
  founder_email,
  assigned_mentor
) values
  (
    '11111111-1111-4111-8111-111111111111',
    'OceanOps AI',
    'AI-assisted vessel operations software for small ocean operators.',
    'OceanTech',
    'Pilot',
    'Active',
    'Maya Chen',
    'maya@oceanops.example',
    'Avery Singh'
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    'FinPilot',
    'Cash-flow forecasting and finance workflow tools for early-stage startups.',
    'FinTech',
    'Revenue',
    'Active',
    'Noah Patel',
    'noah@finpilot.example',
    'Jordan Lee'
  ),
  (
    '33333333-3333-4333-8333-333333333333',
    'Harbour Health',
    'Remote patient follow-up workflows for coastal clinics.',
    'HealthTech',
    'MVP',
    'Needs Attention',
    'Sofia Martin',
    'sofia@harbourhealth.example',
    'Priya Rao'
  ),
  (
    '44444444-4444-4444-8444-444444444444',
    'NorthGrid Energy',
    'Grid planning and energy load analytics for community utilities.',
    'CleanTech',
    'Validation',
    'Active',
    'Ethan OBrien',
    'ethan@northgrid.example',
    'Marcus Ford'
  )
on conflict (id) do nothing;

insert into weekly_updates (
  id,
  startup_id,
  week_start,
  accomplishments,
  next_steps,
  blockers,
  help_needed,
  confidence_score,
  ai_summary,
  ai_risk_level,
  ai_action_items,
  ai_recommended_support
) values
  (
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
    '11111111-1111-4111-8111-111111111111',
    current_date - ((extract(dow from current_date)::int + 6) % 7),
    'Completed three pilot onboarding sessions and reduced manual reporting time in the demo workflow.',
    'Run two more pilots and prepare pricing feedback for the next mentor meeting.',
    'Needs help validating pricing for smaller operators.',
    'Pricing strategy support and intro to one regional operator.',
    4,
    'OceanOps AI is making clear pilot progress and has a focused next step around pricing validation.',
    'Low',
    '["Review pilot feedback", "Schedule pricing mentor session", "Identify one regional operator intro"]'::jsonb,
    'Connect the founder with a mentor experienced in B2B pricing for vertical SaaS.'
  ),
  (
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
    '22222222-2222-4222-8222-222222222222',
    current_date - ((extract(dow from current_date)::int + 6) % 7),
    'Closed two paid beta customers and shipped the first automated variance report.',
    'Improve onboarding and document case studies from the paid beta users.',
    'Technical founder is overloaded.',
    'Short-term product engineering support and scoping help.',
    3,
    'FinPilot has encouraging revenue traction but execution capacity is becoming a constraint.',
    'Medium',
    '["Prioritize onboarding scope", "Find short-term engineering help", "Capture paid beta case study"]'::jsonb,
    'Help the team narrow the next sprint and source part-time engineering support.'
  ),
  (
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    '33333333-3333-4333-8333-333333333333',
    current_date - ((extract(dow from current_date)::int + 6) % 7),
    'Interviewed one clinic administrator but did not complete the planned prototype testing.',
    'Clarify target user and rebuild the prototype flow.',
    'MVP scope is too broad and clinic feedback is inconsistent.',
    'Needs help with customer discovery and product scope.',
    2,
    'Harbour Health has weak progress this week and needs immediate support narrowing the MVP.',
    'High',
    '["Run customer discovery review", "Cut prototype scope", "Schedule mentor check-in"]'::jsonb,
    'Schedule a focused product strategy session before more prototype work continues.'
  )
on conflict (id) do nothing;

insert into milestones (
  id,
  startup_id,
  title,
  description,
  status,
  due_date
) values
  (
    'dddddddd-dddd-4ddd-8ddd-dddddddddddd',
    '11111111-1111-4111-8111-111111111111',
    'Complete pilot cohort',
    'Finish the first pilot cohort and collect structured feedback.',
    'In Progress',
    current_date + interval '14 days'
  ),
  (
    'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee',
    '22222222-2222-4222-8222-222222222222',
    'Publish beta case study',
    'Write a short case study from the first paid beta customer.',
    'Not Started',
    current_date + interval '21 days'
  ),
  (
    'ffffffff-ffff-4fff-8fff-ffffffffffff',
    '33333333-3333-4333-8333-333333333333',
    'Reduce MVP scope',
    'Define one clinic workflow for the next prototype iteration.',
    'Overdue',
    current_date - interval '7 days'
  )
on conflict (id) do nothing;
