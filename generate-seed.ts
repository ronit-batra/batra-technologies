// Run with: npx tsx generate-seed.ts
import { products } from "./src/data/products";
import { writeFileSync } from "fs";
writeFileSync("server/products.json", JSON.stringify(products, null, 2));
console.log(`Exported ${products.length} products to server/products.json`);
