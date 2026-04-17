import clsx from "clsx";

/**
 * Section — consistent vertical rhythm + max-width container.
 */
export default function Section({ id, className = "", container = true, children, eyebrow }) {
  return (
    <section id={id} className={clsx("relative py-32 md:py-44", className)}>
      {container ? (
        <div className="relative max-w-7xl mx-auto px-6">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-violet-300/90 mb-6">
      <span className="w-6 h-px bg-violet-400/70" />
      {children}
    </div>
  );
}
