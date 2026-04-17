import { Check } from "lucide-react";
import Section from "../primitives/Section";
import SplitReveal from "../primitives/SplitReveal";
import Reveal from "../primitives/Reveal";
import Magnetic from "../primitives/Magnetic";

export default function Pricing({ copy }) {
  return (
    <Section id="pricing" eyebrow={copy.pricing.eyebrow}>
      <SplitReveal
        as="h2"
        className="font-display text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.035em] font-bold text-white max-w-3xl"
      >
        {copy.pricing.title}
      </SplitReveal>

      <Reveal className="mt-14 grid md:grid-cols-3 gap-5" stagger={0.1} y={50}>
        {copy.pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-[28px] p-8 border transition ${
              plan.highlight
                ? "border-violet-400/40 bg-gradient-to-b from-violet-600/15 to-white/[0.02] shadow-[0_40px_80px_-30px_rgba(139,92,246,0.5)]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            {plan.highlight ? (
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                Popular
              </span>
            ) : null}

            <div className="flex items-baseline gap-1">
              <span className="font-display text-sm uppercase tracking-[0.2em] text-white/60">
                {plan.name}
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">
                {plan.price === "Custom" || plan.price === "A medida" ? plan.price : `$${plan.price}`}
              </span>
              <span className="text-white/50 text-sm font-semibold">{plan.period}</span>
            </div>
            <p className="mt-3 text-white/60 text-sm">{plan.desc}</p>

            <ul className="mt-7 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[14px] text-white/80">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-violet-500/20 text-violet-300">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Magnetic strength={0.15}>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[13px] font-bold transition ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-violet-100"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </Magnetic>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
