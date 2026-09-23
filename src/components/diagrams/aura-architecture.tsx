/**
 * Aura's defensive architecture, drawn in the site's own theme tokens.
 *
 * The story the picture has to tell:
 *   - The write path (browser → actions → ticketing.ts → Postgres) is horizontal
 *     and emphasised. That's where the correctness lives.
 *   - The auth, CDN, QR and reconciler sit around it — they matter, but never
 *     replace the CAS UPDATE as the source of truth.
 *   - Postgres and AuditLog sit inside a dashed box labelled "enforced by
 *     schema" because the most important guardrails are not in TypeScript.
 *   - Phones get the same nodes stacked, because a 1000-unit-wide diagram
 *     scaled to 360px cannot be read.
 */

type Node = {
  title: string;
  detail: string;
  accent?: "default" | "write" | "auth" | "schema" | "cdn" | "worker";
};

const writeLane: Node[] = [
  { title: "Buyer browser", detail: "Next.js App Router" },
  { title: "Server Actions", detail: "RBAC ownership re-checks", accent: "default" },
  { title: "ticketing.ts", detail: "4-tier oversell engine", accent: "write" },
  { title: "PostgreSQL", detail: "CAS + @@unique + $tx", accent: "schema" },
  { title: "AuditLog", detail: "append-only, RLS-ready", accent: "schema" },
];

const supportLane: Node[] = [
  { title: "Door scanner", detail: "offline HMAC verify", accent: "write" },
  { title: "CDN + Edge", detail: "listings SWR ≤ 30 s", accent: "cdn" },
  { title: "auth.ts", detail: "JWT · bcrypt cost 12", accent: "auth" },
  { title: "TTL + reconciler", detail: "10 min hold · 5-min cron", accent: "worker" },
];

const writeBoxes = [
  { x: 14, width: 140 },
  { x: 182, width: 156 },
  { x: 364, width: 164 },
  { x: 554, width: 152 },
  { x: 732, width: 148 },
];

const supportBoxes = [
  { x: 14, width: 164 },
  { x: 202, width: 164 },
  { x: 390, width: 164 },
  { x: 578, width: 164 },
];

function accent(kind?: Node["accent"]) {
  switch (kind) {
    case "write":
      return "fill-amber-500/10 stroke-amber-600 dark:stroke-amber-400";
    case "auth":
      return "fill-rose-500/10 stroke-rose-600 dark:stroke-rose-400";
    case "schema":
      return "fill-violet-500/10 stroke-violet-600 dark:stroke-violet-400";
    case "cdn":
      return "fill-sky-500/10 stroke-sky-600 dark:stroke-sky-400";
    case "worker":
      return "fill-emerald-500/10 stroke-emerald-600 dark:stroke-emerald-400";
    default:
      return "fill-muted stroke-border";
  }
}

function DiagramNode({
  x,
  width,
  node,
  y = 76,
  height = 68,
}: {
  x: number;
  width: number;
  node: Node;
  y?: number;
  height?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        className={accent(node.accent)}
        strokeWidth={1.25}
      />
      <text
        x={x + width / 2}
        y={y + 28}
        textAnchor="middle"
        fontSize={12.5}
        fontWeight={600}
        className="fill-foreground"
      >
        {node.title}
      </text>
      <text
        x={x + width / 2}
        y={y + 48}
        textAnchor="middle"
        fontSize={10.5}
        className="fill-muted-foreground"
      >
        {node.detail}
      </text>
    </g>
  );
}

function WideDiagram() {
  return (
    <svg
      viewBox="0 0 900 480"
      className="hidden h-auto w-full md:block"
      role="img"
      aria-label="Aura architecture: a buyer's HTTP request passes through server actions that re-check ownership, then into ticketing.ts which runs a 4-tier engine that compares-and-swaps Postgres capacity, inserts a reservation and writes an append-only AuditLog. Around it, a door scanner verifies QR tickets offline before POST-ing, a CDN serves listings, auth.ts verifies JWT sessions, and a TTL reconciler expires holds and self-heals drift."
    >
      <defs>
        <marker
          id="aura-arrow"
          viewBox="0 0 10 10"
          refX={9}
          refY={5}
          markerWidth={6}
          markerHeight={6}
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-amber-600 dark:fill-amber-400" />
        </marker>
        <marker
          id="aura-arrow-soft"
          viewBox="0 0 10 10"
          refX={9}
          refY={5}
          markerWidth={6}
          markerHeight={6}
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
      </defs>

      {/* --- the write lane (browser → actions → ticketing → pg → audit) --- */}
      <g className="fill-none stroke-border" strokeWidth={1} strokeDasharray="5 4">
        <rect x={2} y={36} width={896} height={132} rx={10} />
      </g>
      <text x={18} y={57} fontSize={11} fontWeight={500} className="fill-muted-foreground">
        The write path — this is where correctness is decided
      </text>

      {writeLane.map((node, i) => (
        <DiagramNode key={node.title} node={node} {...writeBoxes[i]} />
      ))}

      <g
        className="stroke-amber-600 dark:stroke-amber-400"
        strokeWidth={1.5}
        markerEnd="url(#aura-arrow)"
        fill="none"
      >
        <line x1={156} y1={110} x2={178} y2={110} />
        <line x1={340} y1={110} x2={362} y2={110} />
        <line x1={530} y1={110} x2={552} y2={110} />
        <line x1={708} y1={110} x2={730} y2={110} />
      </g>

      <g fontSize={10.5} className="fill-muted-foreground" fontStyle="italic">
        <text x={260} y={168}>
          CAS UPDATE … WHERE sold + N ≤ capacity, inside one Prisma $transaction
        </text>
      </g>

      {/* --- the support lane, below the line --- */}
      <g className="fill-none stroke-border" strokeWidth={1} strokeDasharray="5 4">
        <rect x={2} y={236} width={896} height={170} rx={10} />
      </g>
      <text x={18} y={257} fontSize={11} fontWeight={500} className="fill-muted-foreground">
        Support systems — they never become the source of truth
      </text>

      {supportLane.map((node, i) => (
        <DiagramNode key={node.title} node={node} {...supportBoxes[i]} y={284} />
      ))}

      <g
        className="stroke-border"
        strokeWidth={1.25}
        markerEnd="url(#aura-arrow-soft)"
        fill="none"
        strokeDasharray="3 3"
      >
        <line x1={96} y1={168} x2={96} y2={280} />
        <text x={108} y={228} fontSize={10} className="fill-muted-foreground">
          QR scan POST
        </text>
      </g>
      <g
        className="stroke-border"
        strokeWidth={1.25}
        markerEnd="url(#aura-arrow-soft)"
        fill="none"
        strokeDasharray="3 3"
      >
        <line x1={280} y1={168} x2={284} y2={280} />
        <text x={292} y={228} fontSize={10} className="fill-muted-foreground">
          listings via CDN
        </text>
      </g>
      <g
        className="stroke-border"
        strokeWidth={1.25}
        markerEnd="url(#aura-arrow-soft)"
        fill="none"
        strokeDasharray="3 3"
      >
        <line x1={472} y1={168} x2={472} y2={280} />
        <text x={480} y={228} fontSize={10} className="fill-muted-foreground">
          verify session
        </text>
      </g>
      <g
        className="stroke-border"
        strokeWidth={1.25}
        markerEnd="url(#aura-arrow-soft)"
        fill="none"
        strokeDasharray="3 3"
      >
        <line x1={660} y1={168} x2={660} y2={280} />
        <text x={668} y={228} fontSize={10} className="fill-muted-foreground">
          expire · revert · reconcile
        </text>
      </g>

      <text x={450} y={442} textAnchor="middle" fontSize={10.5} className="fill-muted-foreground">
        Two independent signing secrets: JWT_SECRET (cookies) and TICKET_SECRET (QRs). Rotate with
        overlap.
      </text>
      <text x={450} y={458} textAnchor="middle" fontSize={10.5} className="fill-muted-foreground">
        Flash sale scaling order: 1. PgBouncer pool · 2. CDN SWR reads · 3. SQS FIFO per eventId ·
        4. Redis last.
      </text>
    </svg>
  );
}

function Stacked({ node, accent: kind }: { node: Node; accent?: Node["accent"] }) {
  return (
    <div
      className={
        kind === "write"
          ? "rounded-lg border border-amber-600/60 bg-amber-500/10 px-4 py-3 dark:border-amber-400/60"
          : kind === "schema"
            ? "rounded-lg border border-violet-600/60 bg-violet-500/10 px-4 py-3 dark:border-violet-400/60"
            : kind === "auth"
              ? "rounded-lg border border-rose-600/60 bg-rose-500/10 px-4 py-3 dark:border-rose-400/60"
              : kind === "cdn"
                ? "rounded-lg border border-sky-600/60 bg-sky-500/10 px-4 py-3 dark:border-sky-400/60"
                : kind === "worker"
                  ? "rounded-lg border border-emerald-600/60 bg-emerald-500/10 px-4 py-3 dark:border-emerald-400/60"
                  : "rounded-lg border bg-muted px-4 py-3"
      }
    >
      <p className="text-sm font-semibold">{node.title}</p>
      <p className="text-xs text-muted-foreground">{node.detail}</p>
    </div>
  );
}

function Arrow({ accent }: { accent?: "write" | "soft" }) {
  const color = accent === "write" ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground";
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <svg width={12} height={16} viewBox="0 0 12 16" className={color}>
        <path
          d="M6 0 V12 M1.5 8 L6 13 L10.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StackedDiagram() {
  return (
    <div className="md:hidden">
      <p className="mb-2 text-xs font-medium text-muted-foreground">The write path</p>
      <div className="rounded-xl border border-dashed p-3">
        {writeLane.map((node, i) => (
          <div key={node.title}>
            {i > 0 && <Arrow accent={i <= 3 ? "write" : "soft"} />}
            <Stacked node={node} accent={node.accent} />
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs italic text-muted-foreground">
        Everything above has to go through the CAS UPDATE on the Event row. Support systems never
        replace it.
      </p>

      <p className="mt-4 mb-2 text-xs font-medium text-muted-foreground">Support systems</p>
      <div className="rounded-xl border border-dashed p-3 grid grid-cols-2 gap-2">
        {supportLane.map((node) => (
          <Stacked key={node.title} node={node} accent={node.accent} />
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Flash sale scaling order: 1. PgBouncer pool · 2. CDN SWR reads · 3. SQS FIFO per eventId ·
        4. Redis last.
      </p>
    </div>
  );
}

export function AuraArchitecture() {
  return (
    <figure className="rounded-xl border bg-card p-4 sm:p-6">
      <WideDiagram />
      <StackedDiagram />
      <figcaption className="mt-4 border-t pt-4 text-sm text-muted-foreground">
        Four tiers stacked so each catches what the one above missed: (1) a CAS{" "}
        <code className="text-xs">UPDATE … WHERE</code> inside one transaction, (2) a DB-enforced
        unique <code className="text-xs">idempotencyKey</code>, (3) the schema's{" "}
        <code className="text-xs">@@unique([eventId, ticketIndex])</code>, and (4) a reconciler that
        re-counts and writes a corrective <code className="text-xs">CAPACITY_RECONCILED</code>{" "}
        AuditLog entry the moment drift is seen.
      </figcaption>
    </figure>
  );
}
