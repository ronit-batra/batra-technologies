const express = require("express");
const prisma = require("../prisma");
const { safeErrorMessage } = require("../utils/helpers");

const router = express.Router();

function adminAuth(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (key !== process.env.ADMIN_KEY) return res.status(403).json({ error: "Invalid admin key" });
  next();
}

router.post("/track", async (req, res) => {
  try {
    const { visitorId, page, referrer, userAgent, duration } = req.body;
    if (!visitorId || !page) return res.status(400).json({ error: "visitorId and page required" });
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
    await prisma.visit.create({
      data: {
        visitorId,
        page,
        referrer: referrer || null,
        userAgent: userAgent || null,
        ip: ip ? String(ip).split(",")[0].trim() : null,
        duration: duration ? parseInt(duration) : null,
      },
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

router.get("/stats", adminAuth, async (req, res) => {
  try {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const [totalVisits, totalUniqueVisitors, dailyVisits, weeklyVisits, dailyUniqueVisitors, weeklyUniqueVisitors, pageViews, avgDuration, dailyPageViews, weeklyPageViews] = await Promise.all([
      prisma.visit.count(),
      prisma.visit.groupBy({ by: ["visitorId"] }).then((r) => r.length),
      prisma.visit.count({ where: { createdAt: { gte: todayStart } } }),
      prisma.visit.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
      prisma.visit.findMany({ where: { createdAt: { gte: todayStart } }, select: { visitorId: true }, distinct: ["visitorId"] }).then((r) => r.length),
      prisma.visit.findMany({ where: { createdAt: { gte: sevenDaysAgo } }, select: { visitorId: true }, distinct: ["visitorId"] }).then((r) => r.length),
      prisma.visit.groupBy({ by: ["page"], _count: { id: true }, orderBy: { _count: { id: "desc" } } }),
      prisma.visit.aggregate({ _avg: { duration: true }, where: { duration: { not: null } } }),
      prisma.visit.count({ where: { createdAt: { gte: todayStart }, duration: { not: null } } }),
      prisma.visit.count({ where: { createdAt: { gte: sevenDaysAgo }, duration: { not: null } } }),
    ]);

    const hourlyToday = [];
    for (let h = 0; h < 24; h++) {
      const hourStart = new Date(todayStart);
      hourStart.setHours(h);
      const hourEnd = new Date(todayStart);
      hourEnd.setHours(h + 1);
      const count = await prisma.visit.count({ where: { createdAt: { gte: hourStart, lt: hourEnd } } });
      hourlyToday.push({ hour: h, visits: count });
    }

    const dailyLast7 = [];
    for (let d = 6; d >= 0; d--) {
      const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - d);
      const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() - d + 1);
      const visits = await prisma.visit.count({ where: { createdAt: { gte: dayStart, lt: dayEnd } } });
      const unique = await prisma.visit.findMany({ where: { createdAt: { gte: dayStart, lt: dayEnd } }, select: { visitorId: true }, distinct: ["visitorId"] }).then((r) => r.length);
      dailyLast7.push({
        date: dayStart.toISOString().slice(0, 10),
        label: dayStart.toLocaleDateString("en-IN", { weekday: "short", day: "numeric" }),
        visits,
        unique,
      });
    }

    res.json({
      today: { visits: dailyVisits, unique: dailyUniqueVisitors },
      week: { visits: weeklyVisits, unique: weeklyUniqueVisitors },
      overall: { visits: totalVisits, unique: totalUniqueVisitors },
      avgDuration: avgDuration._avg.duration || 0,
      topPages: pageViews.map((p) => ({ page: p.page, visits: p._count.id })),
      hourlyToday,
      dailyLast7,
    });
  } catch (err) {
    res.status(500).json({ error: safeErrorMessage(err) });
  }
});

module.exports = router;
