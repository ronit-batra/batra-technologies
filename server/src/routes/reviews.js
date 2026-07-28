const express = require("express");
const prisma = require("../prisma");
const auth = require("../middleware/auth");
const { safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

router.get("/product/:productId", async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      where: { productId: req.params.productId },
      include: { user: { select: { id: true, name: true } } },
      orderBy: { createdAt: "desc" },
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/check/:productId", auth, async (req, res) => {
  try {
    const review = await prisma.review.findUnique({
      where: { userId_productId: { userId: req.userId, productId: req.params.productId } },
    });
    res.json(review || null);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    if (!productId || !rating || !comment) {
      return res.status(400).json({ error: "Product ID, rating and comment are required" });
    }
    const parsedRating = parseInt(rating);
    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
    if (comment.trim().length < 3) {
      return res.status(400).json({ error: "Comment must be at least 3 characters" });
    }
    const existing = await prisma.review.findUnique({
      where: { userId_productId: { userId: req.userId, productId } },
    });
    if (existing) {
      return res.status(400).json({ error: "You have already reviewed this product" });
    }
    const review = await prisma.review.create({
      data: { userId: req.userId, productId, rating: parsedRating, comment: comment.trim() },
      include: { user: { select: { id: true, name: true } } },
    });

    const stats = await prisma.review.aggregate({
      where: { productId },
      _avg: { rating: true },
      _count: { id: true },
    });
    await prisma.product.update({
      where: { id: productId },
      data: {
        rating: Math.round((stats._avg.rating || 0) * 10) / 10,
        reviewCount: stats._count.id,
      },
    });

    res.json(review);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const review = await prisma.review.findUnique({ where: { id: req.params.id } });
    if (!review || review.userId !== req.userId) {
      return res.status(404).json({ error: "Review not found" });
    }
    await prisma.review.delete({ where: { id: req.params.id } });

    const stats = await prisma.review.aggregate({
      where: { productId: review.productId },
      _avg: { rating: true },
      _count: { id: true },
    });
    await prisma.product.update({
      where: { id: review.productId },
      data: {
        rating: Math.round((stats._avg.rating || 0) * 10) / 10,
        reviewCount: stats._count.id,
      },
    });

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

module.exports = router;
