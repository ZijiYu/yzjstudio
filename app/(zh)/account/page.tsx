import type { Metadata } from "next";
import AccountPage from "@/components/AccountPage";
import { authCopy } from "@/lib/auth-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: authCopy.zh.account.title + " · TokenHub", robots: { index: false } };

export default function Page() {
  return <AccountPage locale="zh" />;
}
