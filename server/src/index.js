require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const prisma = require("./prisma");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");
const addressRoutes = require("./routes/addresses");
const otpRoutes = require("./routes/otp");
const analyticsRoutes = require("./routes/analytics");
const reviewRoutes = require("./routes/reviews");
const wishlistRoutes = require("./routes/wishlist");
const newsletterRoutes = require("./routes/newsletter");
const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  process.env.PRODUCTION_URL,
  process.env.TUNNEL_URL,
].filter(Boolean);

app.use(cors({
  origin: isProduction ? (origin, cb) => {
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) return cb(null, true);
    cb(null, true);
  } : true,
}));
app.use(express.json({ limit: "10kb" }));

if (isProduction) {
  const outDir = path.join(__dirname, "../../out");
  app.use(express.static(outDir, { index: false }));
}

app.use("/api/auth", authRoutes);
app.use("/api/auth", otpRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/messages", messageRoutes);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

if (isProduction) {
  const outDir = path.join(__dirname, "../../out");
  app.get("*", (req, res) => {
    res.sendFile(path.join(outDir, "index.html"));
  });
} else {
  app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });
}

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "An internal error occurred" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

function shutdown() {
  console.log("\nShutting down...");
  server.close(() => {
    prisma.$disconnect().then(() => process.exit(0)).catch(() => process.exit(1));
  });
  setTimeout(() => process.exit(1), 10000);
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
