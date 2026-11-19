import type { Copy } from "@/lib/content";

// 一次请求的路由示意：主渠道超时 → 切到备用渠道 → 200。
// 动画纯 CSS（见 globals.css 的 .route-*），减少动态效果时显示最终状态。
export default function RouteDiagram({ t }: { t: Copy["diagram"] }) {
  const lanes = [
    { y: 62, label: t.primary, kind: "primary" },
    { y: 152, label: t.backup, kind: "backup" },
    { y: 242, label: t.other[0], kind: "idle" },
    { y: 332, label: t.other[1], kind: "idle" },
  ] as const;
  const gx = 250;
  const gy = 197;
  const lx = 372;

  return (
    <figure className="route">
      <svg viewBox="0 0 588 394" role="img" aria-label={t.caption}>
        {/* app → gateway */}
        <path className="route-wire route-in" d={`M 122 ${gy} H ${gx - 44}`} pathLength={1} />

        {/* gateway → lanes */}
        {lanes.map((l) => (
          <path
            key={l.y}
            className={`route-wire route-${l.kind}`}
            d={`M ${gx + 44} ${gy} C ${gx + 96} ${gy}, ${lx - 60} ${l.y}, ${lx} ${l.y}`}
            pathLength={1}
          />
        ))}

        {/* app */}
        <g>
          <rect className="route-node" x="2" y={gy - 34} width="120" height="68" rx="10" />
          <text className="route-label" x="62" y={gy - 5} textAnchor="middle">
            {t.app}
          </text>
          <text className="route-sub" x="62" y={gy + 16} textAnchor="middle">
            {t.key}
          </text>
        </g>

        {/* gateway */}
        <g>
          <rect className="route-gateway" x={gx - 44} y={gy - 44} width="88" height="88" rx="44" />
          <text className="route-gateway-label" x={gx} y={gy + 5} textAnchor="middle">
            {t.gateway}
          </text>
        </g>

        {/* lanes */}
        {lanes.map((l) => (
          <g key={l.y} className={`route-lane route-lane-${l.kind}`}>
            <rect className="route-node" x={lx} y={l.y - 26} width="214" height="52" rx="10" />
            <text className="route-label" x={lx + 16} y={l.y + 5}>
              {l.label}
            </text>
            {l.kind === "primary" && (
              <text className="route-status route-status-timeout" x={lx + 198} y={l.y + 5} textAnchor="end">
                {t.timeout}
              </text>
            )}
            {l.kind === "backup" && (
              <text className="route-status route-status-ok" x={lx + 198} y={l.y + 5} textAnchor="end">
                {t.ok}
              </text>
            )}
          </g>
        ))}
      </svg>
      <figcaption>{t.caption}</figcaption>
    </figure>
  );
}
