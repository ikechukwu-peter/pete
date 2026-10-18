import { PushupQuestArchitecture } from "@/components/diagrams/pushup-quest-architecture";

const decisions = [
  {
    title: "A returned joint is not a seen joint",
    body: (
      <>
        The pose model always returns 33 landmarks, including ones it guessed off-screen, often with
        middling confidence. Sitting at a desk with my wrists below the frame, the guessed wrists
        jittered across the depth threshold and counted reps. So every joint a rep depends on must
        be confident <em>and</em> inside the frame, checked on normalized coordinates, and a dropout
        of more than 0.7&nbsp;s abandons the rep in progress rather than resuming it with stale
        data.
      </>
    ),
  },
  {
    title: "From the front, the elbow angle lies",
    body: (
      <>
        A camera flattens the scene to 2D, and collinear points stay collinear: a straight arm
        always looks straight, but a bent one can too when it bends along the camera&rsquo;s line of
        sight. So the depth signal is the larger of two cues — the elbow angle, and how far the
        shoulders have dropped toward the wrists against the arm length measured while it was
        straight. The second cue is what makes a phone propped in front of you work at all.
      </>
    ),
  },
  {
    title: "In a pushup the hands do not move",
    body: (
      <>
        Squatting in front of the camera lowers the shoulders exactly like a pushup does; no depth
        threshold can tell them apart. What differs physically is the hands: in a pushup they are
        planted, in a squat they drop with you. So each hand is anchored at the top of the rep and
        must stay within a fraction of an arm length — tracked per hand, because at the bottom the
        far hand often vanishes behind the body, and an average of two hands jumps when one leaves.
      </>
    ),
  },
];

const numbers = [
  {
    figure: "6 / 6",
    label:
      "side-view pushups counted on replayed public footage — and 6 of 6 again when the whole app ran in Chrome with that video as its camera.",
  },
  {
    figure: "0",
    label:
      "false reps across close-ups and talking, burpees, squats in pushup mode, walking out of frame and 40 seconds idle at a desk. Before the gates: 5, 3 and 1.",
  },
  {
    figure: "23",
    label:
      "tests that run in about a second with no browser or camera: synthetic poses, six real clips, and stress cases rebuilt from the failures I hit on my own webcam.",
  },
  {
    figure: "0",
    label:
      "requests leaving the app's origin across a 75-second live battle, recorded from the network log — after one was found that did.",
  },
];

export function PushupQuestStudy() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          The problem
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            I downloaded a pushup RPG for iOS and found it wanted a subscription to count my own
            pushups. The idea is a good one — every rep is a sword swing, so a set becomes a fight
            you want to finish — and a browser can now run a pose model on a phone&rsquo;s GPU. So I
            built my own: installable, offline, and with no server that ever sees me exercising.
          </p>
          <p>
            Counting reps from a camera sounds solved until you point one at a real person in a real
            room. Joints leave the frame. People stand up, lie down, walk to the phone and back.
            Squats look like pushups to anything measuring height. And a counter you keep score
            against has one rule above the others: missing a rep is an annoyance, inventing one
            makes the whole thing pointless.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <p className="mb-6 max-w-3xl text-muted-foreground">
          Plain HTML, CSS and JavaScript, no build step. The pose model is vendored, so the app
          talks to one origin, and a Content-Security-Policy means the browser refuses any other.
        </p>
        <PushupQuestArchitecture />
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
          The measurement was wrong first. The landmark extractor seeked through each video, and
          headless Chrome does not repaint a seeked <code className="text-xs">&lt;video&gt;</code> —
          so every early &ldquo;measurement&rdquo; was the first frame repeated hundreds of times. A
          clip that returned no pose for a plainly visible person gave it away. Frames are now split
          out with ffmpeg and fed as images, the fixtures are committed, and the numbers can be
          rerun rather than believed.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          What only a real webcam found
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            The synthetic tests passed, and then I did pushups in front of my laptop. Every failure
            that mattered came from a body, not from the math.
          </p>
          <p>
            <strong className="text-foreground">Counting while I sat still.</strong> Guessed wrists
            below the frame crossed the threshold. The fix was not a tighter number but a different
            question — is this joint actually seen? — and a test that replays a seated person with
            jittering off-screen wrists for forty seconds and expects zero.
          </p>
          <p>
            <strong className="text-foreground">Slow to find me after I lay down.</strong> Losing
            sight of my arms for a moment wiped the calibration, and confidence flicker kept
            restarting the &ldquo;hold the top&rdquo; timer, so it looped until I froze. Short
            dropouts now keep the calibration and re-lock in a tenth of a second, and posture has to
            be wrong for 400&nbsp;ms before a rep is abandoned. The regression test lies flat for
            three seconds mid-set and still counts six of six.
          </p>
          <p>
            <strong className="text-foreground">A promise that was false.</strong> Before writing
            the first-launch note — your video and progress never leave this device — I read the
            vendored bundle. MediaPipe posts usage statistics to Google every 60 seconds, with no
            switch to turn it off. The logger is now patched off, the CSP would refuse it anyway,
            and the note was written only after a network log showed it to be true.
          </p>
          <p>
            The lesson that stuck:{" "}
            <strong className="text-foreground">
              a false positive has a cause, and a threshold cannot name it
            </strong>
            . Out of frame, squatting and sitting still all crossed the same number. Fixing them
            meant asking what was physically different — and then proving each answer against
            footage of real people.
          </p>
        </div>
      </section>
    </div>
  );
}
