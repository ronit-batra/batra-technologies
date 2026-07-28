const { PrismaClient } = require("@prisma/client");
const products = require("../products.json");

async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.product.deleteMany();
    for (const p of products) {
      await prisma.product.create({
        data: {
          id: p.id,
          name: p.name,
          brand: p.brand,
          category: p.category,
          price: p.price,
          originalPrice: p.originalPrice || null,
          description: p.description,
          features: p.features,
          specifications: p.specifications,
          images: p.images,
          rating: p.rating,
          reviewCount: p.reviewCount,
          inStock: p.inStock,
          badge: p.badge || null,
        },
      });
    }
    console.log(`Seeded ${products.length} products`);
  } catch (err) {
    console.error("Seed error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
