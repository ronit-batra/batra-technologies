"use client";

import { ReactNode } from "react";
import { useLoadingDone } from "./LoadingProvider";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  const done = useLoadingDone();

  return (
    <div style={{ opacity: done ? 1 : 0, transition: "opacity 0.4s ease 0.2s" }}>
      {children}
    </div>
  );
}
