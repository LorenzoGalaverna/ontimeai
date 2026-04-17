import { Plane } from "lucide-react";

export default function Footer({ copy }) {
  return (
    <footer className="relative border-t border-white/5 bg-[var(--color-ink)] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2 text-white font-display font-bold text-xl">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <Plane className="w-4 h-4" strokeWidth={2.5} />
            </span>
            OnTimeAI
          </div>
          <p className="mt-4 max-w-sm text-white/50 text-[14px] leading-relaxed">{copy.footer.tagline}</p>
        </div>

        {copy.footer.columns.map((col) => (
          <div key={col.title}>
            <div className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-semibold">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white text-[14px] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-[12px]">{copy.footer.rights}</p>
        <div className="text-white/40 text-[11px] font-mono">v2.6.0 — built with GSAP + React 19</div>
      </div>
    </footer>
  );
}
