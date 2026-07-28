"use client";

import { useState, useEffect, useCallback } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STORAGE_KEY = "bt-recently-viewed";
const MAX_ITEMS = 8;

export function trackRecentlyViewed(productId: string) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let ids: string[] = raw ? JSON.parse(raw) : [];
    ids = ids.filter((id) => id !== productId);
    ids.unshift(productId);
    if (ids.length > MAX_ITEMS) ids = ids.slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {}
}

export default function RecentlyViewed() {
  const [recentIds, setRecentIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRecentIds(JSON.parse(raw));
    } catch {}
  }, []);

  const recentProducts = recentIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 8) as typeof products;

  if (recentProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-16">
        <div>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.3em]">Browsing History</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">Recently Viewed</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recentProducts.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
