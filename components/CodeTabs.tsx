"use client";

import { useId, useRef, useState } from "react";

type Sample = { id: string; label: string; code: string };

export default function CodeTabs({
  samples,
  copyLabel,
  copiedLabel,
}: {
  samples: Sample[];
  copyLabel: string;
  copiedLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : samples.length - 1)) % samples.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(samples[active].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable: the code stays selectable */
    }
  }

  return (
    <div className="code">
      <div className="code-bar">
        <div role="tablist" aria-label="Language" className="code-tabs" onKeyDown={onKey}>
          {samples.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${uid}-tab-${s.id}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel`}
              tabIndex={i === active ? 0 : -1}
              className="code-tab"
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button className="code-copy" onClick={copy} aria-live="polite">
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <pre
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${samples[active].id}`}
        tabIndex={0}
        className="code-body"
      >
        <code>{samples[active].code}</code>
      </pre>
    </div>
  );
}
