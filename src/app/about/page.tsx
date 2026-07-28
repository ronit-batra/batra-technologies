import Link from "next/link";
import { ArrowRight, Shield, Award, Users, Zap, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="page-transition">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/80" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-32">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.3em]">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mt-3">About Batra Technologies</h1>
          <p className="text-dark-300 text-lg mt-4 max-w-xl font-light">Where technology meets luxury, and every product tells a story of excellence.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.3em]">The Vision</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-6">Redefining the Electronics Experience</h2>
            <p className="text-dark-300 leading-relaxed mb-4 font-light">Founded in 2020, Batra Technologies was born from a belief that buying technology should be as refined as the products themselves.</p>
            <p className="text-dark-300 leading-relaxed mb-8 font-light">We partner directly with the world&apos;s most innovative brands — Apple, Samsung, Sony, and more — to deliver authentic products with impeccable service to discerning customers who accept nothing less than extraordinary.</p>
            <Link href="/products" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-950 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-gold-500/20">
              Explore Products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-700/5 rounded-3xl p-8 border border-gold-500/10">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop" alt="Our Store" className="rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/50 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: Zap, title: "Our Mission", desc: "Making premium technology accessible through curation and care." },
              { icon: Users, title: "Customer First", desc: "Every decision starts and ends with you. Your satisfaction is our standard." },
              { icon: Award, title: "Quality Guarantee", desc: "Only authentic products from authorized partners. Always." },
              { icon: Shield, title: "Trust & Security", desc: "From checkout to delivery, your experience is protected end-to-end." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold-500/10">
                  <v.icon size={24} className="text-gold-500" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-10 md:p-14 border border-dark-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "50K+", label: "Happy Clients" },
              { value: "12K+", label: "Products Sold" },
              { value: "99.8%", label: "Satisfaction" },
              { value: "24/7", label: "Concierge Support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">{s.value}</div>
                <div className="text-xs text-dark-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            "100% authentic products from authorized dealers",
            "Complimentary express shipping on orders over ₹4,999",
            "30-day hassle-free return policy",
            "2-year warranty on all electronics",
            "Price match guarantee on identical items",
            "24/7 concierge support via phone, email & chat",
            "Secure checkout with 256-bit encryption",
            "Flexible EMI and installment options",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 hover:border-gold-500/20 transition-colors">
              <div className="w-7 h-7 bg-gold-500/10 rounded-full flex items-center justify-center shrink-0 border border-gold-500/20">
                <Check size={14} className="text-gold-400" />
              </div>
              <span className="text-dark-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
