import { useRef } from "react";
import Section from "../primitives/Section";
import SplitReveal from "../primitives/SplitReveal";
import { gsap, useGSAP } from "../../lib/gsap";

export default function Testimonials({ copy }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const cards = root.current?.querySelectorAll(".testimonial");
      if (!cards?.length) return;
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        rotate: -2,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    },
    { scope: root }
  );

  return (
    <Section id="customers" eyebrow={copy.testimonials.eyebrow}>
      <SplitReveal
        as="h2"
        className="font-display text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.035em] font-bold text-white max-w-4xl"
      >
        {copy.testimonials.title}
      </SplitReveal>

      <div ref={root} className="mt-14 grid md:grid-cols-3 gap-5">
        {copy.testimonials.items.map((t) => (
          <figure
            key={t.name}
            className="testimonial relative rounded-[28px] border border-white/10 bg-white/[0.02] p-7"
          >
            <span className="absolute top-5 right-6 font-display text-6xl text-violet-500/30 leading-none">"</span>
            <blockquote className="text-white/85 text-[15px] leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-8 pt-5 border-t border-white/10">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-[12px] text-white/50 mt-0.5">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
