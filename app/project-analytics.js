"use client";

import { useEffect, useRef } from "react";

const CAPTURE_HOST = process.env.NEXT_PUBLIC_POSTHOG_CAPTURE_HOST || "https://us.i.posthog.com";
const PROJECT_KEY = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_API_KEY;

export function trackProjectEvent(event, page, properties = {}) {
  if (!PROJECT_KEY || typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const payload = {
    api_key: PROJECT_KEY,
    event,
    distinct_id: window.localStorage.getItem("humanevals-visitor-id") || createVisitorId(),
    properties: {
      project: "Humanevals",
      environment: process.env.NODE_ENV === "production" ? "production" : "development",
      page,
      source: params.get("source") || document.referrer || "direct",
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      "$process_person_profile": false,
      ...properties,
    },
  };

  fetch(`${CAPTURE_HOST.replace(/\/$/, "")}/i/v0/e/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function createVisitorId() {
  const id = crypto.randomUUID();
  window.localStorage.setItem("humanevals-visitor-id", id);
  return id;
}

export function PageView({ page }) {
  useEffect(() => {
    trackProjectEvent("page_viewed", page);
  }, [page]);

  return null;
}

export function TrackLink({ href, className, children, event = "cta_clicked", page = "/", properties = {} }) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => trackProjectEvent(event, page, properties)}
    >
      {children}
    </a>
  );
}

export function useFormAnalytics({ page }) {
  const startedRef = useRef(false);

  return {
    onChange() {
      if (startedRef.current) return;
      startedRef.current = true;
      trackProjectEvent("form_started", page);
    },
    trackSubmitAttempt(properties = {}) {
      trackProjectEvent("submit_attempted", page, properties);
    },
    trackCompleted(properties = {}) {
      trackProjectEvent("submission_completed", page, properties);
    },
  };
}
