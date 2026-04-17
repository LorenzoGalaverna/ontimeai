import { useRef } from "react";
import { Plane, MapPin, Clock, AlertTriangle, Smartphone, ArrowRight } from "lucide-react";
import { gsap, useGSAP, splitWords } from "../../lib/gsap";
import Magnetic from "../primitives/Magnetic";

export default function Hero({ copy, language }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Split each line of the title into words
      const lineEls = el.querySelectorAll(".hero-line");
      const wordGroups = Array.from(lineEls).map((line) => splitWords(line));
      const wordSpans = wordGroups.flat();

      const badge = el.querySelector(".hero-badge");
      const subtitle = el.querySelector(".hero-subtitle");
      const actions = el.querySelector(".hero-actions");
      const trust = el.querySelector(".hero-trust");
      const stage = el.querySelector(".hero-stage");
      const plane = el.querySelector(".hero-plane");
      const arc = el.querySelector(".hero-arc");
      const globe = el.querySelector(".hero-globe");
      const marks = el.querySelectorAll(".hero-mark");
      const cards = el.querySelectorAll(".hero-card");
      const metrics = el.querySelectorAll(".hero-metric");

      gsap.set([badge, subtitle, actions, trust], { opacity: 0, y: 24 });
      gsap.set(stage, { opacity: 0, y: 60 });
      gsap.set(plane, { opacity: 0, scale: 0.7, rotate: -10 });
      gsap.set(globe, { opacity: 0, scale: 0.9, transformOrigin: "50% 50%" });
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.92 });
      gsap.set(marks, { opacity: 0, scale: 0 });
      gsap.set(metrics, { opacity: 0, y: 16 });

      if (arc) {
        const len = arc.getTotalLength?.() || 1000;
        gsap.set(arc, { strokeDasharray: len, strokeDashoffset: len });
      }

      if (reduced) {
        gsap.set([badge, subtitle, actions, trust, wordSpans, stage, plane, globe], { opacity: 1, y: 0, scale: 1, rotate: 0 });
        gsap.set([cards, metrics, marks], { opacity: 1, y: 0, scale: 1 });
        if (arc) gsap.set(arc, { strokeDashoffset: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });
      tl.to(badge, { opacity: 1, y: 0, duration: 0.7 })
        .to(wordSpans, { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power4.out" }, "-=0.3")
        .to(subtitle, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to(actions, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(trust, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(stage, { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=1.0")
        .to(globe, { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }, "-=1.2")
        .to(arc, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }, "-=1.1")
        .to(marks, { opacity: 1, scale: 1, stagger: 0.15, duration: 0.6, ease: "back.out(2)" }, "-=1.2")
        .to(plane, { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: "power3.out" }, "-=1.2")
        .to(cards, { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.8 }, "-=1.0")
        .to(metrics, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 }, "-=0.6");

      // Globe slow spin
      if (globe) {
        gsap.to(globe, {
          rotate: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }

      // Plane idle float + gentle rock
      if (plane) {
        gsap.to(plane, {
          y: "-=14",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(plane, {
          rotate: 2,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Continuous float for alert cards
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: "+=16",
          duration: 3.4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.25,
        });
      });

      // Pulsing marks
      marks.forEach((mark) => {
        gsap.to(mark.querySelector(".pulse"), {
          scale: 2.2,
          opacity: 0,
          duration: 1.8,
          repeat: -1,
          ease: "power2.out",
        });
      });

      // Parallax on mouse for stage + cards
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width - 0.5;
        const my = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(plane, { x: mx * 30, duration: 1.2, ease: "power3.out", overwrite: "auto" });
        gsap.to(globe, { x: mx * 12, y: my * 12, duration: 1.4, ease: "power3.out", overwrite: "auto" });
        cards.forEach((c, i) => {
          const depth = (i % 2 === 0 ? 1 : -1) * (20 + i * 6);
          gsap.to(c, { x: mx * depth, rotate: mx * 2, duration: 1.4, ease: "power3.out", overwrite: "auto" });
        });
      };
      el.addEventListener("mousemove", onMove);
      return () => el.removeEventListener("mousemove", onMove);
    },
    { scope: root, dependencies: [language] }
  );

  const isEs = language === "es";
  const alerts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      tone: "from-sky-400 to-blue-600",
      title: "AEP ✈ COR",
      label: isEs ? "Puerta cambiada · G14" : "Gate changed · G14",
      meta: isEs ? "Embarque inminente" : "Boarding soon",
      pos: "top-[14%] left-[-4%]",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      tone: "from-rose-400 to-red-600",
      title: "EZE ✈ MAD",
      label: isEs ? "Retraso · +45m" : "Delayed · +45m",
      meta: "21:45",
      pos: "top-[18%] right-[-4%]",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      tone: "from-emerald-400 to-emerald-600",
      title: "BRC ✈ AEP",
      label: isEs ? "Aproximación" : "Approaching",
      meta: isEs ? "Aterriza en 15m" : "Landing in 15m",
      pos: "bottom-[22%] left-[-3%]",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      tone: "from-amber-400 to-orange-600",
      title: "MDZ ✈ AEP",
      label: isEs ? "Alerta Zonda" : "Wind alert",
      meta: isEs ? "Vientos en destino" : "Winds at destination",
      pos: "bottom-[14%] right-[-3%]",
    },
  ];

  return (
    <section
      ref={root}
      id="top"
      className="relative overflow-hidden pt-40 md:pt-48 pb-24 text-center"
    >
      {/* Ambient background */}
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg grid-mask opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-violet-200">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-75" />
            <span className="relative rounded-full w-2 h-2 bg-violet-400" />
          </span>
          {copy.hero.badge}
        </div>

        <h1 className="font-display font-bold text-[clamp(52px,8.5vw,120px)] leading-[0.95] tracking-[-0.045em] text-white mt-7 mb-6">
          {copy.hero.title.map((line, i) => (
            <span
              key={i}
              className={`hero-line block ${i === 1 ? "text-white/80" : ""} ${i === 2 ? "bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle mx-auto max-w-2xl text-[17px] md:text-[19px] text-white/60 font-medium leading-relaxed">
          {copy.hero.subtitle}
        </p>

        <div className="hero-actions mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Magnetic strength={0.2}>
            <a
              href="#cta"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-black"
            >
              {copy.hero.primary}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Magnetic>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3.5 text-[14px] font-semibold text-white/90 hover:bg-white/10 transition"
          >
            <Smartphone className="w-4 h-4" />
            {copy.hero.secondary}
          </a>
        </div>

        <p className="hero-trust mt-8 text-[12px] uppercase tracking-[0.2em] text-white/40 font-medium">
          {copy.hero.trust}
        </p>

        {/* Flight stage */}
        <div className="hero-stage relative mt-20 md:mt-24 mx-auto w-full max-w-5xl h-[520px] md:h-[640px]">
          {/* Radial violet glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[560px] h-[560px] rounded-full bg-violet-600/25 blur-[140px]" />
          </div>

          {/* Globe wireframe */}
          <svg
            className="hero-globe absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] md:w-[640px] md:h-[640px] text-white/20"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden
          >
            <defs>
              <radialGradient id="globeFade" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="rgba(139,92,246,0.25)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0)" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="240" fill="url(#globeFade)" />
            <circle cx="300" cy="300" r="240" stroke="currentColor" strokeWidth="1" />
            {[60, 120, 180, 240, 300, 360, 420, 480].map((y) => {
              const rx = Math.sqrt(Math.max(0, 240 * 240 - (y - 300) ** 2));
              return (
                <ellipse
                  key={`lat-${y}`}
                  cx="300"
                  cy={y}
                  rx={rx || 1}
                  ry="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.6"
                />
              );
            })}
            {[30, 60, 90, 120, 150].map((a) => (
              <ellipse
                key={`lon-${a}`}
                cx="300"
                cy="300"
                rx={240 * Math.abs(Math.cos((a * Math.PI) / 180)) + 0.5}
                ry="240"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
          </svg>

          {/* Flight arc */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="arcGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
                <stop offset="50%" stopColor="#DDD6FE" stopOpacity="1" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="hero-arc"
              d="M 110 440 Q 400 60 690 420"
              stroke="url(#arcGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* A / B endpoint marks */}
          <div className="hero-mark absolute" style={{ left: "13.75%", top: "73.3%" }}>
            <span className="pulse absolute inset-0 m-auto w-3 h-3 rounded-full bg-violet-400" />
            <span className="relative block w-3 h-3 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.18em] font-bold text-white whitespace-nowrap">
              EZE · 20:12
            </div>
          </div>
          <div className="hero-mark absolute" style={{ left: "86.25%", top: "70%" }}>
            <span className="pulse absolute inset-0 m-auto w-3 h-3 rounded-full bg-fuchsia-400" />
            <span className="relative block w-3 h-3 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.18em] font-bold text-white whitespace-nowrap">
              MAD · 13:44
            </div>
          </div>

          {/* Plane at arc apex */}
          <div
            className="hero-plane absolute left-1/2 top-[10%] -translate-x-1/2 w-[300px] md:w-[420px] drop-shadow-[0_30px_60px_rgba(139,92,246,0.55)]"
          >
            <svg viewBox="0 0 512 512" className="w-full h-auto text-white">
              <defs>
                <linearGradient id="planeBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#E9D5FF" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
                <linearGradient id="planeShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#3b0764" />
                </linearGradient>
              </defs>

              {/* Soft shadow */}
              <ellipse cx="256" cy="470" rx="150" ry="14" fill="rgba(0,0,0,0.4)" />

              {/* Wings */}
              <path
                d="M256 220 L90 300 L90 322 L256 290 L422 322 L422 300 Z"
                fill="url(#planeBody)"
              />
              <path
                d="M256 220 L90 300 L90 322 L256 290 L422 322 L422 300 Z"
                fill="url(#planeShade)"
                opacity="0.4"
              />

              {/* Fuselage */}
              <path
                d="M256 40
                   C 280 40 296 80 300 160
                   L 308 340
                   L 300 420
                   C 280 450 232 450 212 420
                   L 204 340
                   L 212 160
                   C 216 80 232 40 256 40 Z"
                fill="url(#planeBody)"
              />
              <path
                d="M256 40
                   C 280 40 296 80 300 160
                   L 308 340
                   L 300 420
                   C 280 450 232 450 212 420
                   L 204 340
                   L 212 160
                   C 216 80 232 40 256 40 Z"
                fill="url(#planeShade)"
                opacity="0.35"
              />

              {/* Cockpit */}
              <path
                d="M256 58 C 272 58 286 78 286 108 C 286 118 270 124 256 124 C 242 124 226 118 226 108 C 226 78 240 58 256 58 Z"
                fill="url(#windowGrad)"
              />

              {/* Side windows */}
              {Array.from({ length: 8 }).map((_, i) => (
                <rect
                  key={i}
                  x="244"
                  y={160 + i * 22}
                  width="24"
                  height="10"
                  rx="3"
                  fill="#1e1b4b"
                  opacity="0.85"
                />
              ))}

              {/* Tail */}
              <path
                d="M256 360 L222 432 L222 446 L256 430 L290 446 L290 432 Z"
                fill="url(#planeBody)"
              />
              <path
                d="M256 360 L222 432 L222 446 L256 430 L290 446 L290 432 Z"
                fill="url(#planeShade)"
                opacity="0.5"
              />

              {/* Engines */}
              <ellipse cx="170" cy="320" rx="16" ry="8" fill="#2e1065" />
              <ellipse cx="342" cy="320" rx="16" ry="8" fill="#2e1065" />

              {/* Highlight streak */}
              <path
                d="M256 60 C 268 60 276 100 280 160 L 284 340"
                stroke="#ffffff"
                strokeOpacity="0.6"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Alert cards floating around */}
          {alerts.map((a, i) => (
            <div
              key={i}
              className={`hero-card absolute ${a.pos} hidden sm:flex w-[260px] gap-3 items-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]`}
            >
              <div className={`shrink-0 grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br ${a.tone} text-white shadow-lg`}>
                {a.icon}
              </div>
              <div className="text-left">
                <div className="text-[13px] font-bold text-white tracking-tight">{a.title}</div>
                <div className="text-[12px] text-white/70 font-medium">{a.label}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{a.meta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics strip */}
        <div className="mt-20 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {copy.metrics.map((m, i) => (
            <div
              key={i}
              className="hero-metric rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-left"
            >
              <div className="font-display text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-none">
                {m.value}
                <span className="text-violet-300">{m.suffix}</span>
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-wider font-semibold text-white/50">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
