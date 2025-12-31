"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Calendar, Instagram, Play, Menu, X, Disc, Globe } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-glass rounded-full px-6 py-3 md:px-8 md:py-4 border border-white/5 backdrop-blur-md">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-black tracking-tighter glow-primary z-50"
          >
            DJ JOSUÉ
          </motion.h1>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Music</a>
            <a href="#" className="hover:text-primary transition-colors">Biography</a>
            <a href="#" className="hover:text-primary transition-colors">Events</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-background px-6 py-2 rounded-full font-bold text-sm tracking-tighter"
          >
            BOOK NOW
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-glass border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl backdrop-blur-xl z-40"
            >
              <a href="#" className="text-lg font-bold hover:text-primary transition-colors border-b border-white/5 pb-2">Music</a>
              <a href="#" className="text-lg font-bold hover:text-primary transition-colors border-b border-white/5 pb-2">Biography</a>
              <a href="#" className="text-lg font-bold hover:text-primary transition-colors border-b border-white/5 pb-2">Events</a>
              <button className="bg-primary text-background w-full py-3 rounded-xl font-bold text-sm tracking-tighter mt-2">
                BOOK NOW
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm md:max-w-4xl aspect-[4/5] md:aspect-[21/9] rounded-3xl overflow-hidden mb-8 md:mb-12 border border-white/10 group shadow-2xl"
        >
          <Image
            src="/hero.png"
            alt="DJ Josué performing"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 md:opacity-100" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 text-background rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              <Play className="ml-1 fill-current w-6 h-6 md:w-8 md:h-8" />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-primary font-bold tracking-[0.2em] mb-3 text-[10px] md:text-sm uppercase flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> GUATEMALA
          <span className="w-1 h-1 rounded-full bg-white/20" /> TECHNO
          <span className="w-1 h-1 rounded-full bg-white/20" /> MINIMAL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[0.9]"
        >
          ELEVATING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">UNDERGROUND</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-foreground/50 text-sm md:text-lg mb-8 md:mb-12 font-medium px-4"
        >
          Crafting immersive sonic journeys through the heartbeat of the modern warehouse.
          DJ Josué blends industrial textures with hypnotic rhythms.
        </motion.p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-16 px-4 sm:px-0">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all text-sm md:text-base shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Music size={20} /> LISTEN LATEST SET
          </button>
          <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-sm md:text-base">
            <Calendar size={20} /> TOUR DATES
          </button>
        </div>

        {/* Floating Social Icons Mobile Optimized */}
        <div className="flex gap-8 mt-4 opacity-60 hover:opacity-100 transition-opacity items-center">
          <Instagram className="cursor-pointer hover:text-primary w-5 h-5 md:w-6 md:h-6" />
          <div className="w-[1px] h-4 bg-white/20" />
          <Disc className="cursor-pointer hover:text-primary w-5 h-5 md:w-6 md:h-6" />
          <div className="w-[1px] h-4 bg-white/20" />
          <Globe className="cursor-pointer hover:text-primary w-5 h-5 md:w-6 md:h-6" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/5 border-y border-white/5 py-8 md:py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {[
            { label: "LISTENERS", value: "50K+" },
            { label: "SHOWS", value: "200+" },
            { label: "YEARS", value: "12" },
            { label: "COUNTRIES", value: "15" }
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-2xl md:text-3xl font-black mb-1 glow-primary group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-[10px] text-foreground/40 font-bold tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
