import { useRef } from "react";
import { Sparkles, Map, CloudLightning, LayoutDashboard, Code2, Slack } from "lucide-react";
import Section from "../primitives/Section";
import SplitReveal from "../primitives/SplitReveal";
import { gsap, useGSAP } from "../../lib/gsap";

const ICONS = [Sparkles, Map, CloudLightning, LayoutDashboard, Code2, Slack];

export default function Features({ copy }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const cards = root.current?.querySelectorAll(".feature-card");
      if (!cards?.length) return;

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      // Mouse spotlight on each card
      cards.forEach((card) => {
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width) * 100;
          const y = ((e.clientY - r.top) / r.height) * 100;
          card.style.setProperty("--mx", `${x}%`);
          card.style.setProperty("--my", `${y}%`);
        };
        card.addEventListener("mousemove", onMove);
      });
    },
    { scope: root }
  );

  return (
    <Section id="features" eyebrow={copy.features.eyebrow}>
      <div ref={root}>
        <SplitReveal
          as="h2"
          className="font-display text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.035em] font-bold text-white max-w-4xl"
        >
          {copy.features.title}
        </SplitReveal>
        <p className="mt-5 max-w-2xl text-white/60 text-lg">{copy.features.subtitle}</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.features.cards.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isHero = i === 0;
            return (
              <div
                key={card.title}
                className={`feature-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.04] ${
                  isHero ? "md:col-span-2 md:row-span-1 lg:col-span-2" : ""
                }`}
                style={{
                  backgroundImage:
                    "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.12), transparent 50%)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500/80 to-fuchsia-500/70 text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/40">
                    {card.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-bold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] text-white/60 leading-relaxed max-w-md">{card.body}</p>

                {isHero ? (
                  <div className="mt-8 relative h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-950/40 to-black overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30">
                      {Array.from({ length: 72 }).map((_, j) => (
                        <div key={j} className="border border-white/5" />
                      ))}
                    </div>
                    <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur px-4 py-3">
                      <span className="text-violet-300 text-sm font-bold">✨ 1h delay predicted</span>
                    </div>
                    <div className="absolute right-6 bottom-6 flex items-end gap-1">
                      {[12, 30, 22, 48, 36, 58, 40, 66, 54, 72, 60, 80].map((h, idx) => (
                        <div
                          key={idx}
                          className="w-2 rounded-t bg-gradient-to-t from-violet-500 to-fuchsia-400"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
