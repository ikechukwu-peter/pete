/**
 * The Blast Radius architecture, drawn in the site's own theme tokens.
 *
 * The story the picture has to tell: the simulation, the grading and the AI all run
 * inside the visitor's browser. Supabase only stores what you choose to save, and its
 * one function re-runs the same engine so a submitted score can't be forged. Hugging
 * Face serves the model weights once.
 *
 * Wide screens get the SVG; phones get the same nodes stacked.
 */

type Node = {
  title: string;
  detail: string;
};

const pathNodes: Node[] = [
  { title: "Editor", detail: "drag, connect, break" },
  { title: "Engine", detail: "seeded, rates + samples" },
  { title: "Review + score", detail: "rules, SLOs, budget" },
  { title: "AI analyst", detail: "WebLLM, your GPU" },
];

const supabase: Node[] = [
  { title: "Postgres + RLS", detail: "designs, scores" },
  { title: "submit-run", detail: "re-runs the same engine" },
];

const weights: Node = { title: "Hugging Face", detail: "model weights, once" };

/** x, width — laid out by hand so no label overflows its box. */
const boxes = [
  { x: 24, width: 190 },
  { x: 270, width: 200 },
  { x: 526, width: 190 },
  { x: 772, width: 200 },
];

function WideDiagram() {
  return (
    <svg
      viewBox="0 0 1000 420"
      className="hidden h-auto w-full md:block"
      role="img"
      aria-label="Blast Radius architecture: inside the browser, the editor feeds a seeded simulation engine, which produces the review and challenge score, which an on-device AI analyst explains. Below the browser boundary, Supabase stores saved designs behind row-level security, and its submit-run function re-runs the same engine to verify scores. Hugging Face serves the AI model weights once."
    >
      <defs>
        <marker
          id="br-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-cyan-600 dark:fill-cyan-400" />
        </marker>
        <marker
          id="br-arrow-muted"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
      </defs>

      {/* --- the browser: the whole simulate → grade → explain path lives inside it --- */}
      <rect
        x="2"
        y="30"
        width="996"
        height="150"
        rx="12"
        className="fill-cyan-500/5 stroke-cyan-600/60 dark:stroke-cyan-400/60"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <text x="18" y="54" fontSize="11" fontWeight="500" className="fill-muted-foreground">
        Your browser — the design, every simulated request and every AI answer stay here
      </text>

      {pathNodes.map((node, i) => (
        <PathNode key={node.title} node={node} {...boxes[i]} />
      ))}

      <g
        className="stroke-cyan-600 dark:stroke-cyan-400"
        strokeWidth="1.5"
        markerEnd="url(#br-arrow)"
        fill="none"
      >
        {boxes.slice(0, -1).map((b, i) => (
          <line key={i} x1={b.x + b.width + 4} y1="113" x2={boxes[i + 1].x - 4} y2="113" />
        ))}
      </g>

      {/* --- Supabase: storage, and a verifier that runs the same engine --- */}
      <rect
        x="150"
        y="246"
        width="440"
        height="150"
        rx="10"
        className="fill-none stroke-border"
        strokeWidth="1"
        strokeDasharray="5 4"
      />
      <text x="166" y="269" fontSize="11" fontWeight="500" className="fill-muted-foreground">
        Supabase — only what you choose to save or submit
      </text>
      <OutsideNode node={supabase[0]} x={166} />
      <OutsideNode node={supabase[1]} x={380} tone="verify" />
      <line
        x1="378"
        y1="312"
        x2="356"
        y2="312"
        className="stroke-emerald-600 dark:stroke-emerald-400"
        strokeWidth="1.5"
        markerEnd="url(#br-arrow-muted)"
      />
      <text x="370" y="380" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        Clients can&apos;t write scores; the server recomputes them.
      </text>

      {/* save / submit go down from the editor and the score */}
      <line
        x1="119"
        y1="182"
        x2="260"
        y2="284"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        markerEnd="url(#br-arrow-muted)"
      />
      <text x="128" y="234" fontSize="9.5" className="fill-muted-foreground">
        save, share
      </text>
      <line
        x1="621"
        y1="182"
        x2="480"
        y2="284"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        markerEnd="url(#br-arrow-muted)"
      />
      <text x="560" y="234" fontSize="9.5" className="fill-muted-foreground">
        submit design
      </text>

      {/* the model host: weights flow up once, nothing flows back */}
      <OutsideNode node={weights} x={762} y={290} width={220} />
      <line
        x1="872"
        y1="288"
        x2="872"
        y2="182"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        markerEnd="url(#br-arrow-muted)"
      />
      <text x="880" y="234" fontSize="9.5" className="fill-muted-foreground">
        weights, cached
      </text>
    </svg>
  );
}

function PathNode({ x, node, width }: { x: number; node: Node; width: number }) {
  return (
    <g>
      <rect
        x={x}
        y={79}
        width={width}
        height={68}
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1"
      />
      <text
        x={x + width / 2}
        y={107}
        textAnchor="middle"
        fontSize="12.5"
        fontWeight="600"
        className="fill-foreground"
      >
        {node.title}
      </text>
      <text
        x={x + width / 2}
        y={126}
        textAnchor="middle"
        fontSize="10"
        className="fill-muted-foreground"
      >
        {node.detail}
      </text>
    </g>
  );
}

function OutsideNode({
  node,
  x,
  y = 284,
  width = 194,
  tone,
}: {
  node: Node;
  x: number;
  y?: number;
  width?: number;
  tone?: "verify";
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={56}
        rx="8"
        className={
          tone === "verify"
            ? "fill-emerald-500/5 stroke-emerald-600/60 dark:stroke-emerald-400/60"
            : "fill-muted stroke-border"
        }
        strokeWidth="1"
      />
      <text
        x={x + width / 2}
        y={y + 23}
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        className="fill-foreground"
      >
        {node.title}
      </text>
      <text
        x={x + width / 2}
        y={y + 40}
        textAnchor="middle"
        fontSize="10"
        className="fill-muted-foreground"
      >
        {node.detail}
      </text>
    </g>
  );
}

function StackedNode({ node, tone }: { node: Node; tone?: "verify" }) {
  return (
    <div
      className={
        tone === "verify"
          ? "rounded-lg border border-emerald-600/60 bg-emerald-500/5 px-4 py-3 dark:border-emerald-400/60"
          : "rounded-lg border bg-muted px-4 py-3"
      }
    >
      <p className="text-sm font-semibold">{node.title}</p>
      <p className="text-xs text-muted-foreground">{node.detail}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <svg width="12" height="16" viewBox="0 0 12 16" className="text-cyan-600 dark:text-cyan-400">
        <path
          d="M6 0 V12 M1.5 8 L6 13 L10.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
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
      <p className="mb-2 text-xs font-medium text-muted-foreground">Your browser</p>
      <div className="rounded-xl border border-dashed border-cyan-600/60 bg-cyan-500/5 p-3 dark:border-cyan-400/60">
        {pathNodes.map((node, i) => (
          <div key={node.title}>
            {i > 0 && <Arrow />}
            <StackedNode node={node} />
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-dashed p-3">
        <p className="mb-3 text-xs font-medium text-muted-foreground">
          Supabase — only what you choose to save or submit
        </p>
        <div className="space-y-2">
          <StackedNode node={supabase[0]} />
          <StackedNode node={supabase[1]} tone="verify" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Clients can&apos;t write scores; the server recomputes them.
        </p>
      </div>

      <div className="mt-4">
        <StackedNode node={weights} />
      </div>
    </div>
  );
}

export function BlastRadiusArchitecture() {
  return (
    <figure className="rounded-xl border bg-card p-4 sm:p-6">
      <WideDiagram />
      <StackedDiagram />
      <figcaption className="mt-4 border-t pt-4 text-sm text-muted-foreground">
        The engine is pure TypeScript with a seeded random source, so the browser, the test suite
        and the Deno function that verifies scores all run the same code and get the same numbers.
      </figcaption>
    </figure>
  );
}
