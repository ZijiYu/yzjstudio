import Link from "next/link";
import CodeTabs from "./CodeTabs";
import RouteDiagram from "./RouteDiagram";
import { codeSamples, site, type Copy } from "@/lib/content";

export default function Landing({ t }: { t: Copy }) {
  const year = new Date().getFullYear();
  return (
    <>
      <header className="nav" id="top">
        <div className="wrap nav-row">
          <Link href={t.locale === "zh" ? "/" : "/en"} className="brand">
            <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M16 16 6 7M16 16l11-5M16 16l-3 12" />
              </g>
              <circle cx="16" cy="16" r="5" fill="var(--signal)" stroke="var(--paper)" strokeWidth="2" />
              <circle cx="6" cy="7" r="2.6" fill="currentColor" />
              <circle cx="27" cy="11" r="2.6" fill="var(--amber)" />
              <circle cx="13" cy="28" r="2.6" fill="currentColor" />
            </svg>
            {site.brand}
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <a href="#features">{t.nav.features}</a>
            <a href="#quickstart">{t.nav.quickstart}</a>
            <a href="#models">{t.nav.models}</a>
          </nav>
          <Link href={t.nav.switchHref} className="nav-lang" hrefLang={t.locale === "zh" ? "en" : "zh-CN"}>
            {t.nav.switchLabel}
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <h1>
                {t.hero.title.split(/(?<=，)/).map((part) => (
                  <span key={part}>{part}</span>
                ))}
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="actions">
                <a className="btn btn-solid" href="#quickstart">
                  {t.hero.primary}
                </a>
                <a className="btn btn-line" href="#models">
                  {t.hero.secondary}
                </a>
              </div>
              <dl className="endpoint">
                <dt>{t.hero.baseUrlLabel}</dt>
                <dd>
                  <code>{site.apiBaseUrl}</code>
                </dd>
              </dl>
            </div>
            <RouteDiagram t={t.diagram} />
          </div>
        </section>

        <section className="band band-ink" id="quickstart">
          <div className="wrap split">
            <div>
              <h2>{t.quickstart.title}</h2>
              <p className="lead">{t.quickstart.lead}</p>
              <p className="note">{t.quickstart.note}</p>
            </div>
            <CodeTabs samples={codeSamples()} copyLabel={t.quickstart.copy} copiedLabel={t.quickstart.copied} />
          </div>
        </section>

        <section className="band" id="features">
          <div className="wrap">
            <div className="band-head">
              <h2>{t.features.title}</h2>
              <p className="lead">{t.features.lead}</p>
            </div>
            <ul className="features">
              {t.features.items.map((f) => (
                <li key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band band-tint" id="steps">
          <div className="wrap">
            <h2>{t.steps.title}</h2>
            <ol className="steps">
              {t.steps.items.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" id="models">
          <div className="wrap">
            <div className="band-head">
              <h2>{t.models.title}</h2>
              <p className="lead">{t.models.lead}</p>
            </div>
            <div className="table-scroll">
              <table className="models">
                <thead>
                  <tr>
                    {t.models.head.map((h) => (
                      <th key={h} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.models.rows.map((r) => (
                    <tr key={r.family}>
                      <th scope="row">{r.family}</th>
                      <td>{r.vendor}</td>
                      <td>{r.protocol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">{t.models.note}</p>
          </div>
        </section>

        <section className="closing">
          <div className="wrap closing-row">
            <div>
              <h2>{t.closing.title}</h2>
              <p className="lead">{t.closing.body}</p>
            </div>
            <a className="btn btn-solid" href="#quickstart">
              {t.closing.action}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <p>
            © {year} {site.brand} · {t.footer.line}
          </p>
          <a href="#top">{t.footer.top}</a>
        </div>
      </footer>
    </>
  );
}
