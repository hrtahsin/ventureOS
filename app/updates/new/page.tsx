import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewUpdatePage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal">
          Submit Weekly Update
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Founder update capture is scaffolded. Save and AI summarization will
          be added after review.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Founder Update</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="startup">Startup</Label>
              <Input id="startup" placeholder="OceanOps AI" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="week-start">Week start</Label>
              <Input id="week-start" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="accomplishments">Accomplishments</Label>
            <Textarea id="accomplishments" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="next-steps">Next steps</Label>
            <Textarea id="next-steps" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="blockers">Blockers</Label>
            <Textarea id="blockers" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="help-needed">Help needed</Label>
            <Textarea id="help-needed" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
