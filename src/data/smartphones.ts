import { Product } from "./types";

// Folder: i phone 11,12,12 mini/ — iPhone 11, 11 Pro, 12 Mini, 12, 12 Pro
const ip11 = "/images/iphone-11-12.webp";
const ip11m = "/images/iphone-11-12-main.jpg";

// Folder: i phone pro max 11,12,13/ — iPhone Pro AND Pro Max for 11, 12, 13
const ipPM = "/images/iphone-promax-11-12-13.webp";
const ipPMm = "/images/iphone-promax-11-12-13-main.webp";

// Folder: i phone 13,14,13+,14+,13mini/ — iPhone 13 Mini, 13, 13 Pro, 14 series
const ip13 = "/images/iphone-13-14.jpg";
const ip13m = "/images/iphone-13-14-main.jpg";

// Folder: i phone 15 ,15+/ — iPhone 15, 15 Plus
const ip15 = "/images/iphone-15.jpg";
const ip15m = "/images/iphone-15-main.jpg";

// Folder: i phone 16,17,16+,17+/ — iPhone 16, 16 Plus, 17
const ip16 = "/images/iphone-16-17.jpg";
const ip16m = "/images/iphone-16-17-main.jpg";

// Folder: i phone pro,pro max 15,16/ — iPhone 15 Pro/Max, 16 Pro/Max
const ipPro = "/images/iphone-pro-15-16.jpg";
const ipProm = "/images/iphone-pro-15-16-main.jpg";

// Folder: i phone pro,pro max 17,18/ — iPhone 17 Pro/Max, 18 Pro
const ipPro2 = "/images/iphone-pro-17-18.webp";
const ipPro2m = "/images/iphone-pro-17-18-main.jpg";

// Single files
const ipx = "/images/iphone-x-series.avif";
const ip16e = "/images/iphone-16e.avif";

// Samsung
const ss22 = "/images/samsung-s22.jpg";
const ss22u = "/images/samsung-s22-ultra.jpg";
const ss23 = "/images/samsung-s23-ultra.webp";
const ss24 = "/images/samsung-s24-plus.webp";
const ss24u = "/images/samsung-s24-ultra.jpg";
const ss25 = "/images/samsung-s25-ultra.jpg";

// OnePlus
const op = "/images/oneplus-11.jpg";
const op2 = "/images/oneplus-12.jpg";
const op13 = "/images/oneplus-13.webp";
const op13s = "/images/oneplus-13s.jpg";
const op15 = "/images/oneplus-15.webp";

export const smartphoneProducts: Product[] = [
  // ── iPhone X Series ──
  { id: "ip-x", name: "iPhone X", brand: "Apple", category: "smartphones", price: 29999, originalPrice: 64900, description: "The original Face ID iPhone with edge-to-edge OLED display and revolutionary gesture navigation.", features: ["A11 Bionic", "5.8\" OLED", "Face ID", "Dual 12MP Camera", "Glass & Stainless Steel"], specifications: { "Display": "5.8\" Super Retina OLED", "Chip": "A11 Bionic", "Camera": "12MP Dual", "Storage": "64GB / 256GB", "Battery": "2716mAh" }, images: [ipx], rating: 4.5, reviewCount: 1200, inStock: true },

  // ── iPhone XR ──
  { id: "ip-xr", name: "iPhone XR", brand: "Apple", category: "smartphones", price: 24999, originalPrice: 76900, description: "Colorful LCD iPhone with Face ID and the powerful A12 Bionic chip.", features: ["A12 Bionic", "6.1\" LCD", "Face ID", "Single 12MP Camera", "6 Colors"], specifications: { "Display": "6.1\" Liquid Retina LCD", "Chip": "A12 Bionic", "Camera": "12MP Single", "Storage": "64GB / 128GB / 256GB", "Battery": "2942mAh" }, images: [ipx], rating: 4.4, reviewCount: 980, inStock: true },

  // ── iPhone XS ──
  { id: "ip-xs", name: "iPhone XS", brand: "Apple", category: "smartphones", price: 34999, originalPrice: 99900, description: "Premium stainless steel iPhone with dual-camera system and Super Retina OLED.", features: ["A12 Bionic", "5.8\" OLED", "Dual 12MP", "IP68", "Gold Option"], specifications: { "Display": "5.8\" Super Retina OLED", "Chip": "A12 Bionic", "Camera": "12MP Dual", "Storage": "64GB / 256GB / 512GB", "Battery": "2658mAh" }, images: [ipx], rating: 4.5, reviewCount: 750, inStock: true },

  // ── iPhone XS Max ──
  { id: "ip-xsmax", name: "iPhone XS Max", brand: "Apple", category: "smartphones", price: 39999, originalPrice: 109900, description: "The biggest iPhone display ever at launch. Premium stainless steel with OLED.", features: ["A12 Bionic", "6.5\" OLED", "Dual 12MP", "IP68", "512GB Option"], specifications: { "Display": "6.5\" Super Retina OLED", "Chip": "A12 Bionic", "Camera": "12MP Dual", "Storage": "64GB / 256GB / 512GB", "Battery": "3174mAh" }, images: [ipx], rating: 4.6, reviewCount: 680, inStock: true },

  // ── iPhone 11 ──
  { id: "ip-11", name: "iPhone 11", brand: "Apple", category: "smartphones", price: 32999, originalPrice: 64900, description: "Dual-camera system with Night mode. The most popular iPhone of its generation.", features: ["A13 Bionic", "6.1\" LCD", "Dual 12MP", "Night Mode", "IP68"], specifications: { "Display": "6.1\" Liquid Retina LCD", "Chip": "A13 Bionic", "Camera": "12MP Ultra Wide + Wide", "Storage": "64GB / 128GB / 256GB", "Battery": "3110mAh" }, images: [ip11, ip11m], rating: 4.7, reviewCount: 3400, inStock: true, badge: "Classic" },

  // ── iPhone 11 Pro ──
  { id: "ip-11pro", name: "iPhone 11 Pro", brand: "Apple", category: "smartphones", price: 47999, originalPrice: 99900, description: "First iPhone with 'Pro' moniker. Triple-camera system and Super Retina XDR display.", features: ["A13 Bionic", "5.8\" OLED", "Triple 12MP", "Night Mode", "18W Fast Charging"], specifications: { "Display": "5.8\" Super Retina XDR", "Chip": "A13 Bionic", "Camera": "12MP Triple", "Storage": "64GB / 256GB / 512GB", "Battery": "3046mAh" }, images: [ipPM, ipPMm], rating: 4.7, reviewCount: 2100, inStock: true },

  // ── iPhone 11 Pro Max ──
  { id: "ip-11promax", name: "iPhone 11 Pro Max", brand: "Apple", category: "smartphones", price: 54999, originalPrice: 109900, description: "The largest and most powerful iPhone of 2019 with all-day battery life.", features: ["A13 Bionic", "6.5\" OLED", "Triple 12MP", "Night Mode", "All-Day Battery"], specifications: { "Display": "6.5\" Super Retina XDR", "Chip": "A13 Bionic", "Camera": "12MP Triple", "Storage": "64GB / 256GB / 512GB", "Battery": "3969mAh" }, images: [ipPM, ipPMm], rating: 4.8, reviewCount: 2800, inStock: true },

  // ── iPhone 12 Mini ──
  { id: "ip-12mini", name: "iPhone 12 Mini", brand: "Apple", category: "smartphones", price: 37999, originalPrice: 72900, description: "The smallest, lightest 5G iPhone. Compact power in a 5.4-inch form factor.", features: ["A14 Bionic", "5.4\" OLED", "5G", "Dual 12MP", "Ceramic Shield"], specifications: { "Display": "5.4\" Super Retina XDR", "Chip": "A14 Bionic", "Camera": "12MP Dual", "Storage": "64GB / 128GB / 256GB", "Battery": "2227mAh" }, images: [ip11, ip11m], rating: 4.4, reviewCount: 1500, inStock: true },

  // ── iPhone 12 ──
  { id: "ip-12", name: "iPhone 12", brand: "Apple", category: "smartphones", price: 41999, originalPrice: 79900, description: "Flat-edge design revolution with A14 Bionic, 5G, and Ceramic Shield front cover.", features: ["A14 Bionic", "6.1\" OLED", "5G", "Dual 12MP", "Ceramic Shield"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A14 Bionic", "Camera": "12MP Dual", "Storage": "64GB / 128GB / 256GB", "Battery": "2815mAh" }, images: [ip11, ip11m], rating: 4.6, reviewCount: 4200, inStock: true },

  // ── iPhone 12 Pro ──
  { id: "ip-12pro", name: "iPhone 12 Pro", brand: "Apple", category: "smartphones", price: 54999, originalPrice: 119900, description: "Pro-grade camera with LiDAR Scanner, Ceramic Shield, and surgical-grade stainless steel.", features: ["A14 Bionic", "6.1\" OLED", "LiDAR", "Triple 12MP", "ProRAW"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A14 Bionic", "Camera": "12MP Triple + LiDAR", "Storage": "128GB / 256GB / 512GB", "Battery": "2815mAh" }, images: [ipPM, ipPMm], rating: 4.7, reviewCount: 2600, inStock: true },

  // ── iPhone 12 Pro Max ──
  { id: "ip-12promax", name: "iPhone 12 Pro Max", brand: "Apple", category: "smartphones", price: 62999, originalPrice: 129900, description: "Largest iPhone display with best camera system, Sensor-shift stabilization, and LiDAR.", features: ["A14 Bionic", "6.7\" OLED", "LiDAR", "Sensor-Shift OIS", "ProRAW"], specifications: { "Display": "6.7\" Super Retina XDR", "Chip": "A14 Bionic", "Camera": "12MP Triple + LiDAR", "Storage": "128GB / 256GB / 512GB", "Battery": "3687mAh" }, images: [ipPM, ipPMm], rating: 4.8, reviewCount: 3100, inStock: true },

  // ── iPhone 13 Mini ──
  { id: "ip-13mini", name: "iPhone 13 Mini", brand: "Apple", category: "smartphones", price: 44999, originalPrice: 64900, description: "Compact powerhouse with A15 Bionic, improved cameras, and all-day battery.", features: ["A15 Bionic", "5.4\" OLED", "5G", "Dual 12MP", "Cinematic Mode"], specifications: { "Display": "5.4\" Super Retina XDR", "Chip": "A15 Bionic", "Camera": "12MP Dual", "Storage": "128GB / 256GB / 512GB", "Battery": "2438mAh" }, images: [ip13, ip13m], rating: 4.5, reviewCount: 1200, inStock: true },

  // ── iPhone 13 ──
  { id: "ip-13", name: "iPhone 13", brand: "Apple", category: "smartphones", price: 52999, originalPrice: 79900, description: "Diagonal camera design, A15 Bionic, Cinematic Mode, and improved battery life.", features: ["A15 Bionic", "6.1\" OLED", "Cinematic Mode", "Photographic Styles", "5G"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A15 Bionic", "Camera": "12MP Diagonal Dual", "Storage": "128GB / 256GB / 512GB", "Battery": "3227mAh" }, images: [ip13, ip13m], rating: 4.7, reviewCount: 5100, inStock: true },

  // ── iPhone 13 Pro ──
  { id: "ip-13pro", name: "iPhone 13 Pro", brand: "Apple", category: "smartphones", price: 69999, originalPrice: 119900, description: "ProMotion 120Hz display, macro photography, and all-day battery life.", features: ["A15 Bionic", "6.1\" 120Hz OLED", "ProMotion", "Macro Photography", "Cinematic Mode"], specifications: { "Display": "6.1\" Super Retina XDR 120Hz", "Chip": "A15 Bionic (5-core GPU)", "Camera": "12MP Triple", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "3095mAh" }, images: [ipPM, ipPMm], rating: 4.8, reviewCount: 3400, inStock: true },

  // ── iPhone 13 Pro Max ──
  { id: "ip-13promax", name: "iPhone 13 Pro Max", brand: "Apple", category: "smartphones", price: 79999, originalPrice: 129900, description: "The biggest and best iPhone of 2021 with ProMotion, all-day battery, and pro cameras.", features: ["A15 Bionic", "6.7\" 120Hz OLED", "ProMotion", "Macro Photography", "All-Day Battery"], specifications: { "Display": "6.7\" Super Retina XDR 120Hz", "Chip": "A15 Bionic (5-core GPU)", "Camera": "12MP Triple", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "4352mAh" }, images: [ipPM, ipPMm], rating: 4.9, reviewCount: 4200, inStock: true, badge: "Top Rated" },

  // ── iPhone 14 ──
  { id: "ip-14", name: "iPhone 14", brand: "Apple", category: "smartphones", price: 57999, originalPrice: 79900, description: "Crash Detection, Emergency SOS via satellite, and a 12MP TrueDepth front camera.", features: ["A15 Bionic", "6.1\" OLED", "Crash Detection", "Emergency SOS", "12MP Front Camera"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A15 Bionic", "Camera": "12MP Dual", "Storage": "128GB / 256GB / 512GB", "Battery": "3279mAh" }, images: [ip13, ip13m], rating: 4.6, reviewCount: 3800, inStock: true },

  // ── iPhone 14 Plus ──
  { id: "ip-14plus", name: "iPhone 14 Plus", brand: "Apple", category: "smartphones", price: 62999, originalPrice: 89900, description: "Big screen. Big battery. The most affordable way to get a 6.7-inch iPhone.", features: ["A15 Bionic", "6.7\" OLED", "Crash Detection", "All-Day Battery", "Emergency SOS"], specifications: { "Display": "6.7\" Super Retina XDR", "Chip": "A15 Bionic", "Camera": "12MP Dual", "Storage": "128GB / 256GB / 512GB", "Battery": "4325mAh" }, images: [ip13, ip13m], rating: 4.5, reviewCount: 1800, inStock: true },

  // ── iPhone 14 Pro ──
  { id: "ip-14pro", name: "iPhone 14 Pro", brand: "Apple", category: "smartphones", price: 84999, originalPrice: 129900, description: "Dynamic Island, Always-On Display, and a groundbreaking 48MP camera system.", features: ["A16 Bionic", "6.1\" 120Hz OLED", "Dynamic Island", "48MP Camera", "Always-On Display"], specifications: { "Display": "6.1\" Super Retina XDR 120Hz", "Chip": "A16 Bionic", "Camera": "48MP + 12MP + 12MP", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "3200mAh" }, images: [ip13, ip13m], rating: 4.8, reviewCount: 5600, inStock: true, badge: "Best Seller" },

  // ── iPhone 14 Pro Max ──
  { id: "ip-14promax", name: "iPhone 14 Pro Max", brand: "Apple", category: "smartphones", price: 94999, originalPrice: 139900, description: "The ultimate iPhone with Dynamic Island, 48MP camera, and all-day battery.", features: ["A16 Bionic", "6.7\" 120Hz OLED", "Dynamic Island", "48MP Camera", "Always-On Display"], specifications: { "Display": "6.7\" Super Retina XDR 120Hz", "Chip": "A16 Bionic", "Camera": "48MP + 12MP + 12MP", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "4323mAh" }, images: [ip13, ip13m], rating: 4.9, reviewCount: 6200, inStock: true, badge: "Editor's Choice" },

  // ── iPhone 15 ──
  { id: "ip-15", name: "iPhone 15", brand: "Apple", category: "smartphones", price: 64999, originalPrice: 79900, description: "USB-C arrives on iPhone. Dynamic Island, 48MP camera, and color-infused glass back.", features: ["A16 Bionic", "6.1\" OLED", "USB-C", "48MP Camera", "Dynamic Island"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A16 Bionic", "Camera": "48MP + 12MP", "Storage": "128GB / 256GB / 512GB", "Battery": "3349mAh" }, images: [ip15, ip15m], rating: 4.7, reviewCount: 4100, inStock: true },

  // ── iPhone 15 Plus ──
  { id: "ip-15plus", name: "iPhone 15 Plus", brand: "Apple", category: "smartphones", price: 72999, originalPrice: 89900, description: "Big screen with USB-C, Dynamic Island, and an incredible battery life.", features: ["A16 Bionic", "6.7\" OLED", "USB-C", "48MP Camera", "Dynamic Island"], specifications: { "Display": "6.7\" Super Retina XDR", "Chip": "A16 Bionic", "Camera": "48MP + 12MP", "Storage": "128GB / 256GB / 512GB", "Battery": "4383mAh" }, images: [ip15, ip15m], rating: 4.6, reviewCount: 2200, inStock: true },

  // ── iPhone 15 Pro ──
  { id: "ip-15pro", name: "iPhone 15 Pro", brand: "Apple", category: "smartphones", price: 99999, originalPrice: 134900, description: "Titanium design. A17 Pro chip. USB-C with USB 3 speeds. Customizable Action Button.", features: ["A17 Pro", "6.1\" 120Hz OLED", "Titanium", "USB-C USB 3", "Action Button"], specifications: { "Display": "6.1\" Super Retina XDR 120Hz", "Chip": "A17 Pro", "Camera": "48MP + 12MP + 12MP", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "3274mAh" }, images: [ipPro, ipProm], rating: 4.8, reviewCount: 5800, inStock: true, badge: "Popular" },

  // ── iPhone 15 Pro Max ──
  { id: "ip-15promax", name: "iPhone 15 Pro Max", brand: "Apple", category: "smartphones", price: 119999, originalPrice: 159900, description: "The most powerful iPhone with titanium design, tetraprism 5x zoom, and A17 Pro.", features: ["A17 Pro", "6.7\" 120Hz OLED", "Titanium", "5x Tetraprism Zoom", "Action Button"], specifications: { "Display": "6.7\" Super Retina XDR 120Hz", "Chip": "A17 Pro", "Camera": "48MP + 12MP 5x + 12MP", "Storage": "256GB / 512GB / 1TB", "Battery": "4422mAh" }, images: [ipPro, ipProm], rating: 4.9, reviewCount: 7200, inStock: true, badge: "Best Seller" },

  // ── iPhone 16 ──
  { id: "ip-16", name: "iPhone 16", brand: "Apple", category: "smartphones", price: 74999, originalPrice: 79900, description: "Apple Intelligence, Camera Control button, A18 chip, and a vertical camera layout.", features: ["A18", "6.1\" OLED", "Apple Intelligence", "Camera Control", "Vertical Dual 48MP"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A18", "Camera": "48MP Fusion + 12MP Ultra Wide", "Storage": "128GB / 256GB / 512GB", "Battery": "3561mAh" }, images: [ip16, ip16m], rating: 4.7, reviewCount: 3500, inStock: true },

  // ── iPhone 16 Plus ──
  { id: "ip-16plus", name: "iPhone 16 Plus", brand: "Apple", category: "smartphones", price: 82999, originalPrice: 89900, description: "The biggest standard iPhone with Apple Intelligence and the longest battery life.", features: ["A18", "6.7\" OLED", "Apple Intelligence", "Camera Control", "All-Day Battery"], specifications: { "Display": "6.7\" Super Retina XDR", "Chip": "A18", "Camera": "48MP Fusion + 12MP Ultra Wide", "Storage": "128GB / 256GB / 512GB", "Battery": "4674mAh" }, images: [ip16, ip16m], rating: 4.6, reviewCount: 1900, inStock: true },

  // ── iPhone 16 Pro ──
  { id: "ip-16pro", name: "iPhone 16 Pro", brand: "Apple", category: "smartphones", price: 109999, originalPrice: 119900, description: "A18 Pro, Camera Control, 48MP Fusion camera, and a stunning 6.3-inch ProMotion display.", features: ["A18 Pro", "6.3\" 120Hz OLED", "Camera Control", "48MP Fusion", "4K 120fps"], specifications: { "Display": "6.3\" Super Retina XDR 120Hz", "Chip": "A18 Pro", "Camera": "48MP + 48MP Ultra Wide + 12MP 5x", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "3582mAh" }, images: [ipPro, ipProm], rating: 4.9, reviewCount: 4800, inStock: true, badge: "New" },

  // ── iPhone 16 Pro Max ──
  { id: "ip-16promax", name: "iPhone 16 Pro Max", brand: "Apple", category: "smartphones", price: 134999, originalPrice: 144900, description: "The ultimate iPhone. Largest display, A18 Pro, 5x tetraprism, and all-day battery.", features: ["A18 Pro", "6.9\" 120Hz OLED", "Camera Control", "5x Tetraprism", "4K 120fps"], specifications: { "Display": "6.9\" Super Retina XDR 120Hz", "Chip": "A18 Pro", "Camera": "48MP + 48MP UW + 12MP 5x", "Storage": "256GB / 512GB / 1TB", "Battery": "4685mAh" }, images: [ipPro, ipProm], rating: 4.9, reviewCount: 5500, inStock: true, badge: "Editor's Choice" },

  // ── iPhone 16e ──
  { id: "ip-16e", name: "iPhone 16e", brand: "Apple", category: "smartphones", price: 49999, originalPrice: 59900, description: "Apple Intelligence for everyone. A18 chip, Face ID, and a 48MP camera at an accessible price.", features: ["A18", "6.1\" OLED", "Apple Intelligence", "48MP Camera", "Face ID"], specifications: { "Display": "6.1\" Super Retina XDR", "Chip": "A18", "Camera": "48MP Single", "Storage": "128GB / 256GB / 512GB", "Battery": "3561mAh" }, images: [ip16e], rating: 4.5, reviewCount: 1200, inStock: true },

  // ── iPhone 17 ──
  { id: "ip-17", name: "iPhone 17", brand: "Apple", category: "smartphones", price: 82999, description: "The next generation iPhone with redesigned camera, A19 chip, and enhanced Apple Intelligence.", features: ["A19 Bionic", "6.3\" OLED", "Apple Intelligence 2.0", "48MP Camera", "Slimmer Design"], specifications: { "Display": "6.3\" Super Retina XDR", "Chip": "A19 Bionic", "Camera": "48MP + 12MP", "Storage": "128GB / 256GB / 512GB", "Battery": "TBD" }, images: [ip16, ip16m], rating: 4.7, reviewCount: 800, inStock: true, badge: "New" },

  // ── iPhone 17 Pro ──
  { id: "ip-17pro", name: "iPhone 17 Pro", brand: "Apple", category: "smartphones", price: 119999, description: "ProMotion display with next-gen A19 Pro chip, enhanced camera system, and titanium build.", features: ["A19 Pro", "6.3\" 120Hz OLED", "Titanium", "48MP Pro Camera", "Camera Control 2.0"], specifications: { "Display": "6.3\" Super Retina XDR 120Hz", "Chip": "A19 Pro", "Camera": "48MP + 48MP + 12MP 5x", "Storage": "256GB / 512GB / 1TB", "Battery": "TBD" }, images: [ipPro2, ipPro2m], rating: 4.8, reviewCount: 600, inStock: true, badge: "New" },

  // ── iPhone 17 Pro Max ──
  { id: "ip-17promax", name: "iPhone 17 Pro Max", brand: "Apple", category: "smartphones", price: 149999, description: "The pinnacle of iPhone. Largest display, most advanced camera, longest battery life ever.", features: ["A19 Pro", "6.9\" 120Hz OLED", "Titanium", "Pro Camera System", "All-Day+"], specifications: { "Display": "6.9\" Super Retina XDR 120Hz", "Chip": "A19 Pro", "Camera": "48MP + 48MP + 12MP 5x+", "Storage": "256GB / 512GB / 1TB", "Battery": "TBD" }, images: [ipPro2, ipPro2m], rating: 4.9, reviewCount: 450, inStock: true, badge: "Flagship" },

  // ── iPhone 18 Pro (Coming Soon) ──
  { id: "ip-18", name: "iPhone 18 Pro", brand: "Apple", category: "smartphones", price: 134999, description: "The future of iPhone. Expected 2nm A20 chip, under-display Face ID, and revolutionary design.", features: ["A20 Chip (2nm)", "Under-Display Face ID", "Periscope Zoom", "Slimmest iPhone Ever", "Coming 2026"], specifications: { "Display": "6.3\" OLED (Expected)", "Chip": "A20 (2nm)", "Camera": "TBD", "Storage": "TBD", "Status": "Coming Soon" }, images: [ipPro2, ipPro2m], rating: 0, reviewCount: 0, inStock: false, badge: "Coming Soon" },

  // ══════════════════════════════════════════
  // ── Samsung Galaxy S22 Series ──
  // ══════════════════════════════════════════
  { id: "ss-s22", name: "Galaxy S22", brand: "Samsung", category: "smartphones", price: 39999, originalPrice: 72999, description: "Compact flagship with 50MP camera, Nightography, and Armor Aluminum frame.", features: ["Snapdragon 8 Gen 1", "6.1\" AMOLED 120Hz", "50MP Camera", "Nightography", "IP68"], specifications: { "Display": "6.1\" FHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 1", "Camera": "50MP + 12MP + 10MP", "Storage": "128GB / 256GB", "Battery": "3700mAh" }, images: [ss22], rating: 4.5, reviewCount: 2800, inStock: true },

  { id: "ss-s22plus", name: "Galaxy S22+", brand: "Samsung", category: "smartphones", price: 49999, originalPrice: 84999, description: "Bigger display, bigger battery, and the same incredible Nightography camera.", features: ["Snapdragon 8 Gen 1", "6.6\" AMOLED 120Hz", "50MP Camera", "45W Fast Charging", "IP68"], specifications: { "Display": "6.6\" FHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 1", "Camera": "50MP + 12MP + 10MP", "Storage": "128GB / 256GB", "Battery": "4500mAh" }, images: [ss22], rating: 4.5, reviewCount: 1900, inStock: true },

  { id: "ss-s22ultra", name: "Galaxy S22 Ultra", brand: "Samsung", category: "smartphones", price: 62999, originalPrice: 109999, description: "S Pen built-in. 108MP camera. The Note experience lives on in the S22 Ultra.", features: ["Snapdragon 8 Gen 1", "6.8\" AMOLED 120Hz", "S Pen Built-in", "108MP Camera", "IP68"], specifications: { "Display": "6.8\" QHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 1", "Camera": "108MP + 12MP + 10MP + 10MP", "Storage": "128GB / 256GB / 512GB / 1TB", "Battery": "5000mAh" }, images: [ss22u], rating: 4.7, reviewCount: 4100, inStock: true },

  // ── Samsung Galaxy S23 Series ──
  { id: "ss-s23", name: "Galaxy S23", brand: "Samsung", category: "smartphones", price: 52999, description: "Snapdragon 8 Gen 2 for Galaxy. 50MP camera with advanced Nightography.", features: ["Snapdragon 8 Gen 2", "6.1\" AMOLED 120Hz", "50MP Camera", "Nightography", "IP68"], specifications: { "Display": "6.1\" FHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 2 for Galaxy", "Camera": "50MP + 12MP + 10MP", "Storage": "128GB / 256GB", "Battery": "3900mAh" }, images: [ss24], rating: 4.6, reviewCount: 3200, inStock: true },

  { id: "ss-s23plus", name: "Galaxy S23+", brand: "Samsung", category: "smartphones", price: 62999, description: "Bigger screen, 45W charging, and the powerful Snapdragon 8 Gen 2 for Galaxy.", features: ["Snapdragon 8 Gen 2", "6.6\" AMOLED 120Hz", "50MP Camera", "45W Fast Charging", "IP68"], specifications: { "Display": "6.6\" FHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 2 for Galaxy", "Camera": "50MP + 12MP + 10MP", "Storage": "256GB / 512GB", "Battery": "4700mAh" }, images: [ss24], rating: 4.6, reviewCount: 2100, inStock: true },

  { id: "ss-s23ultra", name: "Galaxy S23 Ultra", brand: "Samsung", category: "smartphones", price: 84999, originalPrice: 124999, description: "200MP camera. S Pen. The most powerful Galaxy smartphone ever made.", features: ["Snapdragon 8 Gen 2", "6.8\" AMOLED 120Hz", "200MP Camera", "S Pen Built-in", "IP68"], specifications: { "Display": "6.8\" QHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 2 for Galaxy", "Camera": "200MP + 12MP + 10MP + 10MP", "Storage": "256GB / 512GB / 1TB", "Battery": "5000mAh" }, images: [ss23], rating: 4.8, reviewCount: 5400, inStock: true, badge: "Best Seller" },

  // ── Samsung Galaxy S24 Series ──
  { id: "ss-s24", name: "Galaxy S24", brand: "Samsung", category: "smartphones", price: 59999, description: "Galaxy AI is here. Circle to Search, Live Translate, and Note Assist built in.", features: ["Snapdragon 8 Gen 3", "6.2\" AMOLED 120Hz", "Galaxy AI", "50MP Camera", "IP68"], specifications: { "Display": "6.2\" FHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 3 for Galaxy", "Camera": "50MP + 12MP + 10MP", "Storage": "128GB / 256GB", "Battery": "4000mAh" }, images: [ss24], rating: 4.6, reviewCount: 3500, inStock: true },

  { id: "ss-s24plus", name: "Galaxy S24+", brand: "Samsung", category: "smartphones", price: 69999, description: "Galaxy AI on a bigger screen. Enhanced display and all-day battery.", features: ["Snapdragon 8 Gen 3", "6.7\" AMOLED 120Hz", "Galaxy AI", "50MP Camera", "4900mAh"], specifications: { "Display": "6.7\" QHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 3 for Galaxy", "Camera": "50MP + 12MP + 10MP", "Storage": "256GB / 512GB", "Battery": "4900mAh" }, images: [ss24], rating: 4.6, reviewCount: 2200, inStock: true },

  { id: "ss-s24ultra", name: "Galaxy S24 Ultra", brand: "Samsung", category: "smartphones", price: 99999, originalPrice: 129999, description: "Titanium frame. 200MP camera. S Pen. The most intelligent Galaxy ever.", features: ["Snapdragon 8 Gen 3", "6.8\" AMOLED 120Hz", "200MP Camera", "S Pen", "Galaxy AI"], specifications: { "Display": "6.8\" QHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Gen 3 for Galaxy", "Camera": "200MP + 12MP + 10MP + 50MP", "Storage": "256GB / 512GB / 1TB", "Battery": "5000mAh" }, images: [ss24u], rating: 4.8, reviewCount: 6100, inStock: true, badge: "Top Rated" },

  // ── Samsung Galaxy S25 Series ──
  { id: "ss-s25", name: "Galaxy S25", brand: "Samsung", category: "smartphones", price: 64999, description: "Snapdragon 8 Elite. All-new Galaxy AI. Redesigned with rounded edges and thinner bezels.", features: ["Snapdragon 8 Elite", "6.2\" AMOLED 120Hz", "Galaxy AI 2.0", "50MP Camera", "IP68"], specifications: { "Display": "6.2\" FHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Elite for Galaxy", "Camera": "50MP + 12MP + 10MP", "Storage": "128GB / 256GB / 512GB", "Battery": "4000mAh" }, images: [ss24], rating: 4.7, reviewCount: 2800, inStock: true, badge: "New" },

  { id: "ss-s25plus", name: "Galaxy S25+", brand: "Samsung", category: "smartphones", price: 74999, description: "Snapdragon 8 Elite with bigger display and longer battery for power users.", features: ["Snapdragon 8 Elite", "6.7\" AMOLED 120Hz", "Galaxy AI 2.0", "50MP Camera", "4900mAh"], specifications: { "Display": "6.7\" QHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Elite for Galaxy", "Camera": "50MP + 12MP + 10MP", "Storage": "256GB / 512GB", "Battery": "4900mAh" }, images: [ss24], rating: 4.7, reviewCount: 1900, inStock: true },

  { id: "ss-s25ultra", name: "Galaxy S25 Ultra", brand: "Samsung", category: "smartphones", price: 109999, description: "Titanium. Snapdragon 8 Elite. 200MP. The smartest, most powerful Galaxy.", features: ["Snapdragon 8 Elite", "6.9\" AMOLED 120Hz", "200MP Camera", "S Pen", "Galaxy AI 2.0"], specifications: { "Display": "6.9\" QHD+ Dynamic AMOLED 2X", "Chip": "Snapdragon 8 Elite for Galaxy", "Camera": "200MP + 12MP + 10MP + 50MP", "Storage": "256GB / 512GB / 1TB", "Battery": "5000mAh" }, images: [ss25], rating: 4.9, reviewCount: 4200, inStock: true, badge: "Flagship" },

  // ── Samsung Galaxy S26 Series (Expected) ──
  { id: "ss-s26", name: "Galaxy S26", brand: "Samsung", category: "smartphones", price: 74999, description: "Next-generation Galaxy AI with Snapdragon 8 Elite Gen 2 and a slimmer design.", features: ["Snapdragon 8 Elite Gen 2", "6.2\" AMOLED 120Hz", "Galaxy AI 3.0", "New Camera System", "Slimmer Design"], specifications: { "Display": "6.2\" FHD+ AMOLED 2X (Expected)", "Chip": "Snapdragon 8 Elite Gen 2", "Camera": "TBD", "Storage": "TBD", "Status": "Expected 2026" }, images: [ss24], rating: 0, reviewCount: 0, inStock: false, badge: "Coming Soon" },

  { id: "ss-s26ultra", name: "Galaxy S26 Ultra", brand: "Samsung", category: "smartphones", price: 134999, description: "The next Ultra. Expected S Pen, new 250MP sensor, and AI-first experience.", features: ["Snapdragon 8 Elite Gen 2", "6.9\" AMOLED 120Hz", "250MP Camera (Expected)", "S Pen", "AI-First"], specifications: { "Display": "6.9\" QHD+ AMOLED 2X (Expected)", "Chip": "Snapdragon 8 Elite Gen 2", "Camera": "TBD", "Storage": "TBD", "Status": "Expected 2026" }, images: [ss25], rating: 0, reviewCount: 0, inStock: false, badge: "Coming Soon" },

  // ══════════════════════════════════════════
  // ── OnePlus Lineup ──
  // ══════════════════════════════════════════
  { id: "op-11", name: "OnePlus 11", brand: "OnePlus", category: "smartphones", price: 44999, originalPrice: 64999, description: "Snapdragon 8 Gen 2, 50MP Sony IMX890, and 100W SUPERVOOC charging.", features: ["Snapdragon 8 Gen 2", "6.7\" AMOLED 120Hz", "50MP Sony IMX890", "100W SUPERVOOC", "Hasselblad Camera"], specifications: { "Display": "6.7\" QHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Gen 2", "Camera": "50MP + 48MP + 32MP", "Storage": "128GB / 256GB", "Battery": "5000mAh" }, images: [op], rating: 4.6, reviewCount: 2100, inStock: true },

  { id: "op-11r", name: "OnePlus 11R", brand: "OnePlus", category: "smartphones", price: 29999, originalPrice: 39999, description: "Flagship performance at an incredible price. Snapdragon 8+ Gen 1 and 100W charging.", features: ["Snapdragon 8+ Gen 1", "6.7\" AMOLED 120Hz", "50MP Camera", "100W SUPERVOOC", "Alert Slider"], specifications: { "Display": "6.7\" FHD+ AMOLED 120Hz", "Chip": "Snapdragon 8+ Gen 1", "Camera": "50MP + 8MP + 2MP", "Storage": "128GB / 256GB", "Battery": "5000mAh" }, images: [op], rating: 4.5, reviewCount: 1800, inStock: true },

  { id: "op-12", name: "OnePlus 12", brand: "OnePlus", category: "smartphones", price: 54999, originalPrice: 64999, description: "Snapdragon 8 Gen 3, Hasselblad camera, 50W wireless charging, and IP65 rating.", features: ["Snapdragon 8 Gen 3", "6.82\" AMOLED 120Hz", "50MP Sony LYT-808", "50W Wireless", "IP65"], specifications: { "Display": "6.82\" QHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Gen 3", "Camera": "50MP + 48MP + 64MP", "Storage": "256GB / 512GB", "Battery": "5400mAh" }, images: [op2], rating: 4.7, reviewCount: 2800, inStock: true },

  { id: "op-12r", name: "OnePlus 12R", brand: "OnePlus", category: "smartphones", price: 32999, originalPrice: 39999, description: "Flagship killer reborn. Snapdragon 8 Gen 2, 100W charging, and stunning display.", features: ["Snapdragon 8 Gen 2", "6.78\" AMOLED 120Hz", "50MP Sony IMX890", "100W SUPERVOOC", "5500mAh"], specifications: { "Display": "6.78\" FHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Gen 2", "Camera": "50MP + 8MP + 2MP", "Storage": "128GB / 256GB", "Battery": "5500mAh" }, images: [op], rating: 4.6, reviewCount: 2200, inStock: true },

  { id: "op-13", name: "OnePlus 13", brand: "OnePlus", category: "smartphones", price: 59999, originalPrice: 69999, description: "Snapdragon 8 Elite, 50MP triple Hasselblad, IP69, and 6000mAh battery.", features: ["Snapdragon 8 Elite", "6.82\" AMOLED 120Hz", "50MP Triple Hasselblad", "IP69", "6000mAh"], specifications: { "Display": "6.82\" QHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Elite", "Camera": "50MP + 50MP + 50MP", "Storage": "256GB / 512GB", "Battery": "6000mAh" }, images: [op13], rating: 4.8, reviewCount: 1500, inStock: true, badge: "New" },

  { id: "op-13r", name: "OnePlus 13R", brand: "OnePlus", category: "smartphones", price: 37999, description: "Snapdragon 8 Gen 3 at an unbeatable price. Flagship cameras and massive battery.", features: ["Snapdragon 8 Gen 3", "6.78\" AMOLED 120Hz", "50MP Camera", "80W SUPERVOOC", "6400mAh"], specifications: { "Display": "6.78\" FHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Gen 3", "Camera": "50MP + 8MP + 50MP", "Storage": "256GB / 512GB", "Battery": "6400mAh" }, images: [op13], rating: 4.7, reviewCount: 1100, inStock: true },

  { id: "op-13s", name: "OnePlus 13S", brand: "OnePlus", category: "smartphones", price: 44999, description: "Snapdragon 8 Elite with a compact design. Premium OnePlus experience in a smaller body.", features: ["Snapdragon 8 Elite", "6.32\" AMOLED 120Hz", "50MP Camera", "100W SUPERVOOC", "Compact Design"], specifications: { "Display": "6.32\" FHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Elite", "Camera": "50MP + 8MP", "Storage": "256GB / 512GB", "Battery": "5850mAh" }, images: [op13s], rating: 4.7, reviewCount: 800, inStock: true, badge: "New" },

  { id: "op-15", name: "OnePlus 15", brand: "OnePlus", category: "smartphones", price: 54999, description: "The next flagship killer. Next-gen Snapdragon, Hasselblad cameras, and 7000mAh battery.", features: ["Snapdragon 8 Elite Gen 2", "6.8\" AMOLED 120Hz", "Hasselblad Camera", "7000mAh", "120W SUPERVOOC"], specifications: { "Display": "6.8\" QHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Elite Gen 2", "Camera": "50MP + 50MP + 50MP", "Storage": "256GB / 512GB", "Battery": "7000mAh" }, images: [op15], rating: 0, reviewCount: 0, inStock: false, badge: "Coming Soon" },

  { id: "op-15r", name: "OnePlus 15R", brand: "OnePlus", category: "smartphones", price: 34999, description: "Affordable flagship with next-gen chip and an enormous battery.", features: ["Snapdragon 8 Elite Gen 2", "6.7\" AMOLED 120Hz", "50MP Camera", "100W SUPERVOOC", "7500mAh"], specifications: { "Display": "6.7\" FHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Elite Gen 2", "Camera": "50MP + 50MP", "Storage": "256GB / 512GB", "Battery": "7500mAh" }, images: [op15], rating: 0, reviewCount: 0, inStock: false, badge: "Coming Soon" },

  { id: "op-15t", name: "OnePlus 15T", brand: "OnePlus", category: "smartphones", price: 42999, description: "Compact flagship with next-gen performance. The ultimate pocket powerhouse.", features: ["Snapdragon 8 Elite Gen 2", "6.3\" AMOLED 120Hz", "50MP Camera", "100W SUPERVOOC", "Compact Flagship"], specifications: { "Display": "6.3\" FHD+ LTPO AMOLED", "Chip": "Snapdragon 8 Elite Gen 2", "Camera": "50MP + 50MP", "Storage": "256GB / 512GB", "Battery": "6000mAh" }, images: [op15], rating: 0, reviewCount: 0, inStock: false, badge: "Coming Soon" },
];
