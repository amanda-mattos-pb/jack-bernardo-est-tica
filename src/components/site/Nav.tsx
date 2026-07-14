import { useState } from "react";
import { Menu, X, Compass, Phone } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Mais Procurados", href: "#mais-procurados" },
    { label: "Faciais", href: "#faciais" },
    { label: "Corporais", href: "#corporais" },
    { label: "Resultados", href: "#resultados" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gold/15 bg-paper/85 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/images/logo.jpeg"
            alt="Jack Bernardo — Estética Avançada"
            className="h-14 md:h-18 w-auto object-contain drop-shadow-[0_4px_12px_rgba(201,168,108,0.3)] mix-blend-multiply transition-transform duration-700 group-hover:scale-105 rounded-lg"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-medium text-cocoa/90">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gold transition-colors relative py-2 group/link"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contato"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] px-6 py-3.5 rounded-full bg-[#b8686d] text-paper shadow-lg shadow-rose/25 hover:shadow-cocoa/30 hover:scale-[1.02] transition-all"
          >
            <Phone className="size-3 fill-current" />
            <span>Agendar</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden text-cocoa hover:text-gold transition-colors p-2 cursor-pointer"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed top-24 left-0 w-full bg-paper/95 border-b border-gold/15 shadow-xl backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-8 py-10 flex flex-col gap-6 font-display text-xl text-cocoa/95">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gold hover:translate-x-2 transition-all duration-300 py-1 flex items-center gap-2 font-medium"
            >
              <span className="text-[10px] font-mono text-gold/60">✦</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="group relative overflow-hidden mt-4 inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] px-8 py-4.5 rounded-full bg-[#b8686d] text-paper shadow-lg shadow-rose/20 text-center w-full"
          >
            <Phone className="size-3.5 fill-current" />
            <span>Agendar Avaliação</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>
      </div>
    </nav>
  );
}