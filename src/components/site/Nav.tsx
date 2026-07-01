export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gold/15 bg-paper/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/images/logo.jpeg"
            alt="Jack Bernardo — Estética Avançada"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_4px_18px_rgba(201,168,108,0.45)] transition-transform duration-700 group-hover:scale-105"
          />
        </a>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a
            href="#procedimentos"
            onClick={() => window.dispatchEvent(new CustomEvent("change-tab", { detail: "facial" }))}
            className="hover:text-gold transition-colors"
          >
            Facial
          </a>
          <a
            href="#procedimentos"
            onClick={() => window.dispatchEvent(new CustomEvent("change-tab", { detail: "corporal" }))}
            className="hover:text-gold transition-colors"
          >
            Corporal
          </a>
          <a href="#resultados" className="hover:text-gold transition-colors">Resultados</a>
          <a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </div>
        <a
          href="#contato"
          className="relative text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-full bg-gradient-to-r from-gold via-[oklch(0.78_0.11_60)] to-gold text-paper hover:from-cocoa hover:to-cocoa transition-all shadow-lg shadow-gold/30 animate-pulse-glow"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
}