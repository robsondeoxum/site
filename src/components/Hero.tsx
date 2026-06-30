import React from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { PORTRAIT_IMAGE_PATH, WHATSAPP_LINK } from "../data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 bg-radial from-oxum-cream via-oxum-bg to-oxum-bg overflow-hidden"
    >
      {/* Decorative subtle ambient lights */}
      <div className="aura" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#E7D3A3]/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Text Presentation Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oxum-cream border border-oxum-champagne/40 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-oxum-gold animate-pulse" />
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-oxum-bronze">
              Acolhimento e Orientação Espiritual
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-oxum-charcoal leading-tight tracking-tight"
          >
            Robson <span className="font-light italic text-oxum-gold">de Oxum</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-display text-xl md:text-2xl font-light text-oxum-sepia leading-relaxed max-w-xl"
          >
            Tradição, espiritualidade e orientação para os momentos mais importantes da sua vida.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-sm md:text-base text-oxum-sepia/80 leading-relaxed max-w-lg font-light"
          >
            Cada pessoa possui uma história, desafios e caminhos diferentes. Através da tradição espiritual, buscamos oferecer orientação, esclarecimento e acompanhamento para questões que envolvem a vida afetiva, profissional, financeira e espiritual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-button-primary px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-3 shadow-lg"
              aria-label="Agendar Consulta pelo WhatsApp"
            >
              <MessageCircle size={18} className="fill-current" />
              Agendar Consulta no WhatsApp
            </a>
            <a
              href="#atendimentos"
              className="clay-button-secondary px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
            >
              Conhecer Atendimentos
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        {/* Robson Portrait Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-72 h-[340px] sm:w-85 sm:h-[400px] md:w-96 md:h-[440px]"
          >
            {/* Soft decorative golden backdrop frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-oxum-champagne to-oxum-gold profile-container rotate-3 blur-md opacity-20" />
            
            {/* Dome-arch container matching Immersive UI styling precisely (rounded top, slightly rounded bottom) */}
            <div className="profile-container absolute inset-0 overflow-hidden bg-oxum-champagne border-8 border-white shadow-2xl flex items-center justify-center">
              <img
                src={PORTRAIT_IMAGE_PATH}
                alt="Portrait of Robson de Oxum"
                className="w-full h-full object-cover no-drag"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -right-2 glass-card rounded-2xl px-4 py-3 border border-white/40 flex items-center gap-2.5 shadow-lg max-w-xs">
              <div className="p-1.5 rounded-lg bg-oxum-cream text-oxum-gold">
                <span className="block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-semibold text-oxum-gold font-sans tracking-wider leading-none">
                  Atendimento Online
                </span>
                <span className="block text-xs font-sans font-bold text-oxum-charcoal">
                  Todo o Brasil & Exterior
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
