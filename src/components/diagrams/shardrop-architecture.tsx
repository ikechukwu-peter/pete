/**
 * The Shardrop data path, drawn in the site's own theme tokens.
 *
 * The story the picture has to tell: the file travels the horizontal path
 * between two browsers, and the servers sit below that line — they introduce
 * the peers and, at worst, forward packets they cannot read.
 *
 * Wide screens get the SVG; phones get the same nodes stacked, because a
 * 1000-unit-wide diagram scaled to 360px is unreadable.
 */

type Node = {
  title: string;
  detail: string;
};

const senderNodes: Node[] = [
  { title: "File or folder", detail: "never fully in memory" },
  { title: "Chunk + hash", detail: "Blob.slice, then SHA-256" },
  { title: "Manifest", detail: "fileId, every shard hash" },
];

const receiverNodes: Node[] = [
  { title: "Verify + store", detail: "rehash, then store at offset" },
  { title: "Saved file", detail: "assembled in place" },
];

const servers: Node[] = [
  { title: "Signaling relay", detail: "sealed offer + answer" },
  { title: "STUN", detail: "your public address" },
  { title: "TURN", detail: "only if direct is blocked" },
];

/** x, width — laid out by hand so no label overflows its box. */
const senderBoxes = [
  { x: 10, width: 132 },
  { x: 166, width: 152 },
  { x: 342, width: 140 },
];
const receiverBoxes = [
  { x: 680, width: 156 },
  { x: 860, width: 130 },
];

function WideDiagram() {
  return (
    <svg
      viewBox="0 0 1000 420"
      className="hidden h-auto w-full md:block"
      role="img"
      aria-label="Shardrop architecture: a file is chunked, hashed and described by a manifest in the sending browser, sent over a WebRTC DataChannel, then verified and stored at byte offsets in the receiving browser. A signaling relay, STUN and TURN sit outside that path and cannot read the file."
    >
      <defs>
        <marker
          id="sd-arrow"
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

      {/* --- the two browser lanes --- */}
      <g className="fill-none stroke-border" strokeWidth="1" strokeDasharray="5 4">
        <rect x="2" y="36" width="488" height="124" rx="10" />
        <rect x="672" y="36" width="326" height="124" rx="10" />
      </g>
      <g className="fill-muted-foreground" fontSize="11" fontWeight="500">
        <text x="18" y="57">
          Sending browser
        </text>
        <text x="688" y="57">
          Receiving browser
        </text>
      </g>

      {/* --- the data path --- */}
      {senderNodes.map((node, i) => (
        <PathNode key={node.title} node={node} {...senderBoxes[i]} />
      ))}
      {receiverNodes.map((node, i) => (
        <PathNode key={node.title} node={node} {...receiverBoxes[i]} />
      ))}

      {/* the channel itself: the only thing on the path that is not a browser */}
      <rect
        x="506"
        y="62"
        width="150"
        height="96"
        rx="10"
        className="fill-emerald-500/10 stroke-emerald-600 dark:stroke-emerald-400"
        strokeWidth="1.5"
      />
      <text
        x="581"
        y="103"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        className="fill-foreground"
      >
        DataChannel
      </text>
      <text x="581" y="121" textAnchor="middle" fontSize="10.5" className="fill-muted-foreground">
        SCTP over DTLS
      </text>

      {/* arrows along the path */}
      <g
        className="stroke-emerald-600 dark:stroke-emerald-400"
        strokeWidth="1.5"
        markerEnd="url(#sd-arrow)"
        fill="none"
      >
        <line x1="146" y1="110" x2="162" y2="110" />
        <line x1="322" y1="110" x2="338" y2="110" />
        <line x1="486" y1="110" x2="502" y2="110" />
        <line x1="840" y1="110" x2="856" y2="110" />
        <line x1="660" y1="110" x2="676" y2="110" />
      </g>

      {/* --- what the path means, said plainly --- */}
      <text x="10" y="205" fontSize="11.5" className="fill-muted-foreground" fontStyle="italic">
        Everything above happens between the two browsers.
      </text>

      {/* the servers only touch the path to set it up — hence the dotted line */}
      <line
        x1="581"
        y1="158"
        x2="581"
        y2="250"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <text x="594" y="207" fontSize="9.5" className="fill-muted-foreground">
        introduce the two devices
      </text>

      {/* --- the servers, below the line --- */}
      <rect
        x="280"
        y="250"
        width="500"
        height="150"
        rx="10"
        className="fill-none stroke-border"
        strokeWidth="1"
        strokeDasharray="5 4"
      />
      <text x="296" y="273" fontSize="11" fontWeight="500" className="fill-muted-foreground">
        Servers — none of them can read the file
      </text>

      {servers.map((server, i) => (
        <g key={server.title}>
          <rect
            x={296 + i * 159}
            y={288}
            width="150"
            height="54"
            rx="8"
            className="fill-muted stroke-border"
            strokeWidth="1"
          />
          <text
            x={371 + i * 159}
            y={309}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            className="fill-foreground"
          >
            {server.title}
          </text>
          <text
            x={371 + i * 159}
            y={326}
            textAnchor="middle"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {server.detail}
          </text>
        </g>
      ))}

      <text x="530" y="362" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        The relay is released the moment the two devices connect.
      </text>
      <text x="530" y="378" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        A relayed connection forwards the same encrypted packets, and is labelled relayed.
      </text>
    </svg>
  );
}

function PathNode({ x, node, width }: { x: number; node: Node; width: number }) {
  return (
    <g>
      <rect
        x={x}
        y={76}
        width={width}
        height={68}
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1"
      />
      <text
        x={x + width / 2}
        y={104}
        textAnchor="middle"
        fontSize="12.5"
        fontWeight="600"
        className="fill-foreground"
      >
        {node.title}
      </text>
      <text
        x={x + width / 2}
        y={123}
        textAnchor="middle"
        fontSize="10"
        className="fill-muted-foreground"
      >
        {node.detail}
      </text>
    </g>
  );
}

function StackedNode({ node, accent }: { node: Node; accent?: boolean }) {
  return (
    <div
      className={
        accent
          ? "rounded-lg border border-emerald-600/60 bg-emerald-500/10 px-4 py-3 dark:border-emerald-400/60"
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
      <p className="mb-2 text-xs font-medium text-muted-foreground">Sending browser</p>
      <div className="rounded-xl border border-dashed p-3">
        {senderNodes.map((node, i) => (
          <div key={node.title}>
            {i > 0 && <Arrow />}
            <StackedNode node={node} />
          </div>
        ))}
      </div>

      <Arrow />
      <StackedNode node={{ title: "WebRTC DataChannel", detail: "SCTP over DTLS" }} accent />
      <Arrow />

      <p className="mb-2 mt-1 text-xs font-medium text-muted-foreground">Receiving browser</p>
      <div className="rounded-xl border border-dashed p-3">
        {receiverNodes.map((node, i) => (
          <div key={node.title}>
            {i > 0 && <Arrow />}
            <StackedNode node={node} />
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs italic text-muted-foreground">
        Everything above happens between the two browsers.
      </p>

      <div className="mt-4 rounded-xl border border-dashed p-3">
        <p className="mb-3 text-xs font-medium text-muted-foreground">
          Servers — none of them can read the file
        </p>
        <div className="space-y-2">
          {servers.map((server) => (
            <StackedNode key={server.title} node={server} />
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          The relay is released the moment the two devices connect. A relayed connection forwards
          the same encrypted packets, and is labelled relayed.
        </p>
      </div>
    </div>
  );
}

export function ShardropArchitecture() {
  return (
    <figure className="rounded-xl border bg-card p-4 sm:p-6">
      <WideDiagram />
      <StackedDiagram />
      <figcaption className="mt-4 border-t pt-4 text-sm text-muted-foreground">
        A shard is the unit of hashing, storage and resume; underneath it, frames are sized at
        runtime from <code className="text-xs">pc.sctp.maxMessageSize</code> because a DataChannel
        message cannot exceed what the connection negotiated — 256&nbsp;KiB in Chromium.
      </figcaption>
    </figure>
  );
}
