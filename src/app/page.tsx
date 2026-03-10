import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { ArrowRight, Layers, Palette, ShieldCheck } from "lucide-react";

const techCards = [
  {
    icon: Layers,
    title: "High-Density Pile",
    desc: "Ultra-soft, dense fibers woven for a seamless finish and superior hand-feel.",
  },
  {
    icon: ShieldCheck,
    title: "Durability-Shield",
    desc: "Advanced fiber-locking technology to prevent shedding and ensure long-term resilience.",
  },
  {
    icon: Palette,
    title: "Bespoke Shades",
    desc: "Custom color-matching capabilities for exclusive high-volume production runs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* ── Innovation Section ── */}
      <section id="innovation" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black border-y border-black/5 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">

          {/* Section header */}
          <div className="mb-10 sm:mb-14">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
              Our Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary dark:text-white uppercase leading-tight">
              Precision <span className="text-primary">Craft</span>
            </h2>
          </div>

          {/* Cards grid: 1 col → 2 col (md) → 3 col (lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {techCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 sm:p-8 border border-black/5 dark:border-white/5 rounded-2xl
                           hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Showcase />

      {/* ── CTA Section ── */}
      <section id="about" className="py-20 sm:py-28 lg:py-32 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none uppercase mb-6 sm:mb-8">
              ENGINEERING THE
              <br />
              <span className="opacity-50">FUTURE OF TEXTILES</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed mb-10 sm:mb-12 max-w-2xl">
              We leverage advanced knitting and weaving machinery to manufacture premium-quality fabrics with exceptional precision and consistency.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-4">
              <button className="w-full xs:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary font-black uppercase tracking-widest hover:scale-105 transition-transform text-sm">
                DOWNLOAD CATALOG
              </button>
              <button className="w-full xs:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/40 text-white font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-sm">
                REQUEST A MEETING
              </button>
            </div>
          </div>
        </div>

        {/* Grid watermark */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </main>
  );
}
