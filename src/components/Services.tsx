import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Heart, TrendingUp, ShieldCheck, MessageCircle } from "lucide-react";
import { SERVICES_DATA, WHATSAPP_LINK } from "../data";

// Helper to match icon names to Lucide icons
const getIcon = (name: string) => {
  switch (name) {
    case "Compass":
      return <Compass className="stroke-[1.25]" size={28} />;
    case "Sparkles":
      return <Sparkles className="stroke-[1.25]" size={28} />;
    case "Heart":
      return <Heart className="stroke-[1.25]" size={28} />;
    case "TrendingUp":
      return <TrendingUp className="stroke-[1.25]" size={28} />;
    case "ShieldCheck":
      return <ShieldCheck className="stroke-[1.25]" size={28} />;
    default:
      return <Sparkles className="stroke-[1.25]" size={28} />;
  }
};

export default function Services() {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="atendimentos" className="py-24 px-6 bg-oxum-bg relative">
      {/* Decorative accent light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-oxum-champagne/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center space-y-16">
        {/* Section Title */}
        <div className="max-w-xl mx-auto space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-oxum-gold">
            Trabalhos Espirituais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-oxum-charcoal tracking-tight">
            Nossos Atendimentos
          </h2>
          <p className="font-sans text-sm md:text-base text-oxum-sepia/75 font-light leading-relaxed">
            Consulte os planos espirituais para obter direcionamento com respeito, sigilo e assertividade.
          </p>
        </div>

        {/* Services Grid (Claymorphism style) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-left"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="clay-card p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top gradient blur accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-oxum-champagne/10 blur-xl group-hover:bg-oxum-gold/15 transition-all duration-300" />

              <div className="space-y-6">
                {/* Thin outline Icon container with soft depth */}
                <div className="w-14 h-14 rounded-2xl bg-oxum-cream text-oxum-gold flex items-center justify-center shadow-inner border border-white/50 group-hover:text-oxum-bronze transition-colors duration-300">
                  {getIcon(service.iconName)}
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-oxum-charcoal">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-oxum-sepia/80 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action trigger for service */}
              <div className="mt-8 pt-4 border-t border-oxum-champagne/20 flex justify-between items-center">
                <span className="text-xs font-sans text-oxum-gold font-semibold uppercase tracking-wider">
                  Consulta Individual
                </span>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-oxum-charcoal hover:text-oxum-gold transition-colors"
                >
                  Saber mais
                  <MessageCircle size={14} className="fill-current text-oxum-gold" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA Banner inside Services */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="clay-card-deep max-w-4xl mx-auto p-8 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left"
        >
          <div className="md:col-span-8 space-y-2">
            <h4 className="font-display text-lg md:text-xl font-bold text-oxum-charcoal">
              Precisa de ajuda para escolher o atendimento ideal?
            </h4>
            <p className="font-sans text-xs md:text-sm text-oxum-sepia/85 font-light leading-relaxed">
              Fale diretamente comigo pelo WhatsApp. Posso orientar você sobre qual consulta (búzios ou cartas) se adequa melhor ao seu momento atual.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-button-primary px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <MessageCircle size={15} className="fill-current" />
              Orientação Rápida
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
