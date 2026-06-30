import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Perguntas Frequentes", href: "#faq" }
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card py-3 shadow-md border-b border-white/20 bg-oxum-bg/85"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo Name */}
        <a
          href="#inicio"
          className="font-display text-xl md:text-2xl font-bold tracking-tight text-oxum-charcoal hover:text-oxum-gold transition-colors duration-300"
        >
          Robson <span className="font-light italic text-oxum-gold">de Oxum</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-sans tracking-wide text-oxum-sepia/85 hover:text-oxum-gold transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="clay-button-primary px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
          >
            <MessageCircle size={14} className="fill-current" />
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-oxum-charcoal hover:text-oxum-gold transition-colors duration-200"
          aria-label="Alternar Menu de Navegação"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 shadow-lg border-b border-white/20 bg-oxum-bg/95 backdrop-blur-lg animate-fade-in py-6 px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-sans font-medium text-oxum-sepia/90 hover:text-oxum-gold transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="clay-button-primary w-full py-3 rounded-full text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <MessageCircle size={16} className="fill-current" />
              Agendar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
