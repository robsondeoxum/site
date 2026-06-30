import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Calendar, Compass, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare size={20} />,
      title: "Contato Inicial",
      description: "Clique em um dos botões do site para me mandar uma mensagem no WhatsApp. Esclareço suas dúvidas iniciais sobre as consultas."
    },
    {
      number: "02",
      icon: <Calendar size={20} />,
      title: "Agendamento",
      description: "Escolha se prefere o atendimento on-line (chamada de vídeo/áudio) ou presencial no Rio de Janeiro. Definimos o melhor dia e horário."
    },
    {
      number: "03",
      icon: <Compass size={20} />,
      title: "A Orientação",
      description: "No momento agendado, realizamos a leitura (búzios ou cartas) com foco total em suas perguntas, trazendo caminhos claros e conselhos espirituais."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-oxum-cream/20 relative">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        {/* Section Header */}
        <div className="max-w-xl mx-auto space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-oxum-gold">
            Passo a Passo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-oxum-charcoal tracking-tight">
            Como Funciona o Atendimento?
          </h2>
          <p className="font-sans text-sm md:text-base text-oxum-sepia/75 font-light leading-relaxed">
            Um processo simples, transparente e focado no seu conforto, segurança e privacidade absoluta.
          </p>
        </div>

        {/* Steps List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-oxum-champagne/10 via-oxum-gold/30 to-oxum-champagne/10 -translate-y-1/2 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="clay-card p-8 rounded-3xl text-left relative flex flex-col justify-between group h-full"
            >
              <div className="space-y-6">
                {/* Number & Icon header */}
                <div className="flex justify-between items-center">
                  <span className="font-display text-3xl font-extrabold text-oxum-gold/25 group-hover:text-oxum-gold/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-oxum-cream text-oxum-gold flex items-center justify-center border border-white/50 shadow-inner">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-oxum-charcoal">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-oxum-sepia/85 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidence statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs md:text-sm text-oxum-sepia/70 max-w-md mx-auto"
        >
          <ShieldCheck size={16} className="text-oxum-gold shrink-0" />
          <span>Suas informações e caídas de búzios estão protegidas por absoluto sigilo.</span>
        </motion.div>
      </div>
    </section>
  );
}
