import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQ_DATA, WHATSAPP_LINK } from "../data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-oxum-bg relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-oxum-gold">
            Dúvidas Comuns
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxum-charcoal tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm text-oxum-sepia/75 font-light leading-relaxed">
            Esclarecimentos diretos sobre o funcionamento das orientações, formatos de atendimento e preparação.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                className="clay-card rounded-2xl overflow-hidden border border-white/45"
                initial={false}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 md:px-8 text-left flex justify-between items-center gap-4 transition-colors hover:bg-oxum-cream/20"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-bold text-oxum-charcoal leading-snug">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-oxum-gold shrink-0 p-1 rounded-full bg-oxum-cream"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 pt-1 text-left">
                        <p className="font-sans text-xs md:text-sm text-oxum-sepia/85 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Inline Help / CTA */}
        <div className="text-center pt-6 space-y-4">
          <p className="font-sans text-xs md:text-sm text-oxum-sepia/80 font-light">
            Ainda tem alguma dúvida específica? Fale diretamente comigo.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 clay-button-secondary px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <MessageCircle size={15} className="fill-current text-oxum-gold animate-pulse" />
            Tirar Dúvida no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
