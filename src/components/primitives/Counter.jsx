import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

/**
 * Counter — animates from 0 to `to` on scroll-in.
 */
export default function Counter({ to = 100, duration = 1.8, suffix = "", prefix = "", className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: to,
        duration,
        ease: "power2.out",
        snap: { v: 1 },
        onUpdate: () => {
          el.textContent = `${prefix}${obj.v.toLocaleString()}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    },
    { scope: ref, dependencies: [to] }
  );

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
