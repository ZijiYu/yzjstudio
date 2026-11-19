"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authCopy } from "@/lib/auth-content";
import type { Locale } from "@/lib/content";
import { createClient } from "@/lib/supabase/client";
import { supabaseConfigured } from "@/lib/supabase/env";

// The landing page is static, so the signed-in state is read in the browser.
export default function NavAccount({ locale }: { locale: Locale }) {
  const t = authCopy[locale];
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;
    createClient()
      .auth.getSession()
      .then(({ data }) => setSignedIn(Boolean(data.session)))
      .catch(() => {});
  }, []);

  if (signedIn) {
    return (
      <Link className="btn btn-solid btn-small" href={`${t.base}/account`}>
        {t.nav.account}
      </Link>
    );
  }
  return (
    <>
      <Link className="nav-login" href={`${t.base}/login`}>
        {t.nav.login}
      </Link>
      <Link className="btn btn-solid btn-small" href={`${t.base}/signup`}>
        {t.nav.signup}
      </Link>
    </>
  );
}
