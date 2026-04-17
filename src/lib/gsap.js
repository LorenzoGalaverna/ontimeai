import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Global defaults — calm, cinematic
gsap.defaults({ ease: "power3.out", duration: 0.9 });

// ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

export const EASES = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
  sine: "sine.inOut",
  back: "back.out(1.4)",
};

// Split text into word-wrapped spans for stagger reveals.
// Returns the array of inner spans (targets for GSAP).
export function splitWords(el) {
  if (!el || el.dataset.split === "done") {
    return Array.from(el?.querySelectorAll?.(".word > span") ?? []);
  }
  const text = el.textContent;
  el.textContent = "";
  const frag = document.createDocumentFragment();
  const words = text.split(/(\s+)/);
  const spans = [];
  for (const w of words) {
    if (/^\s+$/.test(w)) {
      frag.appendChild(document.createTextNode(w));
      continue;
    }
    const outer = document.createElement("span");
    outer.className = "word";
    const inner = document.createElement("span");
    inner.textContent = w;
    outer.appendChild(inner);
    frag.appendChild(outer);
    spans.push(inner);
  }
  el.appendChild(frag);
  el.dataset.split = "done";
  return spans;
}

export { gsap, ScrollTrigger, useGSAP };
