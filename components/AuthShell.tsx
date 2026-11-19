import Link from "next/link";
import BrandMark from "./BrandMark";
import { copy, site, type Locale } from "@/lib/content";

export default function AuthShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = copy[locale];
  return (
    <>
      <header className="nav">
        <div className="wrap nav-row">
          <Link href={locale === "zh" ? "/" : "/en"} className="brand">
            <BrandMark />
            {site.brand}
          </Link>
        </div>
      </header>
      <main className="auth">
        <div className="wrap">{children}</div>
      </main>
      <footer className="footer">
        <div className="wrap footer-row">
          <p>
            © {new Date().getFullYear()} {site.brand} · {t.footer.line}
          </p>
        </div>
      </footer>
    </>
  );
}
