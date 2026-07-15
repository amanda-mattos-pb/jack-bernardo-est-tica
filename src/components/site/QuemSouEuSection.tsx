import { Target, Compass, Award } from "lucide-react";

export function QuemSouEuSection() {
  return (
    <section id="sobre" className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Seção Quem Sou Eu */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display text-6xl md:text-7xl text-cocoa font-semibold tracking-tight uppercase leading-none">
              Quem<br/>Sou Eu?
            </h2>
            <div className="space-y-4">
              <span className="block font-display text-4xl text-gold italic">Dra. Jaquelyne Bernardo</span>
            </div>
            
            <div className="space-y-4 text-ink/80 text-sm leading-relaxed">
              <p>Empresária a mais de 10 anos, dona da clínica Jack Bernardo estética avançada, pioneira no segmento de ozonioterapia em Recife - PE.</p>
              <p>Harmonização Corporal e Facial com Method Harmony, Autoridade em Ciências da Estética Internacional - Euroscience Portugal.</p>
              <p>Atuando com maestria e resultado, elevando a autoestima de mais de 10 mil clientes. Especialista em marketing pessoal de clínicas na área de saúde.</p>
              <p>Já foi monitora de diversos cursos profissionalizantes renomados de caneta pressuriza e residente em ozonioterapia. Especialista em gordura localizada, flacidez e harmonização de glúteo.</p>
            </div>

            {/* Badge Especialista em Glúteo */}
            <div className="bg-peach/30 border border-gold/30 rounded-3xl p-8 shadow-sm">
              <div className="text-center mb-6">
                 <span className="font-mono text-[10px] text-cocoa uppercase tracking-widest font-bold">Especialista em</span>
                 <h3 className="font-display text-5xl text-cocoa font-bold my-2 tracking-wide">GLÚTEO</h3>
                 <span className="font-display text-2xl text-gold italic">Referência em resultados</span>
              </div>
              <div className="text-center font-mono text-[9px] uppercase tracking-widest text-ink/70 border-b border-t border-gold/20 py-2 mb-6">
                Harmonia • Proporção • Contouring • Firmeza<br/>Resultados naturais e personalizados
              </div>
              <ul className="space-y-3 font-mono text-[10px] text-cocoa font-medium uppercase tracking-wider">
                <li className="flex items-center gap-3"><span className="text-gold">✦</span> Biomédica</li>
                <li className="flex items-center gap-3"><span className="text-gold">✦</span> Esteticista</li>
                <li className="flex items-center gap-3"><span className="text-gold">✦</span> Publicidade e propaganda</li>
                <li className="flex items-center gap-3"><span className="text-gold">✦</span> Residente em Ozonioterapia</li>
                <li className="flex items-center gap-3"><span className="text-gold">✦</span> Pós-graduada em harmonização em injetáveis facial e corporal</li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">✦</span> 
                  <span className="leading-snug">Harmonização Corporal e Facial com Method Harmony, Autoridade em Ciências da Estética Internacional - Euroscience Portugal.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-full lg:min-h-[600px] rounded-[3rem] overflow-hidden border-4 border-beige shadow-2xl">
            <img 
              src="/images/jack-about.jpeg" 
              alt="Dra. Jaquelyne Bernardo" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        </div>

        {/* Missão Visão Valores */}
        <div className="grid lg:grid-cols-12 gap-16 items-center bg-peach/10 rounded-[3rem] p-8 md:p-16 border border-gold/15">
          <div className="lg:col-span-6 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                  <Target className="size-6" />
                </div>
                <h3 className="font-display text-4xl text-cocoa font-bold uppercase tracking-wider">Missão</h3>
              </div>
              <p className="text-ink/80 text-sm leading-relaxed">
                Promover transformações e não serviços! Que meus clientes se sintam amparados nos três pilares de atendimento: <strong>Corpo, mente e auto-estima</strong>. Levando consequentemente a melhora da saúde, preço pelos meus atendimentos e acredito que junto com o cliente possamos alinhar metas a fim de obter um excelente resultado.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                  <Compass className="size-6" />
                </div>
                <h3 className="font-display text-4xl text-cocoa font-bold uppercase tracking-wider">Visão</h3>
              </div>
              <p className="text-ink/80 text-sm leading-relaxed">
                Construir um legado e me tornar uma referência em tratamentos na estética em toda a região e sempre buscando, a cada dia, capacitar-me e conquistar mais pessoas a fim de promover a minha missão respeitando a fisiologia e a bioquímica de cada cliente.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                  <Award className="size-6" />
                </div>
                <h3 className="font-display text-4xl text-cocoa font-bold uppercase tracking-wider">Valores</h3>
              </div>
              <p className="text-ink/80 text-sm leading-relaxed">
                Estão pautados na solidariedade, amor, ética, profissionalismo, comprometimento, transparência e respeito.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-auto sm:h-[450px] lg:h-full lg:min-h-[500px] rounded-[2.5rem] overflow-hidden border border-gold/20 shadow-xl">
             <img 
              src="/images/jack-portrait.jpeg" 
              alt="Dra. Jaquelyne Bernardo - Missão e Visão" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
