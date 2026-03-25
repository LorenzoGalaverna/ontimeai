import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Plane, Smartphone, Settings, Map, Clock, MapPin, AlertTriangle } from 'lucide-react';
// react-framify removed — using custom phone mockup
import Lanyard from './components/Lanyard';
import PillNav from './components/PillNav';

const Navbar = ({ language, setLanguage }) => {
  const isEs = language === 'es';
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none pt-4">
      <PillNav
        logo={
          <div className="flex items-center gap-2 font-black text-[22px] tracking-tight text-white hover:cursor-pointer">
            <Plane className="w-6 h-6" />
            OnTimeAI
          </div>
        }
        logoAlt="OnTimeAI Logo"
        items={[
          { label: isEs ? 'Precios' : 'Pricing', href: '#pricing' },
          { label: 'Enterprise', href: '#enterprise' },
          { label: isEs ? 'Características' : 'Features', href: '#features' },
          { label: isEs ? 'Ayuda' : 'Help Center', href: '#help' }
        ]}
        activeHref="#features"
        className="backdrop-blur-xl border border-white/10"
        ease="power2.easeOut"
        baseColor="rgba(30, 30, 36, 0.75)"
        pillColor="#ffffff"
        hoveredPillTextColor="#000000"
        pillTextColor="#a1a1aa"
        initialLoadAnimation={true}
        rightElement={
          <div className="flex items-center gap-4 pointer-events-auto pl-2">
            {/* Language Switch */}
            <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${isEs ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${!isEs ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <button
              className="px-6 py-2.5 bg-white text-black font-bold text-[14px] rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-lg"
            >
              {isEs ? 'Solicitar Demo' : 'Request Demo'}
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        }
      />
    </div>
  );
};

const Hero = ({ language }) => {
  const isEs = language === 'es';
  return (
    <section className="pt-48 pb-0 px-6 text-center w-full max-w-[1400px] mx-auto flex flex-col items-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(48px,8vw,100px)] leading-[1.05] font-extrabold tracking-[-0.04em] text-black mb-6"
      >
        {isEs ? (
          <>Alertas de retrasos antes <br /> que las aerolíneas</>
        ) : (
          <>Delay alerts faster <br /> than the airlines</>
        )}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[22px] text-gray-500 font-medium max-w-3xl leading-relaxed mb-16 tracking-[-0.01em]"
      >
        {isEs ?
          "La única app B2B que te dice todo sobre tus operaciones de vuelo. Obtén actualizaciones en tiempo real y predicciones de retrasos para anticiparte y reaccionar." :
          "The only B2B app that tells you everything about your flight operations. Get real-time updates and delay predictions so you're always the first to know and rebook."}
      </motion.p>

      {/* Flighty's specific Mockup Section with Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl h-[1060px] flex justify-center mt-12 overflow-hidden"
      >
        {/* Hand + Phone Mockup */}
        <div className="absolute top-0 z-20 flex justify-center" style={{ width: 860, height: 1060 }}>
          {/* App screenshot placed under the phone at the exact screen coordinates */}
          <div style={{
            position: 'absolute',
            top: '17%',
            left: '34%',
            width: '33%',
            height: '58%',
            borderRadius: '40px',
            overflow: 'hidden',
            zIndex: 1,
          }}>
            <img
              src="/hero-phone-bg.png"
              alt="OnTimeAI App"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Transparent hand + phone image on top */}
          <img
            src="/hand-phone.png"
            alt="Hand holding phone"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 2,
            }}
          />
        </div>

        {/* Floating Notification Cards */}
        {/* Top-left */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[200px] left-[2%] w-72 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-30"
        >
          <div className="bg-blue-50 text-blue-500 p-3 rounded-2xl"><MapPin className="w-6 h-6" /></div>
          <div className="text-left">
            <p className="font-bold text-[15px] text-black">AEP ✈ COR • {isEs ? "Puerta cambiada" : "Gate changed"}</p>
            <p className="text-[13px] text-gray-500">{isEs ? "Nueva puerta: P14 (Embarque inminente)" : "New gate: G14 (Boarding soon)"}</p>
          </div>
        </motion.div>

        {/* Mid-right */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 right-[1%] w-72 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-30"
        >
          <div className="bg-red-50 text-red-500 p-3 rounded-2xl"><Clock className="w-6 h-6" /></div>
          <div className="text-left">
            <p className="font-bold text-[15px] text-black">EZE ✈ MAD • {isEs ? "Retraso 45m" : "Delayed 45m"}</p>
            <p className="text-[13px] text-gray-500">{isEs ? "Nueva hora: 21:45 (+45m)" : "New time: 21:45 (+45m)"}</p>
          </div>
        </motion.div>

        {/* Mid-left */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28rem] left-[1%] w-72 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-30"
        >
          <div className="bg-emerald-50 text-emerald-500 p-3 rounded-2xl"><Plane className="w-6 h-6" /></div>
          <div className="text-left">
            <p className="font-bold text-[15px] text-black">BRC ✈ AEP • {isEs ? "Aproximación" : "Approaching"}</p>
            <p className="text-[13px] text-gray-500">{isEs ? "Aterriza en 15 minutos" : "Landing in 15 mins"}</p>
          </div>
        </motion.div>

        {/* Bottom-right */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[32rem] right-[1%] w-72 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-30"
        >
          <div className="bg-orange-50 text-orange-500 p-3 rounded-2xl"><AlertTriangle className="w-6 h-6" /></div>
          <div className="text-left">
            <p className="font-bold text-[15px] text-black">MDZ ✈ AEP • {isEs ? "Alerta Clima" : "Weather Alert"}</p>
            <p className="text-[13px] text-gray-500">{isEs ? "Zonda en destino, espere demoras" : "Winds at destination, expect delays"}</p>
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default function App() {
  const [language, setLanguage] = useState('es');
  const isEs = language === 'es';

  return (
    <div className="bg-white font-sans selection:bg-purple-200">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <div className="bg-[#05010D] flex flex-col items-center pt-48 px-8" style={{ marginTop: '-100px' }}>
        <h2 className="text-white text-[clamp(40px,5vw,72px)] font-bold text-center tracking-tight mb-8">
          {isEs ? (
            <>Todo lo que siempre quisiste saber<br />sobre tu vuelo—y más.</>
          ) : (
            <>Everything you’ve ever wanted to<br />know about your flight—and more.</>
          )}
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl text-center leading-relaxed mb-24">
          {isEs ?
            "OnTimeAI te mantiene informado haciendo un seguimiento de más información sobre tu vuelo que cualquier otra app; como las principales causas de retrasos." :
            "OnTimeAI keeps you informed by tracking more information about your flight than any other app—like the #1 and #2 biggest causes of delays."}
        </p>

        {/* Bento Grid Glowing Card replica */}
        <div className="w-full max-w-5xl rounded-[32px] p-[1px] bg-gradient-to-r from-purple-500/50 to-transparent">
          <div className="w-full bg-[#0a0a0a] rounded-[31px] p-12 min-h-[500px] relative overflow-hidden flex">
            <div className="w-1/2 z-10">
              <h3 className="text-white text-4xl font-bold tracking-tight mb-6">
                {isEs ? (
                  <>Descubre por qué te<br />has retrasado. ¡Por fin!</>
                ) : (
                  <>See why you're delayed.<br />Finally!</>
                )}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {isEs ?
                  "Las aerolíneas suelen mantener oculta la información de los retrasos hasta el último minuto. Nosotros no. Seguimos los aviones entrantes 25 horas antes de tu vuelo para poder predecir una nueva hora de salida." :
                  "Airlines often keep delay information under wraps until the last minute. We don't. We track inbound aircraft 25 hours before your flight so we can predict a new departure time long before."}
              </p>
            </div>

            {/* Floating inner mockup for the bento card */}
            <div className="absolute right-0 bottom-[-50px] w-[300px] h-[500px] border-4 border-dashed border-gray-800 rounded-3xl bg-[#111] flex flex-col items-center pt-8">
              <p className="text-gray-600 font-medium text-sm text-center px-4">Recorte de tu App<br />(Dashboard B2B.png)</p>
              {/* Fake glowing alert */}
              <div className="absolute top-1/2 left-[-100px] w-[400px] p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 to-red-500 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                <div className="bg-[#111] w-full h-full rounded-[22px] p-6 text-white text-left">
                  <strong className="text-pink-500 flex items-center gap-2">✨ {isEs ? "1h de Retraso Prevista" : "1h Delay Predicted"}</strong>
                  <p className="text-sm text-gray-300 mt-2">{isEs ? "Por avión tardío, en vuelo desde Nueva York." : "Due to late aircraft, in-air from New York."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Passport / Lanyard Component */}
        <div className="w-full h-screen relative mt-32 flex flex-col items-center">
          <h2 className="text-white text-5xl font-bold mb-8 z-10 relative">{isEs ? "Tu Pasaporte Interactivo" : "Your Interactive Passport"}</h2>
          <div className="absolute inset-0">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>

      </div>
    </div>
  );
}
