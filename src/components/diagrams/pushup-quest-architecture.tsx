/**
 * The Pushup Quest data path, drawn in the site's own theme tokens.
 *
 * The story the picture has to tell: every step from camera to saved progress
 * happens inside the browser on the phone. The only outside parties sit below
 * that line — the host that served the files, and a telemetry endpoint the
 * browser refuses to talk to.
 *
 * Wide screens get the SVG; phones get the same nodes stacked.
 */

type Node = {
  title: string;
  detail: string;
};

const pathNodes: Node[] = [
  { title: "Camera", detail: "frames, never recorded" },
  { title: "Pose model", detail: "MediaPipe, WASM + GPU" },
  { title: "Rep counter", detail: "depth signal + 5 gates" },
  { title: "Game", detail: "damage, XP, loot" },
  { title: "Saved here", detail: "localStorage only" },
];

const outside: Node[] = [
  { title: "Static host", detail: "served the files once" },
  { title: "Google usage stats", detail: "patched off, CSP blocks it" },
];

/** x, width — laid out by hand so no label overflows its box. */
const boxes = [
  { x: 18, width: 160 },
  { x: 214, width: 172 },
  { x: 422, width: 172 },
  { x: 630, width: 150 },
  { x: 816, width: 166 },
];

function WideDiagram() {
  return (
    <svg
      viewBox="0 0 1000 400"
      className="hidden h-auto w-full md:block"
      role="img"
      aria-label="Pushup Quest architecture: camera frames go to an on-device MediaPipe pose model, then a rep counter, then the game, and progress is saved in the browser. Below the device boundary, a static host served the app files, and a Google telemetry endpoint is patched off and blocked by the Content-Security-Policy."
    >
      <defs>
        <marker
          id="pq-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-emerald-600 dark:fill-emerald-400" />
        </marker>
      </defs>

      {/* --- the device: everything on the path lives inside it --- */}
      <rect
        x="2"
        y="30"
        width="996"
        height="150"
        rx="12"
        className="fill-emerald-500/5 stroke-emerald-600/60 dark:stroke-emerald-400/60"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <text x="18" y="54" fontSize="11" fontWeight="500" className="fill-muted-foreground">
        Your phone, in the browser — Content-Security-Policy: connect-src &apos;self&apos;
      </text>

      {pathNodes.map((node, i) => (
        <PathNode key={node.title} node={node} {...boxes[i]} />
      ))}

      <g
        className="stroke-emerald-600 dark:stroke-emerald-400"
        strokeWidth="1.5"
        markerEnd="url(#pq-arrow)"
        fill="none"
      >
        {boxes.slice(0, -1).map((b, i) => (
          <line key={i} x1={b.x + b.width + 4} y1="113" x2={boxes[i + 1].x - 4} y2="113" />
        ))}
      </g>

      <text x="18" y="214" fontSize="11.5" className="fill-muted-foreground" fontStyle="italic">
        Everything above happens on the device. It works offline once installed.
      </text>

      {/* --- outside the device --- */}
      <rect
        x="250"
        y="240"
        width="500"
        height="142"
        rx="10"
        className="fill-none stroke-border"
        strokeWidth="1"
        strokeDasharray="5 4"
      />
      <text x="266" y="263" fontSize="11" fontWeight="500" className="fill-muted-foreground">
        Outside the device — neither receives video, reps or progress
      </text>

      {/* the host: files flow down to the device on first load, nothing flows back */}
      <rect
        x="266"
        y="278"
        width="222"
        height="56"
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1"
      />
      <text
        x="377"
        y="301"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        className="fill-foreground"
      >
        {outside[0].title}
      </text>
      <text x="377" y="318" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        {outside[0].detail}
      </text>

      {/* the blocked endpoint */}
      <rect
        x="512"
        y="278"
        width="222"
        height="56"
        rx="8"
        className="fill-red-500/5 stroke-red-500/60"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text
        x="623"
        y="301"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        className="fill-foreground"
      >
        {outside[1].title}
      </text>
      <text x="623" y="318" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        {outside[1].detail}
      </text>

      <line
        x1="377"
        y1="240"
        x2="377"
        y2="182"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <text x="386" y="226" fontSize="9.5" className="fill-muted-foreground">
        app files, over HTTPS
      </text>
      <line
        x1="623"
        y1="182"
        x2="623"
        y2="240"
        className="stroke-red-500/60"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <text x="632" y="226" fontSize="9.5" className="fill-red-600 dark:fill-red-400">
        refused by the browser
      </text>

      <text x="500" y="364" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        The host sees ordinary request details when files are downloaded, like any website.
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

function StackedNode({ node, tone }: { node: Node; tone?: "blocked" }) {
  return (
    <div
      className={
        tone === "blocked"
          ? "rounded-lg border border-dashed border-red-500/60 bg-red-500/5 px-4 py-3"
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
      <svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        className="text-emerald-600 dark:text-emerald-400"
      >
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
      <p className="mb-2 text-xs font-medium text-muted-foreground">Your phone, in the browser</p>
      <div className="rounded-xl border border-dashed border-emerald-600/60 bg-emerald-500/5 p-3 dark:border-emerald-400/60">
        {pathNodes.map((node, i) => (
          <div key={node.title}>
            {i > 0 && <Arrow />}
            <StackedNode node={node} />
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs italic text-muted-foreground">
        Everything above happens on the device. It works offline once installed.
      </p>

      <div className="mt-4 rounded-xl border border-dashed p-3">
        <p className="mb-3 text-xs font-medium text-muted-foreground">
          Outside the device — neither receives video, reps or progress
        </p>
        <div className="space-y-2">
          <StackedNode node={outside[0]} />
          <StackedNode node={outside[1]} tone="blocked" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          The host sees ordinary request details when files are downloaded, like any website.
        </p>
      </div>
    </div>
  );
}

export function PushupQuestArchitecture() {
  return (
    <figure className="rounded-xl border bg-card p-4 sm:p-6">
      <WideDiagram />
      <StackedDiagram />
      <figcaption className="mt-4 border-t pt-4 text-sm text-muted-foreground">
        The rep counter is pure — landmarks and a timestamp in, a decision out — so everything that
        decides a rep is tested by replaying real footage, without a browser or a camera.
      </figcaption>
    </figure>
  );
}
