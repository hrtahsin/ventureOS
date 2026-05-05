# VentureOS

VentureOS is an AI-powered portfolio operations dashboard for startup incubators and accelerators. It helps program teams track startups, collect weekly founder updates, summarize progress with AI, flag risk levels, and recommend follow-up actions.

## Problem

Startup incubators often manage many founders, updates, milestones, and support needs across forms, emails, spreadsheets, and meeting notes.

## Solution

VentureOS centralizes startup profiles, weekly updates, milestones, and AI-generated summaries into one internal dashboard for program staff.

## Current Scaffold

- Next.js App Router with TypeScript
- Tailwind CSS and shadcn/ui components
- Supabase schema and seed SQL
- Shared TypeScript models
- App shell with sidebar and topbar
- Placeholder pages for the MVP route map
- Placeholder AI API routes

## Planned Features

- Startup portfolio dashboard
- Startup directory with filters
- Startup profile pages
- Founder weekly update submission
- AI-generated update summaries, risk levels, and action items
- Portfolio-wide weekly executive brief
- Recharts dashboard visualizations
- Supabase PostgreSQL backend

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- PostgreSQL
- OpenAI API
- Recharts
- Vercel

## Local Setup

Install dependencies:

```bash
npm install
```

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database

Run `db/schema.sql` in Supabase SQL Editor, then run `db/seed.sql` for demo data.

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
OPENAI_API_KEY=
```

## Next Build Steps

1. Connect dashboard metrics to seeded Supabase data.
2. Build the startup directory table and filters.
3. Wire add-startup form submission.
4. Build startup profile data loading.
5. Wire weekly update submission.
6. Add OpenAI summarization routes.

## Future Improvements

- Authentication
- Founder and staff roles
- Email summary automation
- Mentor matching
- Calendar integration
- PDF exports
- Multi-tenant incubator support
