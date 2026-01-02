
"use client";

import { motion } from "framer-motion";
import { Music, Play, Calendar, Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

const AudioBars = () => (
  <div className="flex items-end gap-1 h-8 absolute bottom-4 right-4 md:right-0 opacity-70">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1.5 bg-accent"
        animate={{ height: [10, 32, 16, 24, 8, 32] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.1,
          repeatType: "mirror"
        }}
      />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white overflow-x-hidden bg-[#050505]">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
            <a key={item} href={`#${item.toLowerCase()} `} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <a href="https://www.instagram.com/josue_caballerosdj/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Instagram size={18} /></a>
          <a href="https://wa.me/50230523295" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors tracking-wide">
            CONTACTO
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-24 px-4 pb-12 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background Image behind text */}
        <div className="absolute top-0 right-0 w-full h-[60vh] md:h-full md:w-[60%] z-0 pointer-events-none opacity-40 mix-blend-lighten mask-image-gradient">
          <Image
            src="/dj-hero-2.jpg"
            alt="DJ Background"
            fill
            className="object-cover object-center translate-x-20 md:translate-x-0"
            style={{ maskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold mb-6 tracking-wide backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              LIVE 2026
            </div>

            <h1 className="text-[clamp(3.5rem,15vw,7rem)] font-black mb-6 leading-[0.9] tracking-tighter mix-blend-overlay md:mix-blend-normal">
              BEYOND<br />THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">SOUND.</span>
            </h1>

            <p className="text-sm md:text-xl text-zinc-300 max-w-sm lg:max-w-lg mb-8 leading-relaxed shadow-black drop-shadow-md">
              Elevando cada experiencia nocturna con mezclas únicas.
              El sonido que define tu momento.
            </p>

            <div className="flex flex-col w-full max-w-xs gap-3">
              <button className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]">
                <Play size={18} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
                ESCUCHAR SET
              </button>
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm">
                <Calendar size={18} />
                VER CALENDARIO
              </button>
            </div>
          </motion.div>

          {/* Visual Element / Profile Card (Optional - kept for additional content or can be removed if user wants only bg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-xs lg:max-w-none mx-auto hidden lg:block"
          >
            {/* We can hide this card since we have a bg image now, OR keep it as a secondary element. 
                 Decision: Keep it as a "Featured Event" card but smaller or moved. 
                 Actually, let's keep it but make it minimal so it doesn't fight the background. 
                 OR - Let's remove the big card and replace with a minimal cool music player/visualizer widget.
             */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all" />
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">NOW PLAYING</div>
                  <div className="text-2xl font-bold">Deep House Vibes</div>
                  <div className="text-zinc-400 text-sm">Live from Ibiza</div>
                </div>
                <AudioBars />
              </div>

              <div className="flex items-center gap-4 mt-8">
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                  <Play fill="black" className="ml-1" />
                </button>
                <div className="h-1 bg-white/10 flex-1 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-accent" />
                </div>
                <div className="text-xs font-mono text-zinc-400">04:20</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-12 border-t border-white/5 bg-white/[0.02] relative z-10 backdrop-blur-sm">
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

