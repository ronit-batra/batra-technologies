export type { Product } from "./types";
import { Product } from "./types";

import { smartphoneProducts } from "./smartphones";
import { audioProducts } from "./audio";
import { wearableProducts } from "./wearables";
import { accessoryProducts } from "./accessories";

export const categories = [
  { name: "Smartphones", slug: "smartphones", image: "/images/cat-smartphones.avif" },
  { name: "Audio", slug: "headphones", image: "/images/cat-audio.webp" },
  { name: "Wearables", slug: "wearables", image: "/images/cat-wearables.jpg" },
  { name: "Accessories", slug: "accessories", image: "/images/cat-accessories.avif" },
];

export const products: Product[] = [
  ...smartphoneProducts,
  ...audioProducts,
  ...wearableProducts,
  ...accessoryProducts,
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge);
}

export function getDiscountPercent(price: number, originalPrice?: number): number {
  if (!originalPrice) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
