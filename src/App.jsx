import { useState } from "react";
import { copy as allCopy } from "./data/i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Airlines from "./components/sections/Airlines";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

export default function App() {
  const [language, setLanguage] = useState("es");
  const copy = allCopy[language];

  return (
    <main className="relative bg-[var(--color-ink)] text-white overflow-hidden">
      <Navbar language={language} setLanguage={setLanguage} copy={copy} />
      <Hero copy={copy} language={language} />
      <Airlines copy={copy} />
      <Features copy={copy} />
      <HowItWorks copy={copy} />
      <CTA copy={copy} />
      <Footer copy={copy} />
    </main>
  );
}
