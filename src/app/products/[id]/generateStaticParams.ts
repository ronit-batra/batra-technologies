import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
