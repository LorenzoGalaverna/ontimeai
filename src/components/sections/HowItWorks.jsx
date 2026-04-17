import { useRef } from "react";
import Section from "../primitives/Section";
import SplitReveal from "../primitives/SplitReveal";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap";

export default function HowItWorks({ copy }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const steps = el.querySelectorAll(".how-step");
      const nums = el.querySelectorAll(".how-num");
      const track = el.querySelector(".how-track");

      // Pinned horizontal reveal: steps slide in as the section scrolls
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const total = steps.length;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${window.innerHeight * total}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        steps.forEach((step, i) => {
          tl.to(nums[i], { opacity: 1, scale: 1, duration: 0.5 }, i);
          tl.to(step, { opacity: 1, y: 0, duration: 0.6 }, i);
          if (i < total - 1) {
            tl.to([step, nums[i]], { opacity: 0.2, duration: 0.6 }, i + 0.6);
          }
        });

        tl.to(track, { scaleX: 1, duration: total, ease: "none" }, 0);

        return () => tl.kill();
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from(steps, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        });
        gsap.set([nums, steps], { opacity: 1, y: 0, scale: 1 });
      });

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: root }
  );

  return (
    <Section id="how" className="bg-[var(--color-ink-2)]" eyebrow={copy.how.eyebrow}>
      <div ref={root}>
        <SplitReveal
          as="h2"
          className="font-display text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.035em] font-bold text-white max-w-4xl"
        >
          {copy.how.title}
        </SplitReveal>

        <div className="mt-16 relative">
          {/* Progress rail */}
          <div className="absolute left-0 right-0 top-[28px] h-px bg-white/10">
            <div
              className="how-track h-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {copy.how.steps.map((step, i) => (
              <div key={step.n} className="relative pt-16">
                <div
                  className="how-num absolute top-0 left-0 grid place-items-center w-14 h-14 rounded-full bg-black border border-violet-400/40 text-violet-300 font-mono font-bold shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                  style={{ opacity: 0.2, transform: "scale(0.9)" }}
                >
                  {step.n}
                </div>
                <div className="how-step" style={{ opacity: 0.2, transform: "translateY(20px)" }}>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-white/60 text-[15px] leading-relaxed max-w-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
