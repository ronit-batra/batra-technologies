"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(0);
    const t1 = setTimeout(() => setProgress(50), 100);
    const t2 = setTimeout(() => setProgress(80), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  useEffect(() => {
    if (progress >= 80) {
      const t = setTimeout(() => { setProgress(100); setTimeout(() => setLoading(false), 300); }, 200);
      return () => clearTimeout(t);
    }
  }, [progress]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px]">
      <div className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
