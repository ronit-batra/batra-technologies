"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const LoadingContext = createContext({ done: true });

export function useLoadingDone() {
  return useContext(LoadingContext).done;
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const isFirstLoad = typeof window === "undefined" || !sessionStorage.getItem("bt-loaded");
  const [done, setDone] = useState(!isFirstLoad);

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("bt-loaded", "1");
    }, 5500);
    return () => clearTimeout(t);
  }, [done]);

  useEffect(() => {
    const onUnload = () => sessionStorage.removeItem("bt-loaded");
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, []);

  return (
    <LoadingContext.Provider value={{ done }}>
      {children}
    </LoadingContext.Provider>
  );
}
