import { ServiceLayout } from "./ServiceLayout";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { Droplet, Heart, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export function EstriasSection() {
  return (
    <ServiceLayout
      id="estrias"
      title="Tratamento de Estria"
      subtitle="Como Posso Cuidar de Você?"
      headerTags={["Pele mais uniforme, lisa e renovada"]}
      description="O tratamento de estria é um conjunto de técnicas e tecnologias que estimulam a regeneração da pele, aumentam a produção de colágeno e melhoram a elasticidade, reduzindo a aparência das estrias e devolvendo mais firmeza, textura e uniformidade à pele."
      leftContent={
        <div>
          <h3 className="font-display text-2xl text-cocoa font-bold mb-8 uppercase tracking-widest leading-tight">
            Como Funciona?
          </h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="size-6 rounded-full bg-gold text-paper flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Estimula o colágeno e a elastina:</h4>
                <p className="text-ink/80 text-xs leading-relaxed">ativa a regeneração celular e aumenta a produção de colágeno, melhorando a elasticidade e a firmeza da pele.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-6 rounded-full bg-gold text-paper flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Renovação da pele:</h4>
                <p className="text-ink/80 text-xs leading-relaxed">promove a renovação das camadas profundas da pele, suavizando as estrias brancas e avermelhadas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-6 rounded-full bg-gold text-paper flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Hidratação e nutrição profunda:</h4>
                <p className="text-ink/80 text-xs leading-relaxed">melhora a hidratação, a textura e a resistência da pele, deixando-a mais lisa, macia e uniforme.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-6 rounded-full bg-gold text-paper flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Resultados progressivos:</h4>
                <p className="text-ink/80 text-xs leading-relaxed">com sessões regulares e aliadas a uma rotina de cuidados, os resultados são visíveis, naturais e duradouros.</p>
              </div>
            </div>
          </div>
        </div>
      }
      rightContent={
        <BeforeAfterGrid 
          items={[
            { title: "Estrias Avermelhadas", beforeImg: "/images/estrias_antes_1.png", afterImg: "/images/estrias_depois_1.png" },
            { title: "Estrias nas Coxas", beforeImg: "/images/estrias_antes_1.png", afterImg: "/images/estrias_depois_1.png" },
          ]}
        />
      }
      bottomContent={
        <div className="space-y-12">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Droplet />
              </div>
              <p className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Redução visível<br/>das estrias</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <TrendingUp />
              </div>
              <p className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Estimula o colágeno<br/>e a elastina</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Sparkles />
              </div>
              <p className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Melhora da textura<br/>e da elasticidade</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Droplet />
              </div>
              <p className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Pele mais hidratada,<br/>macia e resistente</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Heart />
              </div>
              <p className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Mais autoestima<br/>e confiança</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <ShieldCheck />
              </div>
              <p className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Resultados naturais,<br/>visíveis e duradouros</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-peach/40 border border-gold/30 rounded-2xl p-6 md:p-8 flex items-center gap-6 shadow-sm">
            <div className="size-12 bg-gold rounded-full flex items-center justify-center shrink-0">
               <Heart className="text-paper size-6" />
            </div>
            <p className="text-cocoa/90 font-medium text-sm md:text-base leading-relaxed">
              O tratamento de estria é indicado para quem deseja reduzir a aparência das estrias, melhorar a qualidade da pele e conquistar mais confiança no dia a dia.
            </p>
          </div>
        </div>
      }
    />
  );
}
