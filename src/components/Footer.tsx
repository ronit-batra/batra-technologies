import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-dark-950 font-bold text-sm">BT</div>
              <div>
                <span className="text-lg font-display font-semibold text-white">Batra</span>
                <span className="text-lg font-display font-light text-gold-400 ml-1">Technologies</span>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Curating the finest electronics for those who appreciate the intersection of technology and elegance.
            </p>
          </div>

          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-6">Shop</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "All Products", href: "/products" },
                { label: "Smartphones", href: "/products?category=smartphones" },
                { label: "Accessories", href: "/products?category=accessories" },
                { label: "Audio", href: "/products?category=headphones" },
                { label: "Wearables", href: "/products?category=wearables" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-dark-400 hover:text-gold-400 transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Order History", href: "/orders" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-dark-400 hover:text-gold-400 transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-6">Contact Us</h3>
            <div className="space-y-3 text-sm text-dark-400">
              <p>Ganj Road / Khairtal Road<br />Kishangarh Bas, Alwar, Rajasthan</p>
              <p>Phone: <a href="tel:9351396757" className="hover:text-gold-400 transition-colors">9351396757</a></p>
              <p>Email: <a href="mailto:batratechnologies@gmail.com" className="hover:text-gold-400 transition-colors">batratechnologies@gmail.com</a></p>
              <p>Hours: 24/7 — All Days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-500">
          <p>&copy; 2026 Batra Technologies. All rights reserved.</p>
          <p>Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}
