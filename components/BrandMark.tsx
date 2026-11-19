export default function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M16 16 6 7M16 16l11-5M16 16l-3 12" />
      </g>
      <circle cx="16" cy="16" r="5" fill="var(--signal)" stroke="var(--paper)" strokeWidth="2" />
      <circle cx="6" cy="7" r="2.6" fill="currentColor" />
      <circle cx="27" cy="11" r="2.6" fill="var(--amber)" />
      <circle cx="13" cy="28" r="2.6" fill="currentColor" />
    </svg>
  );
}
