export const copy = {
  es: {
    nav: {
      features: "Funciones",
      how: "Cómo funciona",
      pricing: "Precios",
      customers: "Clientes",
      cta: "Solicitar demo",
    },
    hero: {
      badge: "Nuevo · Predicción 25h antes del despegue",
      title: ["Alertas de retraso", "antes que las", "aerolíneas."],
      subtitle:
        "La plataforma B2B que anticipa, cuantifica y notifica cada retraso en tu flota antes que el aviso oficial. Reacciona con datos, no con suposiciones.",
      primary: "Solicitar demo",
      secondary: "Ver producto",
      trust: "Usado por equipos de operaciones que mueven +12,000 pasajeros diarios",
    },
    metrics: [
      { value: 25, suffix: "h", label: "Antes que la aerolínea" },
      { value: 98, suffix: "%", label: "Precisión de predicción" },
      { value: 12, suffix: "k+", label: "Pasajeros monitoreados/día" },
      { value: 47, suffix: "s", label: "Media de respuesta" },
    ],
    features: {
      eyebrow: "La suite",
      title: "Todo lo que siempre quisiste saber sobre tus vuelos —y más.",
      subtitle:
        "Seguimiento detallado con las señales que ninguna app ofrece: aeronave entrante, tripulación, clima, tráfico aéreo y slots.",
      cards: [
        {
          title: "Predicción inversa de retrasos",
          body: "Seguimos la aeronave entrante 25 horas antes del despegue para estimar tu nueva hora de salida.",
          tag: "Predicción",
        },
        {
          title: "Alertas de cambio de puerta",
          body: "Notificaciones instantáneas de gate change, boarding y push-back sincronizadas con torre.",
          tag: "Ops",
        },
        {
          title: "Radar meteorológico operacional",
          body: "Viento, tormentas, visibilidad por aeropuerto. Todo convertido en impacto en minutos.",
          tag: "Clima",
        },
        {
          title: "Panel B2B multi-vuelo",
          body: "Controla toda tu flota y tus viajeros VIP desde un único tablero unificado.",
          tag: "Dashboard",
        },
        {
          title: "API y webhooks",
          body: "Integra el riesgo de retraso en tu CRM, helpdesk o flujo de reserva.",
          tag: "Dev",
        },
        {
          title: "Slack, Teams y email",
          body: "Rutea alertas críticas directo al canal donde ya trabaja tu equipo.",
          tag: "Integra",
        },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "De señal cruda a decisión, en segundos.",
      steps: [
        {
          n: "01",
          title: "Ingesta en vivo",
          body: "Combinamos ADS-B, FAA SWIM, METAR/TAF y datos de ruta en un flujo único.",
        },
        {
          n: "02",
          title: "Modelo predictivo",
          body: "Nuestra IA cruza histórico, clima y aeronave entrante para estimar retraso real.",
        },
        {
          n: "03",
          title: "Alerta accionable",
          body: "Te avisamos antes que la aerolínea, con motivo, magnitud y opciones.",
        },
      ],
    },
    airlines: {
      title: "Integrado con el ecosistema aéreo global",
    },
    pricing: {
      eyebrow: "Precios",
      title: "Un plan para cada etapa de tu operación.",
      plans: [
        {
          name: "Starter",
          price: "0",
          period: "/mes",
          desc: "Para equipos que prueban el poder de la predicción.",
          features: ["Hasta 50 vuelos/mes", "Alertas por email", "Dashboard básico"],
          cta: "Empezar gratis",
        },
        {
          name: "Growth",
          price: "490",
          period: "/mes",
          desc: "Para operaciones serias que exigen SLA y precisión.",
          features: [
            "Hasta 2,000 vuelos/mes",
            "Alertas Slack + Teams",
            "API y webhooks",
            "Soporte prioritario",
          ],
          cta: "Probar 14 días",
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "A medida",
          period: "",
          desc: "Volumen, SSO, on-prem y SLA dedicado.",
          features: ["Vuelos ilimitados", "SSO + SCIM", "SLA 99.99%", "Success manager"],
          cta: "Hablar con ventas",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Equipos de operaciones no vuelven a volar sin OnTimeAI.",
      items: [
        {
          quote:
            "Reducimos nuestra tasa de re-booking tardío un 63% en el primer trimestre. Nos enteramos del retraso antes que la aerolínea, literal.",
          name: "Camila Rossi",
          role: "Head of Ops · TravelPro",
        },
        {
          quote:
            "Es el primer producto B2B del sector que trata la data como ciudadano de primera clase. La API es impecable.",
          name: "Diego Aranha",
          role: "CTO · VoyaCorp",
        },
        {
          quote:
            "Nuestros VIPs ya no llaman a preguntar. OnTimeAI les avisa antes que nosotros.",
          name: "Sofía Linares",
          role: "Concierge Director · Halcyon",
        },
      ],
    },
    lanyard: {
      eyebrow: "Tu pasaporte inteligente",
      title: "Arrastra. Explora. Es tuyo.",
      subtitle:
        "Tu credencial OnTimeAI sincroniza toda tu flota y tus viajeros en un único artefacto físico-digital.",
    },
    cta: {
      title: "Dejá de enterarte último.",
      subtitle:
        "Agendá una demo de 20 minutos y mirá cómo tu operación predice retrasos antes que la propia aerolínea.",
      primary: "Agendar demo",
      secondary: "Leer el pitch técnico",
    },
    footer: {
      tagline: "Alertas de retraso antes que las aerolíneas.",
      columns: [
        {
          title: "Producto",
          items: ["Funciones", "Precios", "API", "Changelog"],
        },
        {
          title: "Empresa",
          items: ["Nosotros", "Clientes", "Carreras", "Prensa"],
        },
        {
          title: "Recursos",
          items: ["Documentación", "Estado", "Soporte", "Legal"],
        },
      ],
      rights: "© 2026 OnTimeAI. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      pricing: "Pricing",
      customers: "Customers",
      cta: "Request demo",
    },
    hero: {
      badge: "New · 25h pre-departure prediction",
      title: ["Delay alerts", "faster than the", "airlines."],
      subtitle:
        "The B2B platform that anticipates, quantifies and routes every delay across your fleet — before the official notice. React with data, not guesses.",
      primary: "Request demo",
      secondary: "See the product",
      trust: "Trusted by ops teams moving 12,000+ passengers per day",
    },
    metrics: [
      { value: 25, suffix: "h", label: "Before the airline knows" },
      { value: 98, suffix: "%", label: "Prediction accuracy" },
      { value: 12, suffix: "k+", label: "Passengers monitored/day" },
      { value: 47, suffix: "s", label: "Median response time" },
    ],
    features: {
      eyebrow: "The suite",
      title: "Everything you ever wanted to know about your flights — and more.",
      subtitle:
        "Signals no other app surfaces: inbound aircraft, crew, weather, ATC, airport slots — all stitched together.",
      cards: [
        {
          title: "Reverse delay prediction",
          body: "We track the inbound aircraft 25 hours before departure to estimate your new takeoff time.",
          tag: "Predict",
        },
        {
          title: "Gate-change alerts",
          body: "Instant gate, boarding and push-back notifications, synced with the tower.",
          tag: "Ops",
        },
        {
          title: "Operational weather radar",
          body: "Wind, storms, visibility per airport — translated into minutes of impact.",
          tag: "Weather",
        },
        {
          title: "Multi-flight B2B panel",
          body: "Monitor your entire fleet and VIP travelers from a single unified board.",
          tag: "Dashboard",
        },
        {
          title: "API & webhooks",
          body: "Plug delay risk into your CRM, helpdesk or booking flow.",
          tag: "Dev",
        },
        {
          title: "Slack, Teams & email",
          body: "Route critical alerts straight to the channel your team already lives in.",
          tag: "Integra",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From raw signal to decision, in seconds.",
      steps: [
        {
          n: "01",
          title: "Live ingest",
          body: "We blend ADS-B, FAA SWIM, METAR/TAF and route data into a single stream.",
        },
        {
          n: "02",
          title: "Predictive model",
          body: "Our AI cross-references history, weather and inbound aircraft for a real delay estimate.",
        },
        {
          n: "03",
          title: "Actionable alert",
          body: "We notify you before the airline does — with cause, magnitude and options.",
        },
      ],
    },
    airlines: {
      title: "Wired into the global aviation stack",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "A plan for every stage of your operation.",
      plans: [
        {
          name: "Starter",
          price: "0",
          period: "/mo",
          desc: "For teams trying the power of prediction.",
          features: ["Up to 50 flights/mo", "Email alerts", "Basic dashboard"],
          cta: "Start free",
        },
        {
          name: "Growth",
          price: "490",
          period: "/mo",
          desc: "For serious ops that demand SLA and precision.",
          features: [
            "Up to 2,000 flights/mo",
            "Slack + Teams alerts",
            "API and webhooks",
            "Priority support",
          ],
          cta: "14-day trial",
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          desc: "Volume, SSO, on-prem and dedicated SLA.",
          features: ["Unlimited flights", "SSO + SCIM", "99.99% SLA", "Success manager"],
          cta: "Talk to sales",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Ops teams don't fly without OnTimeAI anymore.",
      items: [
        {
          quote:
            "We cut late re-bookings by 63% in a single quarter. We learn about delays before the airline does, literally.",
          name: "Camila Rossi",
          role: "Head of Ops · TravelPro",
        },
        {
          quote:
            "The first B2B product in the space that treats data as a first-class citizen. The API is pristine.",
          name: "Diego Aranha",
          role: "CTO · VoyaCorp",
        },
        {
          quote:
            "Our VIPs don't call anymore to ask. OnTimeAI tells them first.",
          name: "Sofía Linares",
          role: "Concierge Director · Halcyon",
        },
      ],
    },
    lanyard: {
      eyebrow: "Your smart passport",
      title: "Grab it. Swing it. It's yours.",
      subtitle:
        "Your OnTimeAI credential syncs your whole fleet and your travelers into one physical-digital artifact.",
    },
    cta: {
      title: "Stop being the last to know.",
      subtitle:
        "Book a 20-minute demo and watch your operation predict delays before the airline itself.",
      primary: "Book a demo",
      secondary: "Read the tech pitch",
    },
    footer: {
      tagline: "Delay alerts faster than the airlines.",
      columns: [
        {
          title: "Product",
          items: ["Features", "Pricing", "API", "Changelog"],
        },
        {
          title: "Company",
          items: ["About", "Customers", "Careers", "Press"],
        },
        {
          title: "Resources",
          items: ["Docs", "Status", "Support", "Legal"],
        },
      ],
      rights: "© 2026 OnTimeAI. All rights reserved.",
    },
  },
};
