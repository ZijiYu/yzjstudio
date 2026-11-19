"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login, signup, type AuthState } from "@/app/auth-actions";
import { authCopy } from "@/lib/auth-content";
import type { Locale } from "@/lib/content";

export default function AuthForm({
  mode,
  locale,
  initialError,
}: {
  mode: "signup" | "login";
  locale: Locale;
  initialError?: string;
}) {
  const t = authCopy[locale];
  const m = t[mode];
  const [state, action, pending] = useActionState<AuthState, FormData>(mode === "signup" ? signup : login, {
    error: initialError,
  });

  if (state.sentTo) {
    return (
      <div className="auth-card" role="status">
        <h1>{t.sent.title}</h1>
        <p className="lead">{t.sent.body(state.sentTo)}</p>
        <Link className="btn btn-line" href={`${t.base}/login`}>
          {t.login.submit}
        </Link>
      </div>
    );
  }

  return (
    <div className="auth-card">
      <h1>{m.title}</h1>
      <p className="lead">{m.lead}</p>
      <form action={action} className="auth-form">
        <input type="hidden" name="locale" value={locale} />
        <label htmlFor="email">{t.fields.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={state.email ?? ""}
          aria-describedby={state.error ? "auth-error" : undefined}
        />
        <label htmlFor="password">{t.fields.password}</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          required
          minLength={mode === "signup" ? 8 : undefined}
          aria-describedby={mode === "signup" ? "password-hint" : undefined}
        />
        {mode === "signup" && (
          <p className="auth-hint" id="password-hint">
            {t.fields.passwordHint}
          </p>
        )}
        {state.error && (
          <p className="auth-error" id="auth-error" role="alert">
            {state.error}
          </p>
        )}
        <button className="btn btn-solid" type="submit" disabled={pending}>
          {pending ? m.pending : m.submit}
        </button>
      </form>
      <p className="auth-switch">
        {m.switchText} <Link href={`${t.base}/${mode === "signup" ? "login" : "signup"}`}>{m.switchLink}</Link>
      </p>
    </div>
  );
}
