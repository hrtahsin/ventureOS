import Link from "next/link";
import { Plus } from "lucide-react";

import { StartupTablePreview } from "@/components/startups/startup-table";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StartupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-normal">Startups</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Directory table, filters, and Supabase data loading come next.
          </p>
        </div>
        <Link href="/startups/new" className={buttonVariants()}>
          <Plus className="size-4" aria-hidden="true" />
          Add Startup
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Directory Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <StartupTablePreview />
        </CardContent>
      </Card>
    </div>
  );
}
