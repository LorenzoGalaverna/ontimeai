import Marquee from "../primitives/Marquee";

const LOGOS = [
  "AEROLÍNEAS", "LATAM", "IBERIA", "BRITISH AIRWAYS", "LUFTHANSA", "AIR FRANCE",
  "DELTA", "UNITED", "EMIRATES", "QATAR", "KLM", "TURKISH",
];

export default function Airlines({ copy }) {
  return (
    <section className="py-20 bg-[var(--color-ink-2)] border-y border-white/5">
      <p className="text-center text-[11px] uppercase tracking-[0.3em] text-white/40 font-semibold mb-10">
        {copy.airlines.title}
      </p>
      <Marquee speed={50}>
        {LOGOS.map((name) => (
          <div
            key={name}
            className="mx-10 flex items-center gap-3 text-white/40 hover:text-white transition-colors"
          >
            <span className="font-display text-2xl md:text-3xl font-bold tracking-[-0.02em] whitespace-nowrap">
              {name}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
