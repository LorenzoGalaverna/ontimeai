import { useRef } from "react";
import Section from "../primitives/Section";
import SplitReveal from "../primitives/SplitReveal";
import Lanyard from "../Lanyard";
import { gsap, useGSAP } from "../../lib/gsap";

export default function LanyardSection({ copy }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const lanyard = root.current?.querySelector(".lanyard-wrap");
      if (!lanyard) return;
      gsap.from(lanyard, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root }
  );

  return (
    <Section className="bg-[var(--color-ink-2)]" eyebrow={copy.lanyard.eyebrow}>
      <div ref={root} className="relative">
        <SplitReveal
          as="h2"
          className="font-display text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.035em] font-bold text-white max-w-3xl"
        >
          {copy.lanyard.title}
        </SplitReveal>
        <p className="mt-4 max-w-xl text-white/60 text-lg">{copy.lanyard.subtitle}</p>

        <div className="lanyard-wrap relative mt-4 h-[70vh] min-h-[500px]">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </Section>
  );
}
