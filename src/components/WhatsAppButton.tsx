import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center justify-end">
      {/* Small hover invitation tooltip */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2"
        aria-label="Iniciar Conversa no WhatsApp"
      >
        <div className="hidden md:flex glass-card text-oxum-charcoal text-xs font-semibold px-4 py-2.5 rounded-full border border-white/40 shadow-md group-hover:scale-105 transition-transform">
          Agendar Consulta Online
        </div>
        
        {/* Floating Pulsating Icon Container */}
        <div className="relative">
          {/* Animated Wave Background */}
          <div className="absolute inset-0 bg-oxum-gold rounded-full scale-110 animate-ping opacity-25" />
          
          <div className="w-14 h-14 rounded-full bg-linear-to-tr from-oxum-champagne to-oxum-gold text-oxum-charcoal flex items-center justify-center shadow-lg border border-white/50 group-hover:scale-110 transition-transform duration-300">
            <MessageCircle size={26} className="fill-current text-oxum-charcoal" />
          </div>
          
          {/* Floating alert dot */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border border-white" />
        </div>
      </a>
    </div>
  );
}
