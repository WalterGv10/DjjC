"use client";

import { motion } from "framer-motion";
import { Music, Play, Calendar, Instagram, Facebook, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] rounded-full bg-accent/15 blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[60%] rounded-full bg-accent-secondary/15 blur-[60px] md:blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 flex items-center justify-between backdrop-blur-md bg-black/10 border-b border-white/5 h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-2xl font-bold tracking-tighter shrink-0"
        >
          DJ <span className="text-accent underline decoration-accent/40 decoration-4 underline-offset-4">JOSUE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400"
        >
          {["Inicio", "Sets", "Eventos", "Booking"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Instagram size={18} /></a>
          <a href="#" className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors tracking-wide">
            CONTACTO
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-24 px-4 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold mb-6 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              LIVE 2026
            </div>

            <h1 className="text-[clamp(3.5rem,15vw,6rem)] font-black mb-6 leading-[0.9] tracking-tighter">
              BEYOND<br />THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">SOUND.</span>
            </h1>

            <p className="text-sm md:text-xl text-zinc-400 max-w-sm lg:max-w-lg mb-8 leading-relaxed">
              Elevando cada experiencia nocturna con mezclas únicas.
              El sonido que define tu momento.
            </p>

            <div className="flex flex-col w-full max-w-xs gap-3">
              <button className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]">
                <Play size={18} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
                ESCUCHAR SET
              </button>
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                <Calendar size={18} />
                VER CALENDARIO
              </button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-xs lg:max-w-none mx-auto"
          >
            <div className="aspect-[3/4] relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Music className="text-white w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Próximo Evento</div>
                    <div className="text-xs text-zinc-300 truncate">Neon Nights @ City</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-y-8 gap-x-4 px-4 text-center">
          {[
            { label: "SHOWS", val: "500+" },
            { label: "FANS", val: "50K" },
            { label: "AÑOS", val: "8+" },
            { label: "PAÍSES", val: "12" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.val}</div>
              <div className="text-[10px] font-bold text-accent tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

