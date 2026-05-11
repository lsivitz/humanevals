const PROCESS_STEPS = [
  {
    title: "Record",
    body: "One focused answer.",
  },
  {
    title: "Review",
    body: "Approve the profile.",
  },
  {
    title: "Discover",
    body: "Get seen by hiring teams.",
  },
];

const HIRING_TEAM_SIGNALS = [
  {
    label: "Sourcing judgment",
    body: "How they define the market and choose where to search first.",
  },
  {
    label: "Market fluency",
    body: "Whether their answer shows real pattern recognition.",
  },
  {
    label: "Communication",
    body: "How clearly they explain tradeoffs and next steps.",
  },
];

const TRUST_MARKERS = [
  "Invite-only beta",
  "Profiles reviewed before sharing",
  "Built for recruiter discovery",
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="site-header container">
        <a className="wordmark" href="/">
          Humanevals
        </a>
        <a className="nav-link" href="/record">
          Apply
        </a>
      </header>

      <section className="hero container">
        <p className="hero-eyebrow">Video-first recruiter discovery</p>
        <h1 className="hero-title">Great recruiters deserve to be discovered.</h1>
        <p className="hero-copy">
          A video-first marketplace where recruiters answer one question on video and get
          discovered by hiring teams.
        </p>

        <div className="hero-stage">
          <div className="stage-frame">
            <div className="video-surface">
              <div className="video-hud">
                <div className="prompt-bubble">
                  <span className="prompt-label">Question</span>
                  <p>How do you approach candidate sourcing?</p>
                </div>
              </div>

              <img
                className="poster-image"
                src="/recruiter-portrait.jpg"
                alt="Photorealistic front-facing recruiter video portrait inside the Humanevals recording interface"
              />

              <div className="video-gradient" />
              <div className="viewfinder" aria-hidden="true" />

              <div className="control-bar control-bar-simple">
                <div className="control-copy">
                  <span>Recruiter beta</span>
                  <strong>Apply now. We review profiles before sharing them with hiring teams.</strong>
                </div>
                <div className="control-actions">
                  <a className="capture-button" id="signup" href="/record">
                    Apply to join
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-row" aria-label="Humanevals product markers">
            {TRUST_MARKERS.map((item) => (
              <span key={item} className="trust-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rhythm-section container" id="how-it-works">
        <div className="rhythm-copy">
          <p className="section-label">Why it works</p>
          <h2>Recruiting craft is easier to trust when you can see it.</h2>
        </div>

        <div className="prompt-showcase">
          <span className="prompt-label">First prompt</span>
          <p>How do you approach candidate sourcing?</p>
          <div className="signal-row">
            <span>Sourcing judgment</span>
            <span>Market read</span>
            <span>Communication</span>
          </div>
        </div>
      </section>

      <section className="flow-strip container" aria-label="Humanevals beta flow">
        {PROCESS_STEPS.map((step, index) => (
          <div key={step.title} className="flow-step">
            <span>0{index + 1}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </div>
        ))}
      </section>

      <section className="proof-section container">
        <div className="proof-copy">
          <p className="section-label">What hiring teams see</p>
          <h2>A sharper read than another LinkedIn profile.</h2>
          <p>
            Every profile starts with the same prompt, a short recruiter answer, and the
            signals teams should watch for.
          </p>
        </div>

        <div className="profile-read">
          <div className="profile-read-header">
            <span>Approved profile</span>
            <strong>Candidate sourcing answer</strong>
          </div>

          <div className="answer-sample">
            <span>Sample answer</span>
            <p>
              "I start by mapping where the strongest candidates are likely to be overlooked,
              then test two sourcing channels before scaling outreach."
            </p>
          </div>

          <div className="signal-stack">
            {HIRING_TEAM_SIGNALS.map((signal) => (
              <div key={signal.label} className="signal-item">
                <strong>{signal.label}</strong>
                <span>{signal.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer container">
        <p>Invite-only beta for recruiters. Record one answer. Let hiring teams find you.</p>
      </footer>
    </main>
  );
}
