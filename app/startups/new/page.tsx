import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewStartupPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal">Add Startup</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          This form scaffold will be wired to Supabase after the dashboard data
          layer is reviewed.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Startup Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="name">Startup name</Label>
            <Input id="name" placeholder="OceanOps AI" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="What does this startup do?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Input id="industry" placeholder="OceanTech" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stage">Stage</Label>
            <Input id="stage" placeholder="Pilot" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="founder">Founder name</Label>
            <Input id="founder" placeholder="Maya Chen" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mentor">Assigned mentor</Label>
            <Input id="mentor" placeholder="Avery Singh" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
