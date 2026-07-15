import { ServiceLayout } from "./ServiceLayout";
import { BenefitGrid } from "./BenefitGrid";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { Target, ShieldCheck, Clock, Sparkles, Heart } from "lucide-react";

export function JatoDePlasmaSection() {
  return (
    <ServiceLayout
      id="jato-de-plasma"
      title="Jato de Plasma"
      subtitle="Para Remoção de Sinais"
      headerTags={["Tecnologia Avançada", "Precisão", "Segurança", "Resultados Visíveis"]}
      description="O Jato de Plasma promove a remoção segura e precisa de sinais, sem cortes e com mínima agressão à pele, estimulando a renovação natural."
      leftContent={
        <div>
          <h3 className="font-display text-3xl text-cocoa font-bold mb-8 uppercase tracking-widest">
            Como Funciona?
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="size-8 rounded-full bg-gold text-paper flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Emissão do Plasma</h4>
                <p className="text-ink/80 text-xs leading-relaxed">O equipamento emite uma microdescarga de plasma controlada.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-8 rounded-full bg-gold text-paper flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Ação Precisa</h4>
                <p className="text-ink/80 text-xs leading-relaxed">O plasma age diretamente sobre o sinal, promovendo a vaporização da lesão de forma precisa e segura.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-8 rounded-full bg-gold text-paper flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Regeneração</h4>
                <p className="text-ink/80 text-xs leading-relaxed">O organismo inicia o processo natural de cicatrização e renovação da pele.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-8 rounded-full bg-gold text-paper flex items-center justify-center font-bold text-sm shrink-0">4</div>
              <div>
                <h4 className="font-bold text-cocoa text-sm uppercase tracking-widest mb-1">Recuperação</h4>
                <p className="text-ink/80 text-xs leading-relaxed">Formação de uma pequena crostinha que cai naturalmente, revelando uma pele limpa e uniforme.</p>
              </div>
            </div>
          </div>
        </div>
      }
      rightContent={
        <div className="relative">
          <div className="w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-gold/20 shadow-2xl relative">
            <img 
              src="/images/sinal.jpg" 
              alt="Remoção de Sinais" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1512496015851-a1c8f1922c06?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-left-12 bg-paper p-6 rounded-full aspect-square flex flex-col items-center justify-center text-center shadow-2xl border-4 border-beige w-40 md:w-48 z-10">
            <Sparkles className="size-6 md:size-8 text-gold mb-2" />
            <span className="text-[9px] md:text-[10px] font-bold text-cocoa uppercase tracking-widest leading-relaxed">
              Sem Cortes<br/>Sem Pontos<br/>Recuperação<br/>Rápida
            </span>
          </div>
        </div>
      }
      bottomContent={
        <div className="space-y-12">
          <BeforeAfterGrid 
            items={[
              { title: "Remoção de Sinal no Rosto", beforeImg: "/images/jato_antes_1.png", afterImg: "/images/jato_depois_1.png" },
              { title: "Sinal na Região do Pescoço", beforeImg: "/images/jato_antes_2.png", afterImg: "/images/jato_depois_2.png" },
            ]}
          />
          <BenefitGrid 
            columns={5}
            benefits={[
              { icon: <Target />, title: "Remoção Precisa", description: "Elimina sinais com alta precisão, sem danificar a pele ao redor." },
              { icon: <ShieldCheck />, title: "Seguro e Eficaz", description: "Tecnologia avançada que garante um procedimento seguro." },
              { icon: <Clock />, title: "Recuperação Rápida", description: "Procedimento rápido e retorno às atividades em pouco tempo." },
              { icon: <Sparkles />, title: "Estimula a Renovação", description: "Ativa a produção de colágeno e melhora a textura e o aspecto da pele." },
              { icon: <Heart />, title: "Melhora da Autoestima", description: "Sinta-se bem com uma pele limpa, bonita e renovada." },
            ]} 
          />
          <div className="max-w-4xl mx-auto bg-peach/40 border border-gold/30 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm">
            <Heart className="size-6 text-gold shrink-0 mt-1" />
            <p className="text-cocoa/90 font-medium text-sm md:text-base leading-relaxed">
              Indicado para todos que desejam remover sinais de forma segura, eficaz e com resultados naturais, promovendo mais saúde, beleza e confiança.
            </p>
          </div>
          <div className="max-w-4xl mx-auto flex items-start gap-3 mt-4 px-4 text-cocoa/70">
             <div className="text-gold font-bold">!</div>
             <p className="text-[10px] uppercase tracking-wider leading-relaxed">
               Procedimento minimamente invasivo. Os resultados podem variar de acordo com cada organismo. Procure sempre um profissional habilitado.
             </p>
          </div>
        </div>
      }
    />
  );
}
