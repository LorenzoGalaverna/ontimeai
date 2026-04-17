import { useRef } from "react";
import { Plane } from "lucide-react";
import { gsap, useGSAP } from "../lib/gsap";
import Magnetic from "./primitives/Magnetic";

export default function Navbar({ language, setLanguage, copy }) {
  const root = useRef(null);
  const pill = useRef(null);
  const items = useRef([]);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      // Initial drop-in
      gsap.from(el, { y: -40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });

      // Scroll-aware compact state
      const compact = gsap.to(el, {
        paused: true,
        duration: 0.4,
        ease: "power2.out",
        scale: 0.97,
        backgroundColor: "rgba(10, 6, 20, 0.78)",
        boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.35)",
      });
      const onScroll = () => (window.scrollY > 40 ? compact.play() : compact.reverse());
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    },
    { scope: root }
  );

  const movePill = (i) => {
    const target = items.current[i];
    const container = root.current;
    if (!target || !container || !pill.current) return;
    const t = target.getBoundingClientRect();
    const c = container.getBoundingClientRect();
    gsap.to(pill.current, {
      opacity: 1,
      x: t.left - c.left,
      y: t.top - c.top,
      width: t.width,
      height: t.height,
      duration: 0.45,
      ease: "power3.out",
    });
  };
  const hidePill = () =>
    gsap.to(pill.current, { opacity: 0, duration: 0.25, ease: "power2.out" });

  const links = [
    { label: copy.nav.features, href: "#features" },
    { label: copy.nav.how, href: "#how" },
    { label: copy.nav.pricing, href: "#pricing" },
    { label: copy.nav.customers, href: "#customers" },
  ];

  const isEs = language === "es";

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <nav
        ref={root}
        className="pointer-events-auto relative flex items-center gap-1 rounded-full border border-white/10 bg-black/55 backdrop-blur-xl p-1.5 pl-5 pr-1.5 shadow-[0_10px_60px_-20px_rgba(139,92,246,0.5)]"
        onMouseLeave={hidePill}
      >
        <a href="#top" className="flex items-center gap-2 pr-6 text-white font-display font-bold text-[17px] tracking-tight">
          <span className="relative grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_24px_rgba(139,92,246,0.55)]">
            <Plane className="w-4 h-4 text-white" strokeWidth={2.5} />
          </span>
          OnTimeAI
        </a>

        <div className="relative hidden md:flex items-center">
          <div
            ref={pill}
            className="absolute left-0 top-0 rounded-full bg-white pointer-events-none"
            style={{ opacity: 0, mixBlendMode: "difference" }}
          />
          {links.map((link, i) => (
            <a
              key={link.href}
              ref={(el) => (items.current[i] = el)}
              href={link.href}
              onMouseEnter={() => movePill(i)}
              className="relative z-10 px-5 py-2 text-[13px] font-semibold text-white/80 hover:text-white rounded-full whitespace-nowrap transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-3">
          <div className="hidden sm:flex items-center text-[11px] font-bold rounded-full border border-white/10 bg-white/5 p-0.5">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-full transition ${isEs ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition ${!isEs ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
            >
              EN
            </button>
          </div>
          <Magnetic strength={0.25}>
            <a
              href="#cta"
              className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-bold text-black hover:bg-violet-100 transition-colors"
            >
              {copy.nav.cta}
              <span aria-hidden className="text-violet-600">→</span>
            </a>
          </Magnetic>
        </div>
      </nav>
    </div>
  );
}
