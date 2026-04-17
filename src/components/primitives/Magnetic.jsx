import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

/**
 * Magnetic — element follows the cursor within a radius. Subtle CTA polish.
 */
export default function Magnetic({ children, strength = 0.25, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        qx((e.clientX - (r.left + r.width / 2)) * strength);
        qy((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        qx(0);
        qy(0);
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
