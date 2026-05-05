import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StartupProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StartupProfilePage({
  params,
}: StartupProfilePageProps) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div>
        <Badge variant="secondary">Profile scaffold</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-normal">
          Startup Profile
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Startup ID: {id}. Details, milestones, weekly updates, and AI summaries
          will be connected after the directory is wired.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        {["Overview", "Milestones", "Weekly Updates"].map((title) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Placeholder for the {title.toLowerCase()} module.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
