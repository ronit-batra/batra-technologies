const express = require("express");
const prisma = require("../prisma");
const { sendOrderStatusUpdate } = require("../utils/email");
const { VALID_ORDER_STATUSES, safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

function adminAuth(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (key !== process.env.ADMIN_KEY) return res.status(403).json({ error: "Invalid admin key" });
  next();
}

router.get("/orders", adminAuth, async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { id: true, name: true, email: true, phone: true },
        },
      },
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.put("/orders/:id/status", adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status || !VALID_ORDER_STATUSES.includes(status)) {
      return res.status(400).json({ error: `Invalid status. Must be one of: ${VALID_ORDER_STATUSES.join(", ")}` });
    }
    const existing = await prisma.order.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: "Order not found" });
    const order = await prisma.order.update({
      where: { id: req.params.id },
      data: { status },
    });

    try {
      if (existing) {
        const user = await prisma.user.findUnique({ where: { id: existing.userId }, select: { email: true, name: true } });
        if (user && user.email) {
          await sendOrderStatusUpdate(user.email, user.name, order, existing.status);
        }
      }
    } catch (emailErr) {
      console.error("Order status email failed:", emailErr.message);
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/users", adminAuth, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true, name: true, email: true, phone: true,
        createdAt: true,
        _count: { select: { orders: true, savedAddresses: true } },
      },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/stats", adminAuth, async (req, res) => {
  try {
    const totalOrders = await prisma.order.count();
    const totalUsers = await prisma.user.count();
    const totalProducts = await prisma.product.count();
    const revenue = await prisma.order.aggregate({ _sum: { totalAmount: true }, where: { status: { not: "cancelled" } } });
    const pendingOrders = await prisma.order.count({ where: { status: "pending" } });
    const confirmedOrders = await prisma.order.count({ where: { status: "confirmed" } });
    const deliveredOrders = await prisma.order.count({ where: { status: "delivered" } });
    res.json({
      totalOrders, totalUsers, totalProducts,
      totalRevenue: revenue._sum.totalAmount || 0,
      pendingOrders, confirmedOrders, deliveredOrders,
    });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/password-resets", adminAuth, async (req, res) => {
  try {
    const resets = await prisma.passwordReset.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { id: true, name: true, email: true, phone: true },
        },
      },
    });
    res.json(resets);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/users/:id", adminAuth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      select: {
        id: true, name: true, email: true, phone: true, createdAt: true,
        orders: {
          orderBy: { createdAt: "desc" },
          select: {
            id: true, items: true, totalAmount: true, status: true,
            shippingName: true, shippingPhone: true, shippingAddress: true,
            shippingCity: true, shippingState: true, shippingPincode: true,
            paymentMethod: true, createdAt: true,
          },
        },
        savedAddresses: { orderBy: { createdAt: "desc" } },
        reviews: {
          orderBy: { createdAt: "desc" },
          select: { id: true, rating: true, comment: true, createdAt: true, product: { select: { id: true, name: true, brand: true } } },
        },
        wishlists: {
          orderBy: { createdAt: "desc" },
          select: { id: true, createdAt: true, product: { select: { id: true, name: true, brand: true, price: true, images: true } } },
        },
        messages: {
          orderBy: { createdAt: "desc" },
          select: { id: true, subject: true, message: true, status: true, replyMessage: true, createdAt: true },
        },
        passwordResets: {
          orderBy: { createdAt: "desc" },
          select: { id: true, method: true, status: true, failReason: true, ipAddress: true, requestedAt: true, verifiedAt: true, completedAt: true, createdAt: true },
        },
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });

    const totalSpent = user.orders.reduce((sum, o) => sum + (o.status !== "cancelled" ? o.totalAmount : 0), 0);
    res.json({ ...user, totalSpent });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

module.exports = router;
