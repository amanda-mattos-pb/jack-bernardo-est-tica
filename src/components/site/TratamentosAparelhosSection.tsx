import { useTreatment } from "../../context/TreatmentContext";
import { Zap, Sparkles, Flame, Shield, Compass, Heart, ArrowRight } from "lucide-react";

export function TratamentosAparelhosSection() {
  const { openTreatmentDetails } = useTreatment();

  const aparelhos = [
    { id: "endolaser-corporal", title: "Endolaser", desc: "Laser subdérmico de fibra óptica para queima de gordura e retração extrema de pele.", icon: Flame },
    { id: "criolipolise-de-placas", title: "Criolipólise", desc: "Eliminação definitiva de até 30% da gordura localizada através de resfriamento controlado.", icon: Shield },
    { id: "ultrassom-cavitacional", title: "Ultrassom Cavitacional", desc: "Ondas de alta frequência que destroem as células de gordura por cavitação.", icon: Zap },
    { id: "radiofrequencia-corporal", title: "Radiofrequência", desc: "Aquecimento controlado que estimula colágeno, tratando flacidez e celulite.", icon: Sparkles },
    { id: "corrente-russa", title: "Corrente Russa", desc: "Eletroestimulação muscular profunda para tonificação, força e contorno.", icon: Zap },
    { id: "vacoterapia", title: "Vacuumterapia", desc: "Sucção profunda por pressão negativa que ativa a circulação e combate celulite.", icon: Compass },
    { id: "ultrassom-cavitacional", title: "Lipocavitação", desc: "Famosa 'lipo sem cortes' que reduz medidas de gordura localizada de forma indolor.", icon: Flame },
    { id: "vacoterapia", title: "Drenagem Mecânica", desc: "Endermoterapia com roletes mecânicos para eliminação de toxinas e líquidos.", icon: Compass },
    { id: "eletrolipolise", title: "Eletrolipólise", desc: "Uso de agulhas e microcorrentes elétricas para quebrar e queimar gordura local.", icon: Zap },
    { id: "ozonioterapia", title: "Ozonioterapia", desc: "Aplicação de ozônio medicinal para oxigenação, quebra de gordura e regeneração.", icon: Heart },
    { id: "criofrequencia", title: "Criofrequência", desc: "Combinação de frio na superfície e calor profundo para combater flacidez e gordura.", icon: Shield },
    { id: "plataforma-vibratoria", title: "Plataforma Vibratória", desc: "Estímulos vibratórios que aumentam o tônus muscular e ativam a circulação.", icon: Zap },
    { id: "ledterapia-corporal", title: "LEDterapia Corporal", desc: "Luzes terapêuticas para bioestimular células, clarear e acalmar a pele.", icon: Sparkles },
    { id: "tratamento-fibroses", title: "Tratamento para Fibroses", desc: "Protocolo especializado com aparelhos para suavizar aderências pós-cirúrgicas.", icon: Shield },
    { id: "enzimas-para-celulite", title: "Tratamento para Celulite", desc: "Associação de tecnologias para restaurar a circulação e alisar a pele.", icon: Heart },
    { id: "enzimas-para-flacidez", title: "Tratamento para Flacidez Corporal", desc: "Protocolo tensor que estimula novas fibras de colágeno e sustentação.", icon: Sparkles },
    { id: "tratamento-de-papada", title: "Tratamento para Papada", desc: "Eliminação da gordura submentoniana e definição do contorno da mandíbula.", icon: Shield },
    { id: "remodelacao-corporal", title: "Remodelação Corporal", desc: "Protocolo associativo com múltiplos aparelhos para redefinir as curvas.", icon: Compass },
    { id: "tratamento-estrias", title: "Tratamento de Estrias", desc: "Protocolo completo com tecnologia para regeneração de estrias brancas e vermelhas.", icon: Sparkles }
  ];

  return (
    <section id="aparelhos" className="py-24 bg-paper relative overflow-hidden border-t border-gold/10">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-bold mb-3 inline-block">
            ⚡ Tratamentos com Aparelhos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cocoa font-semibold mb-6">
            Tecnologia de Ponta para Resultados Reais
          </h2>
          <p className="text-ink/80 text-base md:text-lg font-light leading-relaxed">
            Equipamentos de alta tecnologia que agem nas camadas mais profundas do tecido para gordura, celulite, flacidez e definição muscular.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aparelhos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => openTreatmentDetails(item.id)}
                className="group relative bg-peach/10 hover:bg-peach/25 p-6 rounded-2xl border border-gold/10 hover:border-gold/30 shadow-sm transition-all duration-300 cursor-pointer flex gap-4 items-start"
              >
                <div className="size-10 rounded-xl bg-paper text-terracotta flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="font-display text-[15px] md:text-base text-cocoa font-bold leading-tight group-hover:text-gold transition-colors flex items-center gap-1.5">
                    {item.title}
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all text-gold" />
                  </h3>
                  <p className="text-ink/80 text-[11px] md:text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
