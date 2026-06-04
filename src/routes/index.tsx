import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import heroPortrait from "@/assets/jack-portrait.jpeg.asset.json";
import aboutImg from "@/assets/jack-about.jpeg.asset.json";
import resultLabial from "@/assets/antes-depois-labial.jpeg.asset.json";
import resultPerna from "@/assets/antes-depois-perna.jpeg.asset.json";
import logo from "@/assets/logo.jpeg.asset.json";

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
  { n: "01.", t: "Preenchimento Labial", d: "Mais volume, contorno definido e harmonia para lábios naturalmente mais bonitos." },
  { n: "02.", t: "Definição de Perna", d: "Pernas mais firmes, torneadas e com contornos definidos." },
  { n: "03.", t: "Harmonização Facial", d: "Equilíbrio e realce dos traços com sutileza e elegância." },
  { n: "04.", t: "Limpeza de Pele", d: "Desintoxicação profunda e renovação celular para um brilho imediato." },
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
    <div className="bg-peach/40 text-ink font-sans selection:bg-rose/40">
      <Nav />

      {/* Hero */}
      <section id="home" className="relative pt-40 pb-28 px-6 bg-gradient-to-b from-peach/60 via-paper to-paper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 animate-reveal">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6 block">— Estética Avançada</span>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8 text-cocoa">
              Cuidado que <br /><i className="font-light text-gold">transforma</i>
            </h1>
            <p className="max-w-md text-ink/70 leading-relaxed mb-10 text-pretty text-lg">
              Estética avançada com olhar individualizado para você. Tratamentos personalizados que valorizam a sua beleza natural.
            </p>
            <a href="#contato" className="inline-block bg-gold text-paper px-10 py-5 text-[11px] uppercase tracking-[0.25em] rounded-full shadow-lg shadow-gold/30 hover:bg-cocoa hover:shadow-cocoa/30 transition-all duration-500">
              Quero agendar
            </a>
          </div>
          <div className="md:col-span-5 animate-reveal [animation-delay:200ms]">
            <img
              src={heroPortrait.url}
              alt="Jack Bernardo — profissional de estética avançada"
              width={1088}
              height={1344}
              className="w-full aspect-[4/5] object-cover object-top bg-rose/30 rounded-[2rem] shadow-2xl shadow-cocoa/20"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img
              src={aboutImg.url}
              alt="Jack Bernardo em ambiente sofisticado"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover bg-peach rounded-[2rem] shadow-xl shadow-cocoa/15"
            />
            <div className="absolute -bottom-10 -right-10 w-72 p-8 bg-peach rounded-3xl shadow-xl shadow-cocoa/10 hidden md:block">
              <p className="font-display italic text-2xl text-cocoa">"Realçar o que já é único em você."</p>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">— Sobre mim</span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-cocoa">Jack Bernardo</h2>
            <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
              <p>Especialista em estética avançada com mais de uma década dedicada ao rejuvenescimento facial e corporal. Minha abordagem é guiada pela preservação da identidade de cada paciente.</p>
              <p>Cada protocolo nasce de uma escuta atenta — sua história, sua pele, seus desejos — e se traduz em resultados naturais que respeitam quem você é.</p>
              <ul className="font-mono text-[11px] space-y-3 pt-6 border-t border-gold/20">
                <li className="flex items-center gap-3"><span className="size-1.5 bg-gold rounded-full" /> Pós-graduada em Estética Avançada</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-gold rounded-full" /> Especialista em Harmonização Natural</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-gold rounded-full" /> Speaker em Congressos Internacionais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section id="procedimentos" className="py-32 px-6 bg-peach/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">— O que ofereço</span>
            <h2 className="font-display text-5xl md:text-6xl text-cocoa">Procedimentos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {procedures.map((p) => (
              <div key={p.n} className="bg-paper p-10 rounded-3xl shadow-md shadow-cocoa/5 hover:shadow-xl hover:shadow-gold/15 hover:-translate-y-1 transition-all duration-500 group cursor-pointer border border-gold/10">
                <span className="font-mono text-[10px] text-gold block mb-4">{p.n}</span>
                <h3 className="font-display text-3xl mb-4 text-cocoa group-hover:italic transition-all">{p.t}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-32 bg-cocoa text-paper px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">— Antes & depois</span>
            <h2 className="font-display text-5xl md:text-6xl mb-4">Resultados que falam por si</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 bg-paper/5 p-6 rounded-3xl">
              <img src={resultLabial.url} alt="Antes e depois — Preenchimento Labial" loading="lazy" className="w-full object-contain bg-white/5 rounded-2xl" />
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-widest">Preenchimento Labial</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Resultado Imediato</span>
              </div>
            </div>
            <div className="space-y-6 bg-paper/5 p-6 rounded-3xl">
              <img src={resultPerna.url} alt="Antes e depois — Definição de Perna" loading="lazy" className="w-full object-contain bg-white/5 rounded-2xl" />
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-widest">Definição de Perna</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Protocolo Jack B.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 px-6 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">— Depoimentos</span>
            <h2 className="font-display text-5xl md:text-6xl text-cocoa">O que minhas pacientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-peach/40 p-10 rounded-3xl shadow-md shadow-cocoa/5 border border-gold/10">
                <div className="flex gap-1 text-gold mb-6 text-sm">★★★★★</div>
                <blockquote className="font-display text-xl italic leading-relaxed mb-6 text-cocoa">
                  "{t.q}"
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-ink/60">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 bg-gradient-to-b from-peach/60 to-rose/30 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">— Vamos conversar</span>
            <h2 className="font-display text-5xl md:text-6xl mb-12 text-cocoa">Agende sua <br /><i className="text-gold">avaliação</i></h2>
            <div className="space-y-8 font-mono text-[11px] uppercase tracking-wider">
              <div>
                <p className="text-gold mb-2">Endereço</p>
                <p>Rua do Riachuelo, 325 — Cond. Edifício Elano, sala 508<br />Boa Vista, Recife — PE</p>
              </div>
              <div>
                <p className="text-gold mb-2">WhatsApp</p>
                <p>(81) 99293-9016</p>
              </div>
              <div>
                <p className="text-gold mb-2">Social</p>
                <p>@jackbernardoesteticaavancada</p>
              </div>
              <div>
                <p className="text-gold mb-2">Atendimento</p>
                <p>Seg — Sex: 09h às 19h</p>
              </div>
            </div>
          </div>
          <form className="space-y-5 bg-paper p-10 rounded-3xl shadow-xl shadow-cocoa/10" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome Completo" className="w-full bg-peach/30 border border-gold/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <input type="email" placeholder="E-mail" className="w-full bg-peach/30 border border-gold/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <input type="tel" placeholder="Telefone / WhatsApp" className="w-full bg-peach/30 border border-gold/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <select defaultValue="" className="w-full bg-peach/30 border border-gold/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
              <option value="" disabled>Selecione o procedimento</option>
              <option>Preenchimento Labial</option>
              <option>Definição de Perna</option>
              <option>Harmonização Facial</option>
              <option>Limpeza de Pele</option>
              <option>Drenagem Linfática</option>
              <option>Radiofrequência</option>
            </select>
            <textarea placeholder="Mensagem (opcional)" rows={3} className="w-full bg-peach/30 border border-gold/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
            <button type="submit" className="w-full bg-gold text-paper py-5 text-[11px] uppercase tracking-[0.25em] rounded-full hover:bg-cocoa transition-colors shadow-lg shadow-gold/30 mt-4">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-paper text-center flex flex-col items-center gap-4">
        <img src={logo.url} alt="Jack Bernardo" className="h-16 w-auto object-contain" />
        <p className="text-[10px] uppercase tracking-widest text-ink/60">© {new Date().getFullYear()} Jack Bernardo. Estética de Resultados.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
