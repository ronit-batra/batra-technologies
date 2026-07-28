"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";
const TRACK_URL = `${API_URL}/analytics/track`;

function getVisitorId(): string {
  let id = localStorage.getItem("bt-visitor-id");
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("bt-visitor-id", id);
  }
  return id;
}

function track(data: Record<string, any>) {
  try {
    fetch(TRACK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

export function useAnalytics() {
  const pathname = usePathname();
  const startTime = useRef<number>(Date.now());
  const sent = useRef(false);

  useEffect(() => {
    startTime.current = Date.now();
    sent.current = false;

    const visitorId = getVisitorId();

    track({ visitorId, page: pathname, referrer: document.referrer || null, userAgent: navigator.userAgent });

    const handleUnload = () => {
      if (sent.current) return;
      sent.current = true;
      const duration = Math.round((Date.now() - startTime.current) / 1000);
      track({ visitorId, page: pathname, duration });
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [pathname]);
}
