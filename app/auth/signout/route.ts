import { NextResponse, type NextRequest } from "next/server";
import { supabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  if (supabaseConfigured) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  const en = (await request.formData().catch(() => null))?.get("locale") === "en";
  return NextResponse.redirect(new URL(en ? "/en" : "/", request.url), { status: 303 });
}
