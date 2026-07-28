const express = require("express");
const prisma = require("../prisma");
const auth = require("../middleware/auth");
const { safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const items = await prisma.wishlist.findMany({
      where: { userId: req.userId },
      include: { product: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/check/:productId", auth, async (req, res) => {
  try {
    const item = await prisma.wishlist.findUnique({
      where: { userId_productId: { userId: req.userId, productId: req.params.productId } },
    });
    res.json({ inWishlist: !!item });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ error: "Product ID required" });
    const existing = await prisma.wishlist.findUnique({
      where: { userId_productId: { userId: req.userId, productId } },
    });
    if (existing) {
      return res.status(400).json({ error: "Already in wishlist" });
    }
    const item = await prisma.wishlist.create({
      data: { userId: req.userId, productId },
      include: { product: true },
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.delete("/:productId", auth, async (req, res) => {
  try {
    await prisma.wishlist.deleteMany({
      where: { userId: req.userId, productId: req.params.productId },
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

module.exports = router;
