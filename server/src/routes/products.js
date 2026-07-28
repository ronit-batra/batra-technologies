const express = require("express");
const prisma = require("../prisma");
const { safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category, brand, search } = req.query;
    const where = {};
    if (category) where.category = category;
    if (brand) where.brand = brand;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { brand: { contains: search, mode: "insensitive" } },
      ];
    }
    const products = await prisma.product.findMany({ where, orderBy: { name: "asc" } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({ where: { id: req.params.id } });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

module.exports = router;
