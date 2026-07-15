import { Sparkles } from "lucide-react";

export function HarmonizacaoCorporalIntro() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-peach/30 via-paper to-paper relative overflow-hidden">
      {/* Soft gradient blur */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-rose/20 via-gold/15 to-transparent blur-3xl opacity-75 pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6 animate-reveal">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3 inline-flex items-center gap-2">
          <span className="h-px w-6 bg-gold" /> Beleza e Bem-estar <span className="h-px w-6 bg-gold" />
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl text-cocoa font-bold leading-[1.1] mb-6">
          ✨ Harmonização Corporal ✨
        </h1>
        
        <div className="w-20 h-px bg-gold/50 mx-auto my-6" />
        
        <p className="text-cocoa/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto font-display italic">
          "Conheça os tratamentos corporais mais procurados em uma clínica de estética avançada:"
        </p>

        <p className="text-ink/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Nossa abordagem une tecnologia médica de vanguarda, injetáveis de alta performance e protocolos clareadores específicos para desenhar as suas curvas, tratar a pele e resgatar sua total segurança com resultados elegantes e naturais.
        </p>
        
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#injetaveis"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cocoa border border-gold/40 hover:border-gold px-6 py-3 rounded-full hover:bg-gold/5 transition-all duration-300"
          >
            Injetáveis
          </a>
          <a
            href="#clareamentos"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cocoa border border-gold/40 hover:border-gold px-6 py-3 rounded-full hover:bg-gold/5 transition-all duration-300"
          >
            Clareamentos
          </a>
        </div>
      </div>
    </section>
  );
}
