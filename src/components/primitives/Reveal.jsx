import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

/**
 * Reveal — opacity + translate-up on enter.
 * Reuses ScrollTrigger only when not in-viewport at mount.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 1,
  once = true,
  stagger = 0,
  start = "top 85%",
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? el.children : el;
      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger: stagger || 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
