export const metadata = {
  title: "Request a Recording Invite | Humanevals",
};

import RecordIntentForm from "./record-intent-form";
import { PageView } from "../project-analytics";

export default function RecordPage() {
  return (
    <main className="record-page">
      <PageView page="/record" />
      <div className="record-shell">
        <a className="record-back" href="/">
          Back to landing page
        </a>

        <p className="section-label">Invite-only beta</p>
        <h1>Request a recording invite.</h1>
        <p>
          Start with one skill-revealing prompt. If this feels worth putting your professional name
          behind, request access and we will follow up with the recording link.
        </p>

        <div className="record-card">
          <span className="prompt-label">Prompt</span>
          <p>How do you approach candidate sourcing?</p>
        </div>

        <RecordIntentForm />
      </div>
    </main>
  );
}
