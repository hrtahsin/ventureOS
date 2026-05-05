import { MetricCard } from "@/components/dashboard/metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/lib/supabase";
import type { Milestone, Startup, WeeklyUpdate } from "@/lib/types";

export const dynamic = "force-dynamic";

function getCurrentWeekStart() {
  const today = new Date();
  const date = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  );
  const day = date.getUTCDay();
  const distanceFromMonday = (day + 6) % 7;

  date.setUTCDate(date.getUTCDate() - distanceFromMonday);

  return date.toISOString().slice(0, 10);
}

function getLatestUpdatesByStartup(updates: WeeklyUpdate[]) {
  return updates.reduce<Record<string, WeeklyUpdate>>((latest, update) => {
    const current = latest[update.startup_id];

    if (!current || update.week_start > current.week_start) {
      latest[update.startup_id] = update;
    }

    return latest;
  }, {});
}

async function getDashboardData() {
  const [{ data: startups, error: startupsError }, { data: updates, error: updatesError }, { data: milestones, error: milestonesError }] =
    await Promise.all([
      supabase
        .from("startups")
        .select(
          "id, name, industry, stage, status, founder_name, founder_email, assigned_mentor, created_at",
        )
        .returns<Startup[]>(),
      supabase
        .from("weekly_updates")
        .select(
          "id, startup_id, week_start, ai_risk_level, confidence_score, created_at",
        )
        .returns<WeeklyUpdate[]>(),
      supabase
        .from("milestones")
        .select("id, startup_id, title, status, due_date, created_at")
        .returns<Milestone[]>(),
    ]);

  const error = startupsError ?? updatesError ?? milestonesError;

  if (error) {
    throw new Error(error.message);
  }

  const startupRows = startups ?? [];
  const updateRows = updates ?? [];
  const milestoneRows = milestones ?? [];
  const latestUpdates = getLatestUpdatesByStartup(updateRows);
  const currentWeekStart = getCurrentWeekStart();
  const today = new Date().toISOString().slice(0, 10);

  const highRiskStartupIds = new Set(
    Object.values(latestUpdates)
      .filter((update) => update.ai_risk_level === "High")
      .map((update) => update.startup_id),
  );

  const needsAttention = startupRows.filter(
    (startup) =>
      startup.status === "Needs Attention" || highRiskStartupIds.has(startup.id),
  ).length;

  const overdueMilestones = milestoneRows.filter(
    (milestone) =>
      milestone.due_date &&
      milestone.due_date < today &&
      milestone.status !== "Completed",
  ).length;

  return {
    totalStartups: startupRows.length,
    activeStartups: startupRows.filter((startup) => startup.status === "Active")
      .length,
    updatesThisWeek: updateRows.filter(
      (update) => update.week_start >= currentWeekStart,
    ).length,
    highRiskStartups: highRiskStartupIds.size,
    overdueMilestones,
    needsAttention,
  };
}

export default async function DashboardPage() {
  const metrics = await getDashboardData();
  const metricCards = [
    [
      "Total Startups",
      metrics.totalStartups.toString(),
      "Portfolio companies tracked in Supabase",
    ],
    [
      "Active Startups",
      metrics.activeStartups.toString(),
      "Companies currently active in the program",
    ],
    [
      "Updates This Week",
      metrics.updatesThisWeek.toString(),
      "Founder updates submitted for the current week",
    ],
    [
      "High-Risk Startups",
      metrics.highRiskStartups.toString(),
      "Based on latest AI risk level per startup",
    ],
    [
      "Overdue Milestones",
      metrics.overdueMilestones.toString(),
      "Incomplete milestones past their due date",
    ],
    [
      "Needs Attention",
      metrics.needsAttention.toString(),
      "High-risk startups or companies flagged by status",
    ],
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Live portfolio metrics from your Supabase database.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metricCards.map(([title, value, detail]) => (
          <MetricCard key={title} title={title} value={value} detail={detail} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {["Startups by Stage", "Risk Breakdown", "Update Completion"].map(
          (title) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-36 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ),
        )}
      </section>
    </div>
  );
}
