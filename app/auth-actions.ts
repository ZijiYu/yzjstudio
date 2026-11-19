"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { authCopy } from "@/lib/auth-content";
import type { Locale } from "@/lib/content";
import { supabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

export type AuthState = { error?: string; sentTo?: string; email?: string };

function read(formData: FormData) {
  const locale: Locale = formData.get("locale") === "en" ? "en" : "zh";
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  return { locale, email, password, t: authCopy[locale] };
}

function explain(code: string | undefined, status: number | undefined, t: (typeof authCopy)["zh"]) {
  if (status === 429 || code?.includes("rate_limit")) return t.errors.rateLimit;
  if (code === "invalid_credentials") return t.errors.badLogin;
  if (code === "email_not_confirmed") return t.errors.unconfirmed;
  if (code === "weak_password") return t.errors.shortPassword;
  if (code === "email_address_invalid" || code === "validation_failed") return t.errors.invalidEmail;
  return t.errors.generic;
}

export async function signup(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const { locale, email, password, t } = read(formData);
  if (!supabaseConfigured) return { error: t.errors.notConfigured, email };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: t.errors.invalidEmail, email };
  if (password.length < 8) return { error: t.errors.shortPassword, email };

  const h = await headers();
  const origin = h.get("origin") ?? `https://${h.get("host")}`;
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${origin}/auth/confirm?next=${t.base}/account`, data: { locale } },
  });
  if (error) return { error: explain(error.code, error.status, t), email };

  // Email confirmation turned off in Supabase: the user is signed in straight away.
  if (data.session) redirect(`${t.base}/account`);
  // Otherwise (including an address that is already registered, which Supabase
  // deliberately does not reveal) ask the user to check their inbox.
  return { sentTo: email };
}

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const { email, password, t } = read(formData);
  if (!supabaseConfigured) return { error: t.errors.notConfigured, email };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: explain(error.code, error.status, t), email };
  redirect(`${t.base}/account`);
}
