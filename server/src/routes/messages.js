const express = require("express");
const prisma = require("../prisma");
const auth = require("../middleware/auth");
const { sendQueryReply } = require("../utils/email");
const { VALID_MESSAGE_STATUSES, safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

function adminAuth(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (key !== process.env.ADMIN_KEY) return res.status(403).json({ error: "Invalid admin key" });
  next();
}

router.post("/", auth, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" });
    }
    if (message.trim().length < 3) {
      return res.status(400).json({ error: "Message must be at least 3 characters" });
    }
    const msg = await prisma.message.create({
      data: {
        userId: req.userId,
        name: name.trim(),
        email: email.trim(),
        subject,
        message: message.trim(),
      },
    });
    res.json({ ok: true, id: msg.id });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/my", auth, async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" },
      select: { id: true, subject: true, message: true, status: true, replyMessage: true, repliedAt: true, createdAt: true },
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/list", adminAuth, async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { id: true, name: true, email: true } } },
    });
    const unread = messages.filter((m) => !m.read).length;
    res.json({ total: messages.length, unread, messages });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.put("/:id/status", adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status || !VALID_MESSAGE_STATUSES.includes(status)) {
      return res.status(400).json({ error: `Invalid status. Must be one of: ${VALID_MESSAGE_STATUSES.join(", ")}` });
    }
    const existing = await prisma.message.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: "Message not found" });
    await prisma.message.update({
      where: { id: req.params.id },
      data: { status, read: true },
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.put("/:id/read", adminAuth, async (req, res) => {
  try {
    const existing = await prisma.message.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: "Message not found" });
    await prisma.message.update({ where: { id: req.params.id }, data: { read: true } });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to update message" });
  }
});

router.post("/:id/reply", adminAuth, async (req, res) => {
  try {
    const { replyMessage } = req.body;
    if (!replyMessage || replyMessage.trim().length < 3) {
      return res.status(400).json({ error: "Reply message must be at least 3 characters" });
    }
    const msg = await prisma.message.findUnique({ where: { id: req.params.id } });
    if (!msg) return res.status(404).json({ error: "Message not found" });

    await prisma.message.update({
      where: { id: req.params.id },
      data: { replyMessage: replyMessage.trim(), repliedAt: new Date(), status: "replied", read: true },
    });

    try {
      await sendQueryReply(msg.email, msg.name, msg.subject, replyMessage.trim(), msg.message);
    } catch (emailErr) {
      console.error("Reply email failed:", emailErr.message);
    }

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send reply" });
  }
});

router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const existing = await prisma.message.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: "Message not found" });
    await prisma.message.delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete message" });
  }
});

module.exports = router;
