import React from "react";
import { MessageCircle, ShieldCheck, Mail, MapPin, Phone, Award } from "lucide-react";
import { WHATSAPP_LINK, PHONE_NUMBER } from "../data";

export default function Footer() {
  return (
    <footer className="bg-oxum-charcoal text-oxum-cream py-16 px-6 relative border-t border-oxum-champagne/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Brand Information Column */}
        <div className="md:col-span-5 space-y-4">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white">
            Robson <span className="font-light italic text-oxum-gold">de Oxum</span>
          </h3>
          <p className="font-sans text-xs md:text-sm text-oxum-cream/70 font-light leading-relaxed max-w-sm">
            Tradição espiritual, respeito, discrição e sigilo. Oferecendo aconselhamento e clareza por meio do Jogo de Búzios e da Cartomancia para que você tome as melhores decisões.
          </p>
          <div className="flex gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-sans text-oxum-gold bg-oxum-sepia/40 px-3 py-1.5 rounded-full border border-oxum-champagne/20">
              <ShieldCheck size={14} />
              <span>Atendimento 100% Sigiloso</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-sans text-oxum-gold bg-oxum-sepia/40 px-3 py-1.5 rounded-full border border-oxum-champagne/20">
              <Award size={14} />
              <span>Tradição & Respeito</span>
            </div>
          </div>
        </div>

        {/* Navigation Shortcuts Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display text-lg font-semibold text-oxum-gold tracking-wide">
            Acesso Rápido
          </h4>
          <ul className="space-y-2.5 text-sm font-sans">
            <li>
              <a href="#inicio" className="text-oxum-cream/75 hover:text-white transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="text-oxum-cream/75 hover:text-white transition-colors">
                Sobre Robson
              </a>
            </li>
            <li>
              <a href="#atendimentos" className="text-oxum-cream/75 hover:text-white transition-colors">
                Nossos Atendimentos
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="text-oxum-cream/75 hover:text-white transition-colors">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="text-oxum-cream/75 hover:text-white transition-colors">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#faq" className="text-oxum-cream/75 hover:text-white transition-colors">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Location Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-display text-lg font-semibold text-oxum-gold tracking-wide">
            Contato & Endereço
          </h4>
          <ul className="space-y-4 text-xs md:text-sm font-sans text-oxum-cream/80">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-oxum-gold shrink-0 mt-0.5" />
              <div className="text-left">
                <span className="block font-medium text-white">WhatsApp</span>
                <a href={WHATSAPP_LINK} className="hover:text-oxum-gold transition-colors font-light">
                  {PHONE_NUMBER}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-oxum-gold shrink-0 mt-0.5" />
              <div className="text-left">
                <span className="block font-medium text-white">Atendimento Presencial</span>
                <span className="font-light text-oxum-cream/70 leading-relaxed">
                  Rio de Janeiro - RJ <br />
                  (Com agendamento prévio)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-oxum-gold shrink-0 mt-0.5" />
              <div className="text-left">
                <span className="block font-medium text-white">Atendimento On-line</span>
                <span className="font-light text-oxum-cream/70">
                  Todo o Brasil e Exterior via Vídeo/Áudio
                </span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Underbar Copyright with SEO disclaimer */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-oxum-cream/10 text-center space-y-4 text-xs font-sans text-oxum-cream/50 font-light">
        <p>
          As consultas oferecidas fornecem aconselhamento de caráter espiritual e tradicional. Os resultados dependem da sintonia, fé e caminhada de cada consulente.
        </p>
        <p>
          &copy; Robson de Oxum. Todos os direitos reservados. Jogo de Búzios, Cartomancia e Amarrações Amorosas no Rio de Janeiro e On-line.
        </p>
      </div>
    </footer>
  );
}
