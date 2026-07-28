"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { getDiscountPercent } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import WishlistButton from "@/components/WishlistButton";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart } = useCart();
  const discount = getDiscountPercent(product.price, product.originalPrice);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative card-hover" style={{ animationDelay: `${index * 100}ms` }}>
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-dark-900 rounded-2xl overflow-hidden border border-dark-800/50 group-hover:border-gold-500/30 transition-all duration-500">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-gold-500/90 text-dark-950 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="absolute top-4 right-4 bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full">
              -{discount}%
            </span>
          )}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <WishlistButton productId={product.id} />
          </div>
        </div>
      </Link>

      <div className="mt-5 space-y-3">
        <p className="text-[11px] text-gold-400 font-semibold uppercase tracking-[0.2em]">{product.brand}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-display text-lg text-white group-hover:text-gold-400 transition-colors duration-300">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-gold-400 text-gold-400" : "text-dark-700 fill-dark-700"} />
          ))}
          <span className="text-[11px] text-dark-500 ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-white">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-dark-500 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              added
                ? "bg-green-500 text-white scale-110"
                : "bg-dark-800 hover:bg-gold-500 hover:text-dark-950 text-dark-300 hover:scale-105 active:scale-95"
            }`}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
