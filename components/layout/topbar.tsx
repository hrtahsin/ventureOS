import Link from "next/link";
import { Plus } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div>
          <p className="text-sm font-semibold">VentureOS</p>
          <p className="text-xs text-muted-foreground">
            Startup Portfolio Operations
          </p>
        </div>

        <Link href="/startups/new" className={buttonVariants({ size: "sm" })}>
          <Plus className="size-4" aria-hidden="true" />
          Add Startup
        </Link>
      </div>
    </header>
  );
}
