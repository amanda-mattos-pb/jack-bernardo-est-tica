import { ServiceLayout } from "./ServiceLayout";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { Droplet, ShieldCheck, Sparkles, Heart } from "lucide-react";

export function ClareamentosSection() {
  return (
    <ServiceLayout
      id="clareamentos"
      title="Clareamentos Estéticos"
      subtitle="Como Posso Cuidar de Você?"
      headerTags={["Uma Pele Mais Uniforme, Luminosa e Saudável"]}
      description="Os clareamentos estéticos são tratamentos que ajudam a uniformizar o tom da pele, reduzir manchas e áreas escurecidas, promovendo mais confiança, autoestima e bem-estar."
      leftContent={
        <div>
          <h3 className="font-display text-2xl text-cocoa font-bold mb-8 uppercase tracking-widest leading-tight">
            Quais áreas podem<br/>ser tratadas?
          </h3>
          <div className="space-y-5">
            {[
              { t: "Clareamento íntimo", d: "Uniformiza o tom da região íntima, reduzindo o escurecimento e devolvendo a autoestima." },
              { t: "Clareamento de axilas", d: "Reduz manchas e escurecimento causados por depilação, atrito e acúmulo de células mortas." },
              { t: "Clareamento de virilha", d: "Clareia e uniformiza a pele da virilha, reduzindo o escurecimento por atrito e depilação." },
              { t: "Clareamento de joelhos", d: "Suaviza o escurecimento da região dos joelhos, deixando a pele mais uniforme e iluminada." },
              { t: "Clareamento de cotovelos", d: "Reduz o aspecto escurecido dos cotovelos, deixando a pele mais macia e homogênea." },
              { t: "Clareamento de glúteos", d: "Uniformiza o tom da pele dos glúteos, reduzindo manchas e áreas escurecidas." },
              { t: "Clareamento de região interna das coxas", d: "Clareia a região interna das coxas, reduzindo o atrito, manchas e o escurecimento." },
              { t: "Clareamento pós-inflamatório", d: "Ameniza manchas deixadas por inflamações, acne, foliculite ou irritações na pele." },
              { t: "Tratamento para manchas corporais", d: "Reduz diversas manchas no corpo, como solares, hormonais e senis, deixando a pele mais uniforme e radiante." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="size-5 rounded-full bg-gold text-paper flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-cocoa text-[13px] uppercase tracking-wider mb-0.5">{item.t}</h4>
                  <p className="text-ink/80 text-[11px] leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      rightContent={
        <BeforeAfterGrid 
          items={[
            { title: "Tratamento de Melasma", beforeImg: "/images/clareamento_antes_1.png", afterImg: "/images/clareamento_depois_1.png" },
            { title: "Clareamento de Axilas", beforeImg: "/images/clareamento_antes_axila.jpg", afterImg: "/images/clareamento_depois_axila.jpg" },
          ]}
        />
      }
      bottomContent={
        <div className="space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Droplet />
              </div>
              <p className="text-[10px] font-bold text-cocoa uppercase tracking-wider">Redução de manchas<br/>e escurecimentos</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Heart />
              </div>
              <p className="text-[10px] font-bold text-cocoa uppercase tracking-wider">Mais autoestima,<br/>confiança e bem-estar</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <ShieldCheck />
              </div>
              <p className="text-[10px] font-bold text-cocoa uppercase tracking-wider">Pele mais saudável,<br/>lisa e hidratada</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Sparkles />
              </div>
              <p className="text-[10px] font-bold text-cocoa uppercase tracking-wider">Sensação de limpeza<br/>e leveza</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="size-14 flex items-center justify-center text-gold border border-gold/30 rounded-full mb-2">
                <Heart />
              </div>
              <p className="text-[10px] font-bold text-cocoa uppercase tracking-wider">Resultados visíveis,<br/>progressivos<br/>e duradouros</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-peach/40 border border-gold/30 rounded-2xl p-6 md:p-8 flex items-center gap-6 shadow-sm">
            <div className="size-12 bg-gold rounded-full flex items-center justify-center shrink-0">
               <Heart className="text-paper size-6" />
            </div>
            <p className="text-cocoa/90 font-medium text-sm md:text-base leading-relaxed">
              Os clareamentos estéticos são indicados para quem deseja uniformizar a pele, reduzir manchas e conquistar mais confiança em todos os detalhes do corpo.
            </p>
          </div>
        </div>
      }
    />
  );
}
