"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { apiFetch } from "@/lib/api";

export default function WishlistButton({ productId }: { productId: string }) {
  const { user } = useAuth();
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) { setInWishlist(false); return; }
    apiFetch(`/wishlist/check/${productId}`)
      .then((data) => setInWishlist(data.inWishlist))
      .catch(() => {});
  }, [user, productId]);

  const toggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) { window.location.href = "/login"; return; }
    setLoading(true);
    try {
      if (inWishlist) {
        await apiFetch(`/wishlist/${productId}`, { method: "DELETE" });
        setInWishlist(false);
      } else {
        await apiFetch("/wishlist", { method: "POST", body: JSON.stringify({ productId }) });
        setInWishlist(true);
      }
    } catch {}
    setLoading(false);
  };

  return (
    <button onClick={toggle} disabled={loading} className={`p-2.5 rounded-xl transition-all duration-300 ${inWishlist ? "bg-red-500/10 border border-red-500/30 text-red-400" : "bg-dark-800 hover:bg-dark-700 border border-dark-700 text-dark-300 hover:text-gold-400"}`}>
      <Heart size={18} className={inWishlist ? "fill-red-400" : ""} />
    </button>
  );
}
