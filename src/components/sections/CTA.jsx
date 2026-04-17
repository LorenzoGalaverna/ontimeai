import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Section from "../primitives/Section";
import SplitReveal from "../primitives/SplitReveal";
import Magnetic from "../primitives/Magnetic";
import { gsap, useGSAP } from "../../lib/gsap";

export default function CTA({ copy }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const card = root.current?.querySelector(".cta-card");
      if (!card) return;
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });

      // Orbiting glow
      const orb = card.querySelector(".cta-orb");
      if (orb) {
        gsap.to(orb, {
          rotation: 360,
          duration: 18,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
    },
    { scope: root }
  );

  return (
    <Section id="cta" container={false}>
      <div ref={root} className="px-6 max-w-7xl mx-auto">
        <div className="cta-card relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/40 via-ink-2 to-black p-10 md:p-20 text-center">
          <div className="cta-orb absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/30 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 grid-bg grid-mask opacity-30 pointer-events-none" />

          <SplitReveal
            as="h2"
            className="relative font-display text-[clamp(40px,6vw,84px)] leading-[0.98] tracking-[-0.04em] font-bold text-white max-w-3xl mx-auto"
          >
            {copy.cta.title}
          </SplitReveal>
          <p className="relative mt-5 mx-auto max-w-xl text-white/60 text-lg">{copy.cta.subtitle}</p>
          <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic strength={0.2}>
              <a
                href="#"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-bold text-black"
              >
                {copy.cta.primary}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Magnetic>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-[14px] font-semibold text-white/90 hover:bg-white/10 transition"
            >
              {copy.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
