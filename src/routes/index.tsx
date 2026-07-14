import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Jaquelyne Bernardo — Estética Avançada" },
      { name: "description", content: "Estética avançada com resultados naturais. Harmonização facial, corporal e glútea por Dra. Jaquelyne Bernardo." },
      { property: "og:title", content: "Dra. Jaquelyne Bernardo — Estética Avançada" },
      { property: "og:description", content: "Tratamentos de ponta com olhar individualizado. Realce sua beleza natural com segurança e tecnologia." },
    ],
  }),
  component: Index,
});

export function Index() {
  return (
    <div className="bg-paper text-ink font-sans selection:bg-rose/40 overflow-x-hidden min-h-screen">

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-28 px-6 bg-gradient-to-b from-peach via-paper to-paper overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-rose/40 to-transparent blur-3xl opacity-70 animate-float-slow" />
        <div className="pointer-events-none absolute top-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-multiply" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 animate-reveal">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Estética Avançada
            </span>
            <h1 className="font-display text-5xl md:text-7.5xl leading-[1.05] mb-8 text-cocoa font-semibold">
              Beleza que <br />
              <span className="italic font-light bg-gradient-to-r from-gold via-cocoa to-gold bg-clip-text text-transparent">transforma</span>
            </h1>
            <p className="max-w-md text-ink/75 leading-relaxed mb-10 text-pretty text-base">
              Tratamentos personalizados que unem ciência, tecnologia de ponta e sofisticação para revelar sua melhor versão com resultados naturais.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contato"
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#b8686d] text-paper px-10 py-5 text-[11px] uppercase tracking-[0.25em] rounded-full shadow-xl shadow-rose/30 hover:shadow-cocoa/40 transition-all duration-500"
              >
                <span className="relative z-10">Agendar Avaliação</span>
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              <Link
                to="/mais-procurados"
                className="text-[11px] uppercase tracking-[0.25em] text-cocoa border-b border-gold/40 hover:border-gold pb-1 transition-colors"
              >
                Ver Tratamentos
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 animate-reveal [animation-delay:200ms] relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 via-rose/25 to-transparent rounded-[2.5rem] blur-2xl opacity-70 animate-float-slow" />
            <div className="absolute -top-6 -left-6 size-24 border border-gold/30 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-6 -right-6 size-32 border border-cocoa/15 rounded-full" />
            <img
              src="/images/jack-portrait.jpeg"
              alt="Dra. Jaquelyne Bernardo"
              className="relative w-full aspect-[4/5] object-cover object-top bg-rose/20 rounded-[2rem] shadow-2xl shadow-cocoa/20 ring-1 ring-gold/15"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
