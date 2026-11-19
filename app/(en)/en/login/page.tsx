import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";
import AuthShell from "@/components/AuthShell";
import { authCopy } from "@/lib/auth-content";

export const metadata: Metadata = { title: authCopy.en.login.title + " · TokenHub", robots: { index: false } };

export default async function Page({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <AuthShell locale="en">
      <AuthForm mode="login" locale="en" initialError={error === "link" ? authCopy.en.errors.badLink : undefined} />
    </AuthShell>
  );
}
