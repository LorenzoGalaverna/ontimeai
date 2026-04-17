import { useRef } from "react";
import { gsap, useGSAP, splitWords } from "../../lib/gsap";

/**
 * SplitReveal — splits the text inside its child into words and reveals
 * them word-by-word on enter. The child should contain plain text nodes.
 */
export default function SplitReveal({
  children,
  className = "",
  as: Tag = "h2",
  stagger = 0.04,
  duration = 1,
  delay = 0,
  start = "top 85%",
  trigger = true,
  play = "scroll", // "scroll" | "immediate"
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const spans = splitWords(el);
      if (!spans.length) return;

      const tween = {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power4.out",
      };

      if (play === "immediate") {
        gsap.to(spans, tween);
        return;
      }

      gsap.to(spans, {
        ...tween,
        scrollTrigger: trigger
          ? { trigger: el, start, toggleActions: "play none none none" }
          : undefined,
      });
    },
    { scope: ref, dependencies: [children] }
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
