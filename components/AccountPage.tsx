import { redirect } from "next/navigation";
import AuthShell from "./AuthShell";
import { authCopy } from "@/lib/auth-content";
import type { Locale } from "@/lib/content";
import { supabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

export default async function AccountPage({ locale }: { locale: Locale }) {
  const t = authCopy[locale];
  if (!supabaseConfigured) redirect(`${t.base}/login`);

  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const email = data?.claims?.email;
  if (!data?.claims) redirect(`${t.base}/login`);

  return (
    <AuthShell locale={locale}>
      <div className="auth-card auth-card-wide">
        <h1>{t.account.title}</h1>
        <dl className="account-list">
          <dt>{t.account.signedInAs}</dt>
          <dd>{typeof email === "string" ? email : "—"}</dd>
          <dt>{t.account.keys}</dt>
          <dd>{t.account.keysBody}</dd>
        </dl>
        <form action="/auth/signout" method="post">
          <input type="hidden" name="locale" value={locale} />
          <button className="btn btn-line" type="submit">
            {t.account.signOut}
          </button>
        </form>
      </div>
    </AuthShell>
  );
}
