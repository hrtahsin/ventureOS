import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  );
}

if (supabasePublishableKey.startsWith("sb_secret_")) {
  throw new Error(
    "Do not use a Supabase secret key in NEXT_PUBLIC env vars. Use a publishable key or legacy anon key.",
  );
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
