import { BlastRadiusArchitecture } from "@/components/diagrams/blast-radius-architecture";

const decisions = [
  {
    title: "Simulate, don't animate — and seed it",
    body: (
      <>
        Animated diagrams move dots at a fixed rate, so a dot reaching a dead database looks like
        one reaching a healthy one. Here every 100&nbsp;ms request rates flow through the graph,
        components saturate and drop, latency climbs along a queueing curve, and about 200 sampled
        requests measure the real p99. The random source is seeded, so the same design and scenario
        always produce the same numbers — which is what makes the tests exact and the leaderboard
        verifiable.
      </>
    ),
  },
  {
    title: "The server re-runs every score",
    body: (
      <>
        Anything the browser computes, the player can change. So the browser can&rsquo;t write a
        score at all: the scores table has row-level security with no insert policy. A Supabase edge
        function loads the submitted design with the player&rsquo;s own session, re-runs the
        scenario with a Deno copy of the same engine, and stores the result. A test fails CI if that
        copy drifts from the browser&rsquo;s by a single byte.
      </>
    ),
  },
  {
    title: "Rules grade it; a local AI explains it",
    body: (
      <>
        A grade that changes when you ask twice teaches the wrong lesson, so the A&ndash;F review is
        rules: graph analysis for single points of failure, a headless run for bottlenecks. The AI
        came second and got a narrower job. A small open model runs on the visitor&rsquo;s GPU
        through WebLLM — no API key, no bill, nothing sent — and it is given a fact sheet built from
        the engine&rsquo;s own output, so it quotes real numbers instead of inventing them.
      </>
    ),
  },
];

const numbers = [
  {
    figure: "1000 = 1000",
    label:
      "the score the browser showed and the score the server recomputed, on the live project. A forged insert from the client was refused by Postgres.",
  },
  {
    figure: "5 / 5",
    label:
      "challenges a reference design survives within budget — while 40 fixed replicas fails Black Friday on cost, so money alone doesn't win.",
  },
  {
    figure: "52 + 17",
    label:
      "unit tests in about 3.5 seconds (91% coverage of the engine), plus 17 checks driving the production build in headless Chrome under the production CSP.",
  },
  {
    figure: "0",
    label:
      "requests to hosts outside the allow-list during a full browser run. The design and the AI conversation never leave the tab.",
  },
];

export function BlastRadiusStudy() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          The problem
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Every system design conversation ends at a whiteboard, and whiteboards don&rsquo;t fail.
            Nobody sees that the single Postgres box takes the whole site down, that the cache in
            front of it turns a Redis outage into a database stampede, or that &ldquo;add
            retries&rdquo; turns a slowdown into an outage. Engineers learn those in production
            incidents.
          </p>
          <p>
            I wanted somewhere to learn them in thirty seconds: draw the system, press Play, break
            it, and watch the blast radius spread — then get a score you can&rsquo;t fake and an
            explanation you don&rsquo;t pay for.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <p className="mb-6 max-w-3xl text-muted-foreground">
          React and React Flow on the front, a pure TypeScript engine underneath, an open model on
          WebGPU for the analyst, and Supabase for accounts, saved designs and the verified
          leaderboard.
        </p>
        <BlastRadiusArchitecture />
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
            <div key={item.label} className="rounded-xl border bg-card p-5">
              <p className="mb-2 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {item.figure}
              </p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm text-muted-foreground">
          The test suite was attacked before it was trusted. It passed 52 of 52 on its first run, so
          I broke the engine on purpose: a dead cache that failed every request instead of passing
          it to the database. The suite still passed — the test checked database load, not whether
          requests succeeded. It checks both now, and re-breaking it makes it fail.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          What balancing the game found
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            A challenge is a test with a score attached, and the first version of every challenge
            was wrong in one direction or the other.
          </p>
          <p>
            <strong className="text-foreground">A challenge everyone could win.</strong> A
            single-server design &ldquo;survived&rdquo; The Slow Provider because it had no provider
            to slow down. Scenarios now declare the components they need, and a design without them
            can&rsquo;t enter.
          </p>
          <p>
            <strong className="text-foreground">A challenge no one could win.</strong> The
            autoscaler added one replica every ten seconds — too slow for a 10x ramp at any budget.
            It now tracks its utilization target and adds what&rsquo;s needed, and a test proves a
            winning design exists for every scenario.
          </p>
          <p>
            <strong className="text-foreground">Paused that looked like running.</strong> SVG
            animations run on the browser&rsquo;s clock, not React&rsquo;s, so particles kept
            flowing after Pause. They freeze now, there&rsquo;s a real Stop button, and the browser
            test compares particle positions while paused.
          </p>
          <p>
            The lesson that stuck:{" "}
            <strong className="text-foreground">balance is a correctness property</strong>. An
            unwinnable challenge and a free win are both bugs, and both were invisible until a test
            asserted that a winning design exists and that money alone doesn&rsquo;t win.
          </p>
        </div>
      </section>
    </div>
  );
}
