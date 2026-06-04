import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutMarble from "@/assets/about-marble.jpg";
import result1Before from "@/assets/result-1-before.jpg";
import result1After from "@/assets/result-1-after.jpg";
import result2Before from "@/assets/result-2-before.jpg";
import result2After from "@/assets/result-2-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jack Bernardo — Estética Avançada" },
      { name: "description", content: "Estética avançada com resultados naturais. Agende sua avaliação com Jack Bernardo." },
      { property: "og:title", content: "Jack Bernardo — Estética Avançada" },
      { property: "og:description", content: "Tratamentos personalizados que unem ciência e sofisticação para resultados naturais e duradouros." },
    ],
  }),
  component: Index,
});

const procedures = [
  { n: "01.", t: "Limpeza de Pele", d: "Desintoxicação profunda e renovação celular para um brilho imediato." },
  { n: "02.", t: "Peelings Químicos", d: "Tratamento de manchas e textura para uma pele uniforme e radiante." },
  { n: "03.", t: "Microagulhamento", d: "Indução de colágeno para redução de rugas e cicatrizes." },
  { n: "04.", t: "Harmonização Facial", d: "Equilíbrio e realce dos traços com sutileza e elegância." },
  { n: "05.", t: "Drenagem Linfática", d: "Redução de edemas e melhora da circulação com técnica exclusiva." },
  { n: "06.", t: "Radiofrequência", d: "Combate à flacidez com tecnologia de aquecimento profundo." },
];

const testimonials = [
  { q: "O cuidado e a atenção aos detalhes da Jack transformaram não apenas minha pele, mas minha autoestima. É um refúgio de bem-estar.", a: "Mariana S. — Arquiteta" },
  { q: "Resultados naturais, sem exageros. Saio de cada sessão sentindo-me a melhor versão de mim mesma.", a: "Carolina P. — Empresária" },
  { q: "Profissionalismo raro. A Jack entende exatamente o que cada rosto precisa.", a: "Beatriz L. — Advogada" },
];

function Index() {
  return (
    <div className="bg-paper text-ink font-sans selection:bg-rose/30">
      <Nav />

      {/* Hero */}
      <section id="home" className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 animate-reveal">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6 block">( Estética Avançada )</span>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-8">
              Revelando sua <br /><i className="font-light">beleza essencial</i>
            </h1>
            <p className="max-w-md text-ink/60 leading-relaxed mb-10 text-pretty">
              Tratamentos personalizados que unem ciência e sofisticação para resultados naturais e duradouros.
            </p>
            <a href="#contato" className="inline-block bg-ink text-paper px-10 py-5 text-[11px] uppercase tracking-[0.25em] hover:bg-gold transition-colors duration-500">
              Agende sua avaliação
            </a>
          </div>
          <div className="md:col-span-5 animate-reveal [animation-delay:200ms]">
            <img
              src={heroPortrait}
              alt="Jack Bernardo — profissional de estética avançada"
              width={1088}
              height={1344}
              className="w-full aspect-[4/5] object-cover bg-rose/20"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img
              src={aboutMarble}
              alt="Produtos de skincare em superfície de mármore"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover bg-paper"
            />
            <div className="absolute -bottom-12 -right-12 w-64 p-8 bg-paper border border-ink/5 hidden md:block">
              <p className="font-display italic text-2xl">"A estética é o equilíbrio entre saúde e arte."</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">Jack Bernardo</h2>
            <div className="space-y-6 text-ink/60 leading-relaxed">
              <p>Especialista em estética avançada com mais de uma década dedicada ao rejuvenescimento facial e corporal. Minha abordagem é guiada pela preservação da identidade de cada paciente.</p>
              <p>Cada protocolo nasce de uma escuta atenta — sua história, sua pele, seus desejos — e se traduz em resultados naturais que respeitam quem você é.</p>
              <ul className="font-mono text-[11px] space-y-3 pt-4 border-t border-ink/5">
                <li className="flex items-center gap-3"><span className="size-1 bg-gold rounded-full" /> Pós-graduada em Estética Avançada</li>
                <li className="flex items-center gap-3"><span className="size-1 bg-gold rounded-full" /> Especialista em Harmonização Natural</li>
                <li className="flex items-center gap-3"><span className="size-1 bg-gold rounded-full" /> Speaker em Congressos Internacionais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section id="procedimentos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-5xl">Procedimentos</h2>
            <span className="font-mono text-[10px] text-ink/60 mb-2 tracking-widest">01 // 06</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/5 border border-ink/5">
            {procedures.map((p) => (
              <div key={p.n} className="bg-paper p-10 hover:bg-rose/10 transition-colors group cursor-pointer">
                <span className="font-mono text-[10px] text-gold block mb-4">{p.n}</span>
                <h3 className="font-display text-2xl mb-4 group-hover:italic transition-all">{p.t}</h3>
                <p className="text-xs text-ink/60 leading-loose uppercase tracking-wider">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-32 bg-ink text-paper px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl mb-4">Transformações Reais</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Resultados com naturalidade</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-2">
                <img src={result1Before} alt="Antes do tratamento facial" width={800} height={800} loading="lazy" className="aspect-square object-cover bg-white/10" />
                <img src={result1After} alt="Depois do tratamento facial" width={800} height={800} loading="lazy" className="aspect-square object-cover bg-white/10" />
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-widest">Tratamento Facial</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">4 Sessões</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-2">
                <img src={result2Before} alt="Antes da harmonização" width={800} height={800} loading="lazy" className="aspect-square object-cover bg-white/10" />
                <img src={result2After} alt="Depois da harmonização" width={800} height={800} loading="lazy" className="aspect-square object-cover bg-white/10" />
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-widest">Harmonização Facial</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Protocolo Jack B.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex justify-center">
            <div className="flex gap-1">
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="size-1.5 rounded-full bg-gold" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <figure key={i} className="text-center md:text-left">
                <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed mb-6">
                  "{t.q}"
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-ink/60">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 bg-rose/5 border-t border-ink/5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-5xl md:text-6xl mb-12 italic">Agende seu <br />momento</h2>
            <div className="space-y-8 font-mono text-[11px] uppercase tracking-wider">
              <div>
                <p className="text-gold mb-2">Endereço</p>
                <p>Av. das Américas, 500 — Barra da Tijuca, RJ</p>
              </div>
              <div>
                <p className="text-gold mb-2">Social</p>
                <p>@jackbernardo.estetica</p>
              </div>
              <div>
                <p className="text-gold mb-2">Atendimento</p>
                <p>Seg — Sex: 09h às 19h</p>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome Completo" className="w-full bg-transparent border-b border-ink/10 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <input type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-ink/10 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <input type="tel" placeholder="Telefone / WhatsApp" className="w-full bg-transparent border-b border-ink/10 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <select defaultValue="" className="w-full bg-transparent border-b border-ink/10 py-4 text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
              <option value="" disabled>Selecione o procedimento</option>
              <option>Harmonização Facial</option>
              <option>Limpeza de Pele</option>
              <option>Peelings Químicos</option>
              <option>Microagulhamento</option>
              <option>Radiofrequência</option>
              <option>Drenagem Linfática</option>
            </select>
            <textarea placeholder="Mensagem (opcional)" rows={3} className="w-full bg-transparent border-b border-ink/10 py-4 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
            <button type="submit" className="w-full bg-ink text-paper py-5 text-[11px] uppercase tracking-[0.25em] hover:bg-gold transition-colors mt-8">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-ink/5 text-center">
        <p className="text-[10px] uppercase tracking-widest text-ink/60">© {new Date().getFullYear()} Jack Bernardo. Estética de Resultados.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
