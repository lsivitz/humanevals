"use client";

import { useState } from "react";
import { useFormAnalytics } from "../project-analytics";

export default function RecordIntentForm() {
  const [submitted, setSubmitted] = useState(false);
  const analytics = useFormAnalytics({ page: "/record" });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    analytics.trackSubmitAttempt({
      persona: String(formData.get("role") || "unknown").toLowerCase(),
      intent: String(formData.get("intent") || "unknown"),
    });
    const submission = {
      id: crypto.randomUUID(),
      name: formData.get("name"),
      email: formData.get("email"),
      profile: formData.get("profile"),
      role: formData.get("role"),
      intent: formData.get("intent"),
      answer: formData.get("answer"),
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("humanevals-intents") || "[]");
    localStorage.setItem("humanevals-intents", JSON.stringify([submission, ...existing]));
    analytics.trackCompleted({
      persona: String(submission.role || "unknown").toLowerCase(),
      intent: String(submission.intent || "unknown"),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="record-success" role="status">
        <span className="prompt-label">Request noted</span>
        <h2>You are on the invite list.</h2>
        <p>
          The next version will connect this to a durable backend. For this first live page, the
          signal is whether recruiters are willing to request a recording invite for the prompt.
        </p>
        <a className="capture-button" href="/">
          Back to landing page
        </a>
      </div>
    );
  }

  return (
    <form className="record-form" onChange={analytics.onChange} onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" autoComplete="name" required placeholder="Ari Patel" />
      </label>

      <label>
        <span>Work email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="ari@company.com"
        />
      </label>

      <label>
        <span>LinkedIn or profile URL</span>
        <input
          name="profile"
          type="url"
          autoComplete="url"
          required
          placeholder="https://linkedin.com/in/..."
        />
      </label>

      <label>
        <span>Which best describes you?</span>
        <select name="role" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option value="Recruiter">Recruiter</option>
          <option value="Manager">Manager</option>
          <option value="Founder">Founder</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        <span>Would you record this answer?</span>
        <select name="intent" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option>Yes, send me the invite</option>
          <option>Maybe, I want to see the format first</option>
          <option>No, but I will review the idea</option>
        </select>
      </label>

      <label>
        <span>Optional short answer</span>
        <textarea
          name="answer"
          rows="4"
          placeholder="A few lines on how you think about candidate sourcing..."
        />
      </label>

      <p className="record-consent">
        Invite-only beta. We will not publish anything without explicit approval.
      </p>

      <button className="capture-button record-submit" type="submit">
        Request recording invite
      </button>
    </form>
  );
}
