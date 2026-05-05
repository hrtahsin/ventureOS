import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  "Portfolio Health",
  "Strong Progress",
  "Needs Attention",
  "Common Blockers",
  "Recommended Priorities",
];

export default function WeeklySummaryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal">
          Weekly Summary
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Portfolio-wide AI brief scaffold. The summarization route will be
          implemented after update capture is wired.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        {sections.map((title) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Waiting for weekly update data.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
