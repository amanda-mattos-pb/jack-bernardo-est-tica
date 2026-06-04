import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import heroPortrait from "@/assets/jack-portrait.jpeg.asset.json";
import aboutImg from "@/assets/jack-about.jpeg.asset.json";
import resultLabial from "@/assets/antes-depois-labial.jpeg.asset.json";
import resultPerna from "@/assets/antes-depois-perna.jpeg.asset.json";
import logo from "@/assets/logo-transparent.png.asset.json";

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
    <div className="bg-peach/40 text-ink font-sans selection:bg-rose/40 overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section id="home" className="relative pt-40 pb-28 px-6 bg-gradient-to-b from-peach/60 via-paper to-paper overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="pointer-events-none absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-rose/60 to-transparent blur-3xl animate-float-slow opacity-70" />
        <div className="pointer-events-none absolute top-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-3xl animate-float opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-multiply" />
        {/* Floating logo watermark */}
        <img
          src={logo.url}
          aria-hidden="true"
          alt=""
          className="pointer-events-none select-none absolute top-24 right-6 md:right-16 w-40 md:w-72 opacity-[0.08] -rotate-12 animate-float-slow"
        />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 animate-reveal">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Estética Avançada
            </span>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8 text-cocoa">
              Cuidado que <br />
              <i className="font-light shimmer-text">transforma</i>
            </h1>
            <p className="max-w-md text-ink/70 leading-relaxed mb-10 text-pretty text-lg">
              Estética avançada com olhar individualizado para você. Tratamentos personalizados que valorizam a sua beleza natural.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contato"
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-gold via-[oklch(0.8_0.11_60)] to-gold text-paper px-10 py-5 text-[11px] uppercase tracking-[0.25em] rounded-full shadow-xl shadow-gold/40 hover:shadow-cocoa/40 transition-all duration-500"
              >
                <span className="relative z-10">Quero agendar</span>
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              <a href="#procedimentos" className="text-[11px] uppercase tracking-[0.25em] text-cocoa border-b border-gold/40 hover:border-gold pb-1 transition-colors">
                Ver procedimentos
              </a>
            </div>
          </div>
          <div className="md:col-span-5 animate-reveal [animation-delay:200ms] relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/40 via-rose/30 to-transparent rounded-[2.5rem] blur-2xl opacity-70 animate-float-slow" />
            <div className="absolute -top-6 -left-6 size-24 border border-gold/40 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-6 -right-6 size-32 border border-cocoa/20 rounded-full" />
            <img
              src={heroPortrait.url}
              alt="Jack Bernardo — profissional de estética avançada"
              width={1088}
              height={1344}
              className="relative w-full aspect-[4/5] object-cover object-top bg-rose/30 rounded-[2rem] shadow-2xl shadow-cocoa/30 ring-1 ring-gold/20"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 bg-paper relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <img src={logo.url} aria-hidden="true" alt="" className="pointer-events-none absolute -bottom-10 -left-20 w-80 opacity-[0.06] rotate-6" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-gold/30 via-rose/30 to-transparent rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
            <img
              src={aboutImg.url}
              alt="Jack Bernardo em ambiente sofisticado"
              width={800}
              height={1000}
              loading="lazy"
              className="relative w-full aspect-[3/4] object-cover bg-peach rounded-[2rem] shadow-xl shadow-cocoa/20 ring-1 ring-gold/20"
            />
            <div className="absolute -bottom-10 -right-10 w-72 p-8 bg-paper rounded-3xl shadow-2xl shadow-cocoa/20 hidden md:block border border-gold/20 backdrop-blur-md">
              <span className="font-display text-5xl text-gold leading-none block mb-2">"</span>
              <p className="font-display italic text-2xl text-cocoa">Realçar o que já é único em você.</p>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Sobre mim
            </span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-gradient-gold">Jack Bernardo</h2>
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
      <section id="procedimentos" className="py-32 px-6 bg-gradient-to-b from-peach/40 via-paper to-peach/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-rose/30 blur-3xl animate-float-slow" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> O que ofereço <span className="h-px w-10 bg-gold" />
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-gradient-gold">Procedimentos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {procedures.map((p) => (
              <div
                key={p.n}
                className="relative bg-paper p-10 rounded-3xl shadow-md shadow-cocoa/5 hover:shadow-2xl hover:shadow-gold/25 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-gold/10 overflow-hidden"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-rose/40 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
                <span className="font-mono text-[10px] text-gold block mb-4">{p.n}</span>
                <h3 className="font-display text-3xl mb-4 text-cocoa group-hover:italic group-hover:text-gold transition-all duration-500">{p.t}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.d}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="py-32 bg-gradient-to-br from-cocoa via-[oklch(0.35_0.05_35)] to-cocoa text-paper px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
        <div className="pointer-events-none absolute -top-40 left-1/4 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Antes & depois <span className="h-px w-10 bg-gold" />
            </span>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-paper">Resultados que <i className="text-gold">falam por si</i></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group space-y-6 bg-paper/5 p-6 rounded-3xl border border-gold/20 hover:border-gold/50 hover:bg-paper/10 transition-all duration-700 backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl">
                <img src={resultLabial.url} alt="Antes e depois — Preenchimento Labial" loading="lazy" className="w-full object-contain bg-white/5 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-widest">Preenchimento Labial</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Resultado Imediato</span>
              </div>
            </div>
            <div className="group space-y-6 bg-paper/5 p-6 rounded-3xl border border-gold/20 hover:border-gold/50 hover:bg-paper/10 transition-all duration-700 backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl">
                <img src={resultPerna.url} alt="Antes e depois — Definição de Perna" loading="lazy" className="w-full object-contain bg-white/5 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-widest">Definição de Perna</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Protocolo Jack B.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 px-6 bg-paper relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-rose/30 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-gold/15 blur-3xl animate-float" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Depoimentos <span className="h-px w-10 bg-gold" />
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-gradient-gold">O que minhas pacientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative bg-peach/40 p-10 rounded-3xl shadow-md shadow-cocoa/5 border border-gold/15 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 backdrop-blur-sm"
              >
                <span className="absolute -top-6 left-8 font-display text-7xl text-gold/70 leading-none">"</span>
                <div className="flex gap-1 text-gold mb-6 text-sm">★★★★★</div>
                <blockquote className="font-display text-xl italic leading-relaxed mb-6 text-cocoa">
                  {t.q}
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-ink/60">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 bg-gradient-to-br from-peach/60 via-paper to-rose/40 px-6 relative overflow-hidden">
        <img src={logo.url} aria-hidden="true" alt="" className="pointer-events-none absolute -top-10 -right-20 w-96 opacity-[0.08] rotate-12 animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[35rem] h-[35rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Vamos conversar
            </span>
            <h2 className="font-display text-5xl md:text-6xl mb-12 text-cocoa">Agende sua <br /><i className="shimmer-text">avaliação</i></h2>
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
          <form className="relative space-y-5 bg-paper/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl shadow-cocoa/15 border border-gold/20" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-rose/40 -z-10 blur-md" />
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
            <button type="submit" className="group relative w-full overflow-hidden bg-gradient-to-r from-gold via-[oklch(0.8_0.11_60)] to-gold text-paper py-5 text-[11px] uppercase tracking-[0.25em] rounded-full hover:from-cocoa hover:to-cocoa transition-all shadow-xl shadow-gold/30 mt-4">
              <span className="relative z-10">Enviar Solicitação</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-paper to-peach/50 text-center flex flex-col items-center gap-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <img src={logo.url} alt="Jack Bernardo" className="h-24 w-auto object-contain drop-shadow-[0_6px_24px_rgba(201,168,108,0.45)]" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/60">© {new Date().getFullYear()} Jack Bernardo · Estética de Resultados</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
