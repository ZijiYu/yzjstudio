import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";
import AuthShell from "@/components/AuthShell";
import { authCopy } from "@/lib/auth-content";

export const metadata: Metadata = { title: authCopy.zh.signup.title + " · TokenHub", robots: { index: false } };

export default async function Page({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <AuthShell locale="zh">
      <AuthForm mode="signup" locale="zh" initialError={error === "link" ? authCopy.zh.errors.badLink : undefined} />
    </AuthShell>
  );
}
