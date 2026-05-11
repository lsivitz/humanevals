const HOW_IT_WORKS = [
  {
    title: "Answer one concrete question",
    body: "Record a short response to a prompt that reveals how you actually recruit, not how you write about it.",
  },
  {
    title: "Get seen in context",
    body: "Every recruiter answers the same prompt, so the comparison feels legible instead of performative.",
  },
  {
    title: "Show up for hiring teams",
    body: "Strong answers become discoverable to teams hiring recruiters who want signal fast.",
  },
];

const DISCOVERY_SIGNALS = [
  {
    label: "Recruiter-first",
    title: "Built for the people being evaluated",
    body: "The page leads with the recruiter action, not buyer dashboards or vague marketplace promises.",
  },
  {
    label: "High-signal",
    title: "One prompt. Real judgment.",
    body: "A concrete sourcing question makes the product understandable in a second and gives the interface a real center of gravity.",
  },
  {
    label: "Shippable",
    title: "A landing page that can grow into the product",
    body: "The hero, CTA, and below-the-fold sections are all grounded in flows that can become real screens rather than dead-end mockups.",
  },
];

const TRUST_MARKERS = [
  "Invite-only beta",
  "Standardized recruiter prompts",
  "Hiring-team discovery",
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
          Sign up
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
            <div className="stage-meta">
              <span className="meta-pill meta-pill-live">
                <span className="live-dot" />
                Recording preview
              </span>
              <span className="meta-pill">Prompt 01 of 01</span>
            </div>

            <div className="video-surface">
              <div className="video-hud">
                <div className="prompt-bubble">
                  <span className="prompt-label">Prompt</span>
                  <p>How do you approach candidate sourcing?</p>
                </div>

                <div className="discovery-chip">
                  <span className="discovery-label">Discovery cue</span>
                  <strong>142 profile views</strong>
                  <span className="discovery-note">Previewed by hiring teams</span>
                </div>
              </div>

              <img
                className="poster-image"
                src="/recruiter-portrait.jpg"
                alt="Photorealistic front-facing recruiter video portrait inside the Humanevals recording interface"
              />

              <div className="video-gradient" />
              <div className="viewfinder" aria-hidden="true" />

              <div className="poster-caption">
                <span className="caption-kicker">Recruiter response</span>
                <p>
                  One sharp answer says more than another polished profile paragraph.
                </p>
              </div>

              <div className="control-bar">
                <div className="control-status">
                  <span className="live-dot" />
                  <span>REC</span>
                  <span className="time-stamp">00:57</span>
                </div>

                <div className="progress-track" aria-hidden="true">
                  <span className="progress-fill" />
                </div>

                <div className="control-actions">
                  <button className="secondary-button" type="button">
                    Retake
                  </button>
                  <a className="capture-button" id="signup" href="/record">
                    Record your first answer
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

      <section className="content-section container" id="how-it-works">
        <div className="section-copy">
          <p className="section-label">How it works</p>
          <h2>One question to get on the radar.</h2>
          <p>
            The first version should feel direct: answer a concrete recruiter question, show how
            you think, and become discoverable without pretending the system is more complex than it
            is.
          </p>
        </div>

        <div className="card-grid">
          {HOW_IT_WORKS.map((step, index) => (
            <article key={step.title} className="info-card">
              <span className="card-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section container content-section-secondary">
        <div className="section-copy">
          <p className="section-label">Discovery</p>
          <h2>Signal that feels earned, not self-reported.</h2>
          <p>
            Humanevals should read as premium and credible because the mechanic is legible. The
            recruiter records. The answer gets watched. The best people get noticed.
          </p>
        </div>

        <div className="card-grid">
          {DISCOVERY_SIGNALS.map((signal) => (
            <article key={signal.title} className="info-card info-card-accent">
              <span className="card-tag">{signal.label}</span>
              <h3>{signal.title}</h3>
              <p>{signal.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer container">
        <p>Invite-only beta for recruiters. Record one answer. Let hiring teams find you.</p>
      </footer>
    </main>
  );
}
