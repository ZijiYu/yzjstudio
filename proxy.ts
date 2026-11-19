import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

// Only the pages that depend on the session; the landing pages stay static.
export const config = {
  matcher: ["/account", "/login", "/signup", "/en/account", "/en/login", "/en/signup"],
};
