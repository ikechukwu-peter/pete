import { AuraArchitecture } from "@/components/diagrams/aura-architecture";

const decisions = [
  {
    title: "CAS UPDATE … WHERE over SELECT-FOR-UPDATE or optimistic reads",
    body: (
      <>
        The classic ticket tutorial reads <code className="text-xs">sold</code>, compares, then
        writes — and two concurrent buyers both see <code className="text-xs">sold = 4999</code>.
        Moving the predicate <em>into the UPDATE</em> collapses the read into the write so Postgres
        serializes it on the tuple. If <code className="text-xs">updateMany.count !== 1</code>, the
        request loses cleanly — no partial writes, no compensation, no deadlock window from a
        separately-locked SELECT. The rest of the system is built around this one statement.
      </>
    ),
  },
  {
    title: "Schema-enforced UNIQUEs over application-level dedup",
    body: (
      <>
        Idempotency keys and seat-number pairs are enforced by the database, not by a
        find-before-insert in TypeScript. That is deliberate: a buggy refactor, a bulk migration, or
        an operator manually writing into Postgres can still never create two reservations with the
        same key or two tickets with the same{" "}
        <code className="text-xs">(eventId, ticketIndex)</code>. If correctness depends on your app
        code never drifting, you do not actually have correctness.
      </>
    ),
  },
  {
    title: "Held seats counted against capacity from CAS time, not confirm time",
    body: (
      <>
        Saying &ldquo;10-minute hold&rdquo; but running the capacity write only at confirm is lying
        to someone who just pulled out their card for a concert they have been waiting a year for.
        The CAS increments the sold counter the moment a reservation is created, and the TTL worker
        atomically reverts it on expiry. Scalpers can still hold seats — so per-user caps and an{" "}
        <code className="text-xs">isBlocked</code> flag exist — but a real buyer in checkout does
        not lose the slot to someone refreshing faster.
      </>
    ),
  },
];

const numbers = [
  {
    figure: "3k–8k / s",
    label:
      "writes on a single hot Event row with a managed Postgres behind PgBouncer. Everything else scales horizontally; this number is the honest engineering ceiling, not a marketing promise.",
  },
  {
    figure: "4 tiers",
    label:
      "of oversell defense stacked in order: CAS UPDATE · idempotencyKey UNIQUE · (eventId, ticketIndex) @@unique · reconcileCapacity. A bug at tiers 1–3 is caught by the rest. Nothing silently succeeds.",
  },
  {
    figure: "10 min",
    label:
      "TTL held against capacity. Expired holds are reverted inside the same row-locking transaction as the state change, so double-scheduled workers cannot double-revert. The reconciler runs every 5 minutes anyway.",
  },
  {
    figure: "0 DB calls",
    label:
      "to reject a photo-forged QR at the door. The scanner verifies the HMAC locally with TICKET_SECRET before any POST. Forgeries are rejected in milliseconds; venue Wi-Fi cannot cause a gate riot.",
  },
];

export function AuraStudy() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          The problem
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Everyone knows the two-sentence pitch: ticket the event, collect money, send a QR. What
            is never in the pitch is the part that matters. What happens when fifty thousand people
            all refresh the same 5,000-seat tour at the same moment? What happens when a phone on 4G
            taps &ldquo;Buy&rdquo; four times? What happens when a refactor accidentally creates
            Ticket rows outside the correctness transaction?
          </p>
          <p>
            Most first implementations read <code className="text-xs">sold</code> from the event
            row, compare it to capacity, then write the new tickets and the new sold count. Under
            any real concurrency, two requests both read the same stale number, and you just
            oversold by however many writers were racing. Fixing the race with a lock is not the
            interesting work. The interesting work is stacking enough independent, non-redundant
            guardrails that a bug in any one layer still cannot produce a duplicate seat on the
            ground — and writing the system honestly so someone reading it can verify that.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <p className="mb-6 max-w-3xl text-muted-foreground">
          Nine modules arranged so the write path is one horizontal line, and nothing can bypass it.
          Correctness never depends on anything rendered.
        </p>
        <AuraArchitecture />
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
          The measurement that mattered most was not a benchmark. It was deliberately running two
          concurrent buyers on the last seat of a 500-seat event — and verifying that exactly one of
          them succeeded, exactly one
          <code className="text-xs"> Ticket </code> row was written, and no compensating write was
          needed. Without that control case, every higher number is decoration.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          What only production will find
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            The four tiers degrade gracefully: a bug at tier 1 is still caught by 2, 3, or 4.
            Production finds the shape of drift, not the fact of it.
          </p>
          <p>
            <strong className="text-foreground">The credentials that rotate wrong.</strong> Rotating{" "}
            <code className="text-xs">TICKET_SECRET</code> naively — replace the value and redeploy
            — breaks every unsold ticket immediately, because the scanner is still verifying against
            the old secret. The correct playbook (dual-sign for 24&nbsp;h, verify against a list of
            two, drop the old one later) is documented in the Aura repo because missing the overlap
            window causes a gate riot, not a warning.
          </p>
          <p>
            <strong className="text-foreground">The connection pool that starves the CAS.</strong>{" "}
            Under 10&nbsp;k keepalives, Prisma&rsquo;s pool hits its ceiling, and adding more app
            servers makes it worse — each instance opens another 50–100 real DB connections and
            exhausts Postgres{"'"}
            <code className="text-xs"> max_connections</code> outright. The fix is not more servers;
            it is PgBouncer in transaction-pooling mode first, because the actual CAS UPDATE lasts
            microseconds, not the lifetime of the HTTP keepalive. Adding capacity before the pooler
            is the classic production mistake because the problem is invisible at dev concurrency.
          </p>
          <p>
            The pattern underneath both is the one that keeps paying for itself:{" "}
            <strong className="text-foreground">absence is a state.</strong> A secret that never
            rotated, a connection that never got a pooler, a reconciler that never ran are all bugs.
            Every network wait has a deadline. Every capacity counter has a re-count. Every signing
            key has a documented overlap window.
          </p>
        </div>
      </section>
    </div>
  );
}
