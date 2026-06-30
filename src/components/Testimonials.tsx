import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-oxum-cream/25 relative overflow-hidden">
      {/* Decorative accent light */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-oxum-champagne/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-oxum-gold">
            Relatos Reais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxum-charcoal tracking-tight">
            Depoimentos de Consulentes
          </h2>
          <p className="font-sans text-sm text-oxum-sepia/75 font-light leading-relaxed">
            A satisfação, paz e discernimento de quem já realizou uma consulta espiritual com Robson de Oxum.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="clay-card p-8 rounded-3xl flex flex-col justify-between relative group hover:shadow-xl transition-shadow"
            >
              {/* Star Rating & Quote Mark */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1 text-oxum-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current text-oxum-gold" />
                  ))}
                </div>
                <div className="text-oxum-champagne group-hover:text-oxum-gold transition-colors">
                  <Quote size={28} className="stroke-[1.2] opacity-60" />
                </div>
              </div>

              {/* Testimonial Core Text */}
              <p className="font-sans text-xs md:text-sm text-oxum-sepia/90 leading-relaxed font-light italic mb-8 grow">
                "{item.text}"
              </p>

              {/* Author Footer */}
              <div className="pt-4 border-t border-oxum-champagne/15 flex justify-between items-center text-xs">
                <div>
                  <span className="block font-sans font-bold text-oxum-charcoal">
                    {item.name}
                  </span>
                  <span className="block font-sans text-[10px] text-oxum-sepia/60">
                    {item.location}
                  </span>
                </div>
                <span className="font-sans text-[10px] text-oxum-gold font-medium">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
