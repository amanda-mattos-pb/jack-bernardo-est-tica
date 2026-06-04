import logo from "@/assets/logo.jpeg.asset.json";

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo.url} alt="Jack Bernardo — Estética Avançada" className="h-12 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#procedimentos" className="hover:text-gold transition-colors">Procedimentos</a>
          <a href="#resultados" className="hover:text-gold transition-colors">Resultados</a>
          <a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </div>
        <a href="#contato" className="text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 border border-ink/10 hover:border-gold hover:text-gold transition-all">Agendar</a>
      </div>
    </nav>
  );
}