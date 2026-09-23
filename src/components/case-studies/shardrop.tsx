import { ShardropArchitecture } from "@/components/diagrams/shardrop-architecture";

const decisions = [
  {
    title: "A logical shard is not a wire message",
    body: (
      <>
        The SDP for a real connection advertises{" "}
        <code className="text-xs">a=max-message-size:262144</code>; Firefox advertises far more. So
        frame size is read from <code className="text-xs">pc.sctp.maxMessageSize</code> at runtime,
        and a 1–25&nbsp;MB shard is cut into frames underneath it. Two layers, two reasons: the
        shard is the unit of hashing, storage and resume; the frame is the unit the transport will
        actually accept.
      </>
    ),
  },
  {
    title: "An ACK is not about delivery, so silence is its own failure",
    body: (
      <>
        SCTP already guarantees delivery and ordering, so a per-shard hash does not defend against
        network corruption — it defends against bugs, storage faults and a hostile peer. Likewise{" "}
        <code className="text-xs">ACK</code> means <em>hashed and durably stored</em>, the only fact
        resume can be built on. That has a sharp consequence: a corrupted shard produces a{" "}
        <code className="text-xs">RETRY</code>, but a shard lost in flight produces{" "}
        <em>nothing at all</em>, because the receiver never knew it existed. Unacknowledged shards
        are requeued on a timeout. A test that dropped a shard and watched the sender wait forever
        found this, not the design.
      </>
    ),
  },
  {
    title: "One pairing code, two derived secrets",
    body: (
      <>
        Pairing across networks needs a relay, and a relay is a party that could rewrite the SDP —
        which carries the DTLS fingerprint that authenticates the &ldquo;direct&rdquo; connection.
        So one 80-bit code derives both the relay&rsquo;s room id and an AES-256-GCM key through
        HKDF. The relay sees an opaque room id and ciphertext it can neither read nor forge, and the
        code travels in the URL fragment, which browsers never send to a server. What that does not
        prove is <em>who</em> holds the code, so both screens also show four words derived from the
        two certificates.
      </>
    ),
  },
];

const numbers = [
  {
    figure: "1.1 GB/s",
    label:
      "SHA-256 throughput measured in Chromium — which disproved the plan's assumption that hashing needed a worker to keep the page responsive. The DataChannel is the bottleneck.",
  },
  {
    figure: "256 KiB",
    label:
      "the largest message the DataChannel accepts in Chromium, and the reason shards and frames are separate layers rather than one.",
  },
  {
    figure: "96 + 10",
    label:
      "unit tests against a fake wire that can corrupt a byte or drop a shard, plus browser tests driving two real tabs through real WebRTC and OPFS.",
  },
  {
    figure: "0",
    label:
      "servers that can read the file. On most networks none even sees it; when one must relay, it forwards packets it cannot decrypt, and the connection is labelled relayed.",
  },
];

export function ShardropStudy() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          The problem
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Sending someone a large file means uploading it to a server that keeps a copy, then
            having them download it. The file comes to rest on infrastructure neither party
            controls, which is a privacy problem, a cost problem, and — for a 5&nbsp;GB file on a
            hotel network — a patience problem.
          </p>
          <p>
            WebRTC can move bytes directly between two browsers. The interesting question is not
            whether a browser can open a peer connection; it can, in about thirty lines. It is
            everything that follows. A DataChannel message cannot exceed a size the connection
            negotiates. A tab cannot hold 5&nbsp;GB in memory. Networks drop and tabs reload, and a
            transfer that restarts from zero at 90% is useless. Two browsers on different networks
            cannot find each other unaided. And nothing about the word &ldquo;direct&rdquo; is
            self-evident to the person using it — they have to be told whether their file really
            went peer to peer.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <p className="mb-6 max-w-3xl text-muted-foreground">
          Nine browser modules, none of which touch the DOM, and one small relay. Correctness never
          depends on anything that was rendered.
        </p>
        <ShardropArchitecture />
      </section>

      <section>
        <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          Three decisions worth defending
        </h2>
        <div className="space-y-5">
          {decisions.map((decision) => (
            <div key={decision.title} className="rounded-xl border bg-card p-5 sm:p-6">
              <h3 className="mb-2 text-base font-semibold sm:text-lg">{decision.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {decision.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          Measured, not assumed
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {numbers.map((item) => (
            <div key={item.figure} className="rounded-xl border bg-card p-5">
              <p className="mb-2 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {item.figure}
              </p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm text-muted-foreground">
          The measurement was wrong first. The original harness reported zero stall everywhere —
          including for a deliberately blocking 300&nbsp;ms loop, because a stall is only observable
          on the frame <em>after</em> it and the watcher stopped one frame too early. That control
          case is now published alongside the numbers, so they can be checked rather than believed.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          What only production found
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Every test passed, and then the app went onto real devices and real networks. Almost
            none of what broke was in the transfer protocol; nearly all of it was in the waiting
            around it.
          </p>
          <p>
            <strong className="text-foreground">The credentials that never arrived.</strong> Moving
            TURN credentials to the relay changed two functions, one per side of a connection. The
            edit to the joining side matched text a formatter had already rewritten, so it replaced
            nothing and raised no error. Only the offering device ever asked for credentials — and
            the joining device is usually the phone, the one behind carrier-grade NAT that needs
            them. Both sides now build their connection through one function so they cannot drift
            apart, and an end-to-end test counts <code className="text-xs">/turn</code> requests
            from each device. It was run against the old code first, to watch it fail.
          </p>
          <p>
            <strong className="text-foreground">
              The event that fired before anyone listened.
            </strong>{" "}
            On the joining side a browser can open the data channel before{" "}
            <code className="text-xs">ondatachannel</code> hands it over, more often on a slow
            phone. Its open event has then already fired, so the app waited for something that had
            happened and, twenty seconds later, reported a working connection as failed. Timing bugs
            like that reproduce only sometimes in a real browser, so the regression test uses a fake
            peer connection that puts the events in the failing order every time.
          </p>
          <p>
            The pattern underneath both, and the lesson that stuck:{" "}
            <strong className="text-foreground">absence is a state</strong>. The hardest bugs were
            messages never sent, events already fired, relays that never answered. Every wait on the
            network now has a deadline, and every deadline says what it was waiting for.
          </p>
        </div>
      </section>
    </div>
  );
}
