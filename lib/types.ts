export type RiskLevel = "Low" | "Medium" | "High";

export type StartupStage =
  | "Idea"
  | "Validation"
  | "MVP"
  | "Pilot"
  | "Revenue"
  | "Scaling";

export type StartupStatus =
  | "Active"
  | "Paused"
  | "Graduated"
  | "Needs Attention";

export type MilestoneStatus =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Overdue";

export type Startup = {
  id: string;
  name: string;
  description?: string | null;
  industry?: string | null;
  stage?: StartupStage | string | null;
  status?: StartupStatus | string | null;
  founder_name?: string | null;
  founder_email?: string | null;
  assigned_mentor?: string | null;
  created_at?: string;
};

export type WeeklyUpdate = {
  id: string;
  startup_id: string;
  week_start: string;
  accomplishments?: string | null;
  next_steps?: string | null;
  blockers?: string | null;
  help_needed?: string | null;
  confidence_score?: number | null;
  ai_summary?: string | null;
  ai_risk_level?: RiskLevel | string | null;
  ai_action_items?: string[] | null;
  ai_recommended_support?: string | null;
  created_at?: string;
};

export type Milestone = {
  id: string;
  startup_id: string;
  title: string;
  description?: string | null;
  status?: MilestoneStatus | string | null;
  due_date?: string | null;
  created_at?: string;
};

export type UpdateSummary = {
  summary: string;
  riskLevel: RiskLevel;
  actionItems: string[];
  recommendedSupport: string;
};

export type PortfolioSummary = {
  portfolioHealth: string;
  strongProgress: string[];
  needsAttention: string[];
  commonBlockers: string[];
  recommendedPriorities: string[];
};

export const startupStages: StartupStage[] = [
  "Idea",
  "Validation",
  "MVP",
  "Pilot",
  "Revenue",
  "Scaling",
];

export const startupStatuses: StartupStatus[] = [
  "Active",
  "Paused",
  "Graduated",
  "Needs Attention",
];

export const riskLevels: RiskLevel[] = ["Low", "Medium", "High"];
