import { ShieldCheck, Sparkles, Activity } from "lucide-react";

export function VasinhosSection() {
  return (
    <section id="vasinhos" className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-10 z-10 order-2 lg:order-1">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-cocoa font-bold uppercase tracking-widest leading-tight mb-4">
              Adeus Aos <br />
              <span className="font-light">Vasinhos e Microvasinhos</span>
            </h2>
            <p className="font-display text-3xl md:text-4xl text-terracotta italic leading-snug">
              mais leveza, confiança e bem-estar para suas pernas!
            </p>
          </div>
          
          <p className="text-ink/80 text-sm leading-relaxed max-w-md">
            Tecnologias avançadas e protocolos personalizados para eliminar vasinhos e microvasinhos, melhorando a circulação e realçando a beleza natural da sua pele.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-terracotta mb-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path><path d="M12 8v4l3 3"></path></svg>
              </div>
              <span className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Redução de<br/>Vasinhos e<br/>Microvasinhos</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-terracotta mb-1">
                <Activity strokeWidth={1.5} className="size-8" />
              </div>
              <span className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Melhora da<br/>Circulação<br/>Sanguínea</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-terracotta mb-1">
                <ShieldCheck strokeWidth={1.5} className="size-8" />
              </div>
              <span className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Tecnologia<br/>Segura e<br/>Eficaz</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-terracotta mb-1">
                <Sparkles strokeWidth={1.5} className="size-8" />
              </div>
              <span className="text-[9px] font-bold text-cocoa uppercase tracking-wider">Pele Mais<br/>Lisa, Uniforme<br/>e Saudável</span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-6 border-t border-gold/15">
            <a
              href="#contato"
              className="bg-[#c2767c] hover:bg-[#a6575c] text-paper px-8 py-4 text-[10px] uppercase font-bold tracking-[0.2em] rounded-md transition-colors shadow-md flex items-center gap-2"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Agendar Avaliação
            </a>
            <span className="font-mono text-[9px] uppercase tracking-widest text-cocoa cursor-pointer hover:text-gold transition-colors">
              Conheça nossos tratamentos →
            </span>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-auto sm:h-[500px] lg:h-[700px] -mx-6 lg:mx-0 order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-r from-paper/0 via-paper/50 to-paper lg:hidden z-10 pointer-events-none" />
          <img 
            src="/images/real_legs_1.jpg" 
            alt="Pernas Lindas e Saudáveis" 
            className="w-full h-full object-cover object-left"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1599427187123-d34eecbb90d2?auto=format&fit=crop&q=80&w=800'; }}
          />

          <div className="absolute bottom-8 right-8 bg-paper/95 backdrop-blur-md p-6 rounded-2xl border border-gold/20 shadow-2xl max-w-[240px] z-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-terracotta">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h4 className="font-display text-sm text-terracotta font-bold uppercase tracking-wider leading-tight">Atendimento<br/>Especializado</h4>
            </div>
            <p className="text-[10px] text-cocoa leading-relaxed font-medium">
              Cuidamos de você com atenção, tecnologia e resultados reais para pernas mais bonitas e saudáveis!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
