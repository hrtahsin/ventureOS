import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "The weekly update summarizer is scaffolded and will be implemented in the AI step.",
    },
    { status: 501 },
  );
}
