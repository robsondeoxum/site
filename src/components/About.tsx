import React from "react";
import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Heart, MapPin } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Heart size={18} />,
      title: "Respeito e Acolhimento",
      description: "Nenhum julgamento. Cada consulta é guiada pela empatia e pela escuta sincera, oferecendo um porto seguro para suas questões mais íntimas."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Sigilo e Confidencialidade",
      description: "Suas preocupações, dúvidas e segredos são mantidos em absoluto sigilo. A discrição é a base inabalável de todo o nosso trabalho."
    },
    {
      icon: <Sparkles size={18} />,
      title: "Tradição Espiritual",
      description: "Respeito profundo aos fundamentos espirituais e sabedoria ancestral, traduzidos de maneira clara e aplicável aos seus desafios modernos."
    }
  ];

  return (
    <section id="sobre" className="py-24 px-6 bg-oxum-cream/30 relative overflow-hidden">
      <div className="aura" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Core text with strong typography */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-oxum-gold">
                Quem é Robson de Oxum
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-oxum-charcoal tracking-tight">
                Uma ponte entre a sabedoria ancestral e seus caminhos.
              </h2>
            </div>
            
            <p className="font-sans font-light text-base text-oxum-sepia/90 leading-relaxed">
              Trabalho guiado sob a energia de <strong>Oxum</strong>, o Orixá do amor, da prosperidade, do acolhimento e das águas doces. Minha missão é traduzir as mensagens e conselhos do plano espiritual para ajudar você a encontrar clareza, tomar decisões importantes e restabelecer o equilíbrio em sua jornada.
            </p>

            <p className="font-sans font-light text-base text-oxum-sepia/80 leading-relaxed">
              Seja em momentos de indecisão afetiva, desafios profissionais ou necessidade de reestruturação energética, o atendimento espiritual atua como um farol, iluminando os caminhos que antes pareciam confusos ou bloqueados.
            </p>

            {/* Location context tag */}
            <div className="inline-flex items-start gap-3 p-4 rounded-2xl bg-oxum-cream border border-oxum-champagne/45 w-full sm:w-auto">
              <MapPin className="text-oxum-gold shrink-0 mt-0.5 animate-bounce" size={20} />
              <div className="text-left text-sm font-sans">
                <span className="block font-bold text-oxum-charcoal">Atendimento Integrado</span>
                <span className="block text-oxum-sepia/80 leading-relaxed text-xs">
                  Presencial na cidade do Rio de Janeiro e On-line de forma segura para todo o Brasil e exterior.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: 1:1 Video Presentation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col items-center justify-center space-y-4"
          >
            <div className="w-full max-w-[320px] lg:max-w-full">
              <div className="clay-card p-3 rounded-[32px] shadow-xl aspect-square w-full relative">
                <iframe
                  className="w-full h-full rounded-[24px] border-0"
                  src="https://www.youtube.com/embed/B6oAPRdWmmE"
                  title="Robson de Oxum - Mensagem de Boas-vindas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center mt-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-oxum-gold font-sans">
                  Vídeo de Apresentação
                </span>
                <p className="text-xs font-sans text-oxum-sepia/75 mt-0.5">
                  Assista a uma mensagem de Robson
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Pillars cards (Claymorphism style) */}
          <div className="lg:col-span-4 flex flex-col space-y-5 justify-center">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="clay-card p-5 md:p-6 rounded-2xl flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-xl bg-oxum-cream text-oxum-gold shrink-0 shadow-inner">
                  {pillar.icon}
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="font-display text-base md:text-lg font-bold text-oxum-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="font-sans font-light text-xs text-oxum-sepia/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
