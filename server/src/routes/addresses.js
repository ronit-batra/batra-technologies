const express = require("express");
const prisma = require("../prisma");
const auth = require("../middleware/auth");
const { safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const addresses = await prisma.savedAddress.findMany({
      where: { userId: req.userId },
      orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
    });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { label, name, phone, address, city, state, pincode, isDefault } = req.body;
    if (!name || !phone || !address || !city || !state || !pincode) {
      return res.status(400).json({ error: "All address fields are required" });
    }
    if (isDefault) {
      await prisma.savedAddress.updateMany({ where: { userId: req.userId }, data: { isDefault: false } });
    }
    const count = await prisma.savedAddress.count({ where: { userId: req.userId } });
    const saved = await prisma.savedAddress.create({
      data: {
        userId: req.userId,
        label: label || "Home",
        name,
        phone,
        address,
        city,
        state,
        pincode,
        isDefault: count === 0 ? true : !!isDefault,
      },
    });
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const existing = await prisma.savedAddress.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.userId) {
      return res.status(404).json({ error: "Address not found" });
    }
    const { label, name, phone, address, city, state, pincode, isDefault } = req.body;
    if (isDefault) {
      await prisma.savedAddress.updateMany({ where: { userId: req.userId }, data: { isDefault: false } });
    }
    const updated = await prisma.savedAddress.update({
      where: { id: req.params.id },
      data: { label, name, phone, address, city, state, pincode, isDefault: !!isDefault },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const existing = await prisma.savedAddress.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.userId) {
      return res.status(404).json({ error: "Address not found" });
    }
    await prisma.savedAddress.delete({ where: { id: req.params.id } });
    if (existing.isDefault) {
      const next = await prisma.savedAddress.findFirst({ where: { userId: req.userId }, orderBy: { createdAt: "desc" } });
      if (next) await prisma.savedAddress.update({ where: { id: next.id }, data: { isDefault: true } });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

module.exports = router;
