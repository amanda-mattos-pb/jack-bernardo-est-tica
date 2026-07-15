import { useTreatment } from "../../context/TreatmentContext";
import { Syringe, Sparkles, Droplet, Dumbbell, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export function InjetaveisCorporaisSection() {
  const { openTreatmentDetails } = useTreatment();

  const injectables = [
    {
      id: "preenchimento-de-gluteo",
      title: "Preenchimento de Glúteo (Harmonização Glútea)",
      subtitle: "Aumento de volume e contorno",
      desc: "Procedimento avançado com preenchedores de alta performance para aumentar volume, projetar o topo e corrigir depressões laterais.",
      icon: Heart,
      tags: ["Volumização", "Harmonização", "Sem Cirurgia"]
    },
    {
      id: "enzimas-gordura-localizada",
      title: "Enzimas para Gordura Localizada",
      subtitle: "Lipo enzimática sem cortes",
      desc: "Aplicação de mesoterapia lipolítica focada em quebrar e eliminar células de gordura na barriga, flancos e costas.",
      icon: Droplet,
      tags: ["Redução de Medidas", "Lipo Enzimática"]
    },
    {
      id: "enzimas-para-flacidez",
      title: "Enzimas para Flacidez",
      subtitle: "Firmeza e tônus imediato",
      desc: "Coquetel tensor injetável com DMAE e bioestimuladores que repara a flacidez em áreas como abdômen, braços e pernas.",
      icon: Sparkles,
      tags: ["Flacidez", "Estímulo de Colágeno"]
    },
    {
      id: "enzimas-para-celulite",
      title: "Enzimas para Celulite",
      subtitle: "Pele lisa e uniforme",
      desc: "Injetáveis venotônicos e lipolíticos que quebram as traves fibróticas (furinhos) e reduzem a inflamação local.",
      icon: Sparkles,
      tags: ["Celulite", "Drenagem Local"]
    },
    {
      id: "peim-vasinhos",
      title: "PEIM (Secagem de Vasinhos)",
      subtitle: "Pernas limpas e leves",
      desc: "Procedimento estético injetável com agulha ultrafina para fechar e eliminar microvasos vermelhos e roxos das pernas.",
      icon: ShieldCheck,
      tags: ["Vasinhos", "Pernas Bonitas"]
    },
    {
      id: "pernas-ganho-massa",
      title: "Ganho de Massa com Injetável",
      subtitle: "Hipertrofia acelerada",
      desc: "Coquetel intramuscular de aminoácidos e BCAAs que otimiza a síntese proteica e acelera a definição de coxas e panturrilhas.",
      icon: Dumbbell,
      tags: ["Hipertrofia", "Definição Muscular"]
    },
    {
      id: "plasma-gel",
      title: "Plasma Gel (Bioestimulador)",
      subtitle: "Poder autólogo natural",
      desc: "Preenchedor obtido do próprio sangue da paciente, processado em gel rico em plaquetas para volumização e regeneração segura.",
      icon: Syringe,
      tags: ["Autólogo", "100% Natural", "Segurança"]
    }
  ];

  return (
    <section id="injetaveis" className="py-24 bg-gradient-to-b from-paper to-peach/20 relative overflow-hidden border-t border-gold/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-bold mb-3 inline-block">
            💉 Injetáveis Corporais
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cocoa font-semibold mb-6">
            Harmonização e Contorno Avançado
          </h2>
          <p className="text-ink/80 text-base md:text-lg font-light leading-relaxed">
            Protocolos injetáveis de alta performance desenhados para modelar, firmar, volumizar e tratar queixas corporais específicas com o máximo de precisão e segurança.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {injectables.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => openTreatmentDetails(item.id)}
                className="group relative bg-paper hover:bg-paper/80 p-8 rounded-3xl border border-gold/15 hover:border-gold/40 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                <div>
                  {/* Icon & Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="size-12 rounded-2xl bg-peach/40 text-terracotta flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[70%]">
                      {item.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[9px] font-semibold bg-gold/10 text-gold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[10px] text-terracotta/70 font-mono uppercase tracking-widest block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display text-lg md:text-xl text-cocoa font-bold leading-tight group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-ink/75 text-xs md:text-[13px] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-terracotta group-hover:text-gold transition-colors">
                  <span className="text-[10px] uppercase font-bold tracking-widest">
                    Saiba mais sobre o protocolo
                  </span>
                  <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
