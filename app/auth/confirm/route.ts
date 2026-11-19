import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { supabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

// Lands here from the verification email. Supports both link styles Supabase
// can send: ?code= (default template) and ?token_hash=&type= (custom template).
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const nextParam = searchParams.get("next") ?? "/account";
  // Only same-site paths are allowed as the destination.
  const next = /^\/(en\/)?account$/.test(nextParam) ? nextParam : "/account";
  const base = next.startsWith("/en/") ? "/en" : "";

  const to = (pathname: string, query = "") => NextResponse.redirect(new URL(pathname + query, request.url));

  if (supabaseConfigured) {
    const supabase = await createClient();
    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) return to(next);
    } else if (tokenHash && type) {
      const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
      if (!error) return to(next);
    }
  }
  return to(`${base}/login`, "?error=link");
}
