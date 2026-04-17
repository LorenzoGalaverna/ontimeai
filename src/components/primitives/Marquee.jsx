import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

/**
 * Marquee — infinite horizontal loop with GSAP. Pauses on hover.
 */
export default function Marquee({ children, speed = 40, className = "", pauseOnHover = true }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const track = ref.current?.firstElementChild;
      if (!track) return;

      // Duplicate children once so the loop is seamless.
      const originalCount = track.children.length;
      for (let i = 0; i < originalCount; i++) {
        track.appendChild(track.children[i].cloneNode(true));
      }

      const loopWidth = track.scrollWidth / 2;
      const tween = gsap.to(track, {
        x: -loopWidth,
        duration: loopWidth / speed,
        ease: "none",
        repeat: -1,
      });

      if (pauseOnHover) {
        const el = ref.current;
        const pause = () => tween.timeScale(0.2);
        const resume = () => tween.timeScale(1);
        el.addEventListener("mouseenter", pause);
        el.addEventListener("mouseleave", resume);
        return () => {
          el.removeEventListener("mouseenter", pause);
          el.removeEventListener("mouseleave", resume);
        };
      }
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="marquee-track">{children}</div>
    </div>
  );
}
