import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { TreatmentModal } from "@/components/site/TreatmentModal";
import { treatmentsData, bestSellersIds, Treatment } from "@/data/treatments";
import { JatoDePlasmaSection } from "@/components/site/JatoDePlasmaSection";
import { ClareamentosSection } from "@/components/site/ClareamentosSection";
import { EstriasSection } from "@/components/site/EstriasSection";
import { QuemSouEuSection } from "@/components/site/QuemSouEuSection";
import { ProcedimentosMaisVendidosOrbitSection } from "@/components/site/ProcedimentosMaisVendidosOrbitSection";
import { TratamentosFaciaisOrbitSection } from "@/components/site/TratamentosFaciaisOrbitSection";
import { TratamentosTransformamSection } from "@/components/site/TratamentosTransformamSection";
import { TratamentoMuscularSection } from "@/components/site/TratamentoMuscularSection";
import { VasinhosSection } from "@/components/site/VasinhosSection";
import {
  Compass,
  Target,
  Award,
  Calendar,
  Clock,
  MapPin,
  Instagram,
  Mail,
  ChevronDown,
  Sparkles,
  ChevronRight,
  Info
} from "lucide-react";

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
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"facial" | "corporal" | "injetavel" | "clareamento">("facial");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const openTreatmentDetails = (treatmentId: string) => {
    const treatment = treatmentsData.find((t) => t.id === treatmentId);
    if (treatment) {
      setSelectedTreatment(treatment);
      setIsModalOpen(true);
    }
  };

  const bestSellers = treatmentsData.filter((t) => bestSellersIds.includes(t.id));
  const filteredTreatments = treatmentsData.filter((t) => t.category === activeCategory);

  const faqData = [
    {
      q: "Como funciona a primeira avaliação?",
      a: "Na primeira consulta, realizamos uma análise facial ou corporal detalhada, discutimos seus objetivos e montamos um plano de tratamento personalizado que respeita sua anatomia e busca resultados naturais."
    },
    {
      q: "Os procedimentos são doloridos?",
      a: "A maioria dos procedimentos é bastante confortável. Para os injetáveis, utilizamos anestésicos tópicos ou locais de alta eficácia para garantir que você sinta o mínimo de desconforto possível."
    },
    {
      q: "Qual é o tempo de recuperação (downtime)?",
      a: "Depende do tratamento. A maioria dos procedimentos corporais e faciais (como Criolipólise, Toxina Botulínica e Preenchimentos) permite que você volte às suas atividades normais no mesmo dia. Procedimentos como o Endolaser exigem alguns cuidados simples pós-aplicação."
    },
    {
      q: "Quantas sessões são necessárias?",
      a: "O número de sessões varia para cada paciente e depende do tratamento escolhido. Protocolos de gordura localizada ou celulite costumam necessitar de 3 a 5 sessões, enquanto preenchimentos e toxina botulínica mostram resultados na primeira aplicação."
    }
  ];

  return (
    <div className="bg-paper text-ink font-sans selection:bg-rose/40 overflow-x-hidden min-h-screen">
      <Nav />

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
              <a
                href="#contato"
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#b8686d] text-paper px-10 py-5 text-[11px] uppercase tracking-[0.25em] rounded-full shadow-xl shadow-rose/30 hover:shadow-cocoa/40 transition-all duration-500"
              >
                <span className="relative z-10">Agendar Avaliação</span>
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              <a
                href="#mais-procurados"
                className="text-[11px] uppercase tracking-[0.25em] text-cocoa border-b border-gold/40 hover:border-gold pb-1 transition-colors"
              >
                Ver Tratamentos
              </a>
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

      {/* Sobre e Missão */}
      <QuemSouEuSection />

      {/* Novas Seções de Serviços Baseadas no Design */}
      <JatoDePlasmaSection />
      <ClareamentosSection />
      <EstriasSection />

      <TratamentoMuscularSection />
      <VasinhosSection />
      
      <ProcedimentosMaisVendidosOrbitSection />
      <TratamentosFaciaisOrbitSection />
      <TratamentosTransformamSection />

      {/* Resultados Antes & Depois Section */}
      <section id="resultados" className="py-32 bg-gradient-to-br from-cocoa via-[oklch(0.38_0.03_55)] to-cocoa text-paper px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-overlay" />
        <div className="pointer-events-none absolute -top-40 left-1/4 w-[45rem] h-[45rem] rounded-full bg-gold/10 blur-3xl" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Transformações Reais <span className="h-px w-10 bg-gold" />
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-paper font-semibold mb-4">
              Resultados de Excelência
            </h2>
            <p className="text-gold/80 text-[10px] font-mono uppercase tracking-widest">
              Arraste a barra para comparar o antes e o depois
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Slider 1 */}
            <div className="space-y-6">
              <BeforeAfterSlider
                beforeImage="/images/SUA_FOTO_ANTES_AXILA.jpg"
                afterImage="/images/SUA_FOTO_DEPOIS_AXILA.jpg"
                beforeLabel="Antes"
                afterLabel="Depois - Axila"
              />
              <div className="text-center">
                <h3 className="font-display text-2xl text-gold font-semibold">Clareamento de Axilas</h3>
                <p className="text-xs text-paper/70 font-mono uppercase tracking-widest mt-1">Pele Uniforme e Iluminada</p>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-6">
              <BeforeAfterSlider
                beforeImage="/images/celulite_antes.png"
                afterImage="/images/celulite_depois.png"
                beforeLabel="Antes"
                afterLabel="Depois - Celulite"
              />
              <div className="text-center">
                <h3 className="font-display text-2xl text-gold font-semibold">Tratamento de Celulite</h3>
                <p className="text-xs text-paper/70 font-mono uppercase tracking-widest mt-1">Pele Mais Firme e Lisa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-paper relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Tire suas Dúvidas <span className="h-px w-10 bg-gold" />
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-cocoa font-semibold">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-paper border border-gold/15 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display text-lg text-cocoa font-semibold cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-5 text-gold transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    faqOpen === idx ? "max-h-96 opacity-100 border-t border-gold/10" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 py-5 text-xs text-ink/75 leading-relaxed bg-peach/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização, Contato e Formulário Section */}
      <section id="contato" className="py-32 bg-gradient-to-br from-peach via-paper to-rose/30 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[35rem] h-[35rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Informações de Contato e Horários */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold" /> Onde nos encontrar
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-cocoa font-semibold leading-tight">
                Locais de <br />Atendimento
              </h2>
            </div>

            <div className="space-y-8 font-mono text-[11px] uppercase tracking-wider text-ink/80">
              <div className="flex gap-4 items-start border-l-2 border-gold pl-4 py-1">
                <MapPin className="size-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gold font-semibold mb-1">Recife - PE</p>
                  <p className="leading-relaxed">
                    Rua do Riachuelo, 325 — Cond. Edifício Elano, sala 508<br />
                    Boa Vista, Recife - PE
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-2 border-gold pl-4 py-1">
                <MapPin className="size-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gold font-semibold mb-1">João Pessoa - PB</p>
                  <p className="leading-relaxed">
                    Atendimento exclusivo em consultório particular.<br />
                    Agendamento prévio obrigatório.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-2 border-gold pl-4 py-1">
                <Clock className="size-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gold font-semibold mb-1">Horários de Atendimento</p>
                  <div className="space-y-2 mt-1 lowercase">
                    <p className="font-semibold text-cocoa uppercase text-[10px]">Recife - PE:</p>
                    <p className="pl-2">Quarta a Sexta: 09h às 19h</p>
                    <p className="pl-2">Sábado: 08h às 16h</p>
                    <p className="font-semibold text-cocoa uppercase text-[10px] mt-2">João Pessoa - PB:</p>
                    <p className="pl-2">Segunda e Terça: 09h às 19h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Pré-Agendamento */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-rose/30 -z-10 blur-md" />
            <form
              className="relative space-y-5 bg-paper/95 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gold/15"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const phone = formData.get("phone");
                const service = formData.get("service");
                const msg = `Olá Jack, meu nome é ${name}. Gostaria de agendar uma avaliação para o tratamento de ${service}. Meu telefone é ${phone}.`;
                window.open(`https://wa.me/5581992939016?text=${encodeURIComponent(msg)}`, "_blank");
              }}
            >
              <h3 className="font-display text-3xl text-cocoa font-semibold mb-2">Solicitar Agendamento</h3>
              <p className="text-xs text-ink/75 leading-relaxed mb-6">
                Preencha seus dados para receber o contato da nossa equipe via WhatsApp e escolher o melhor horário.
              </p>

              <input
                type="text"
                name="name"
                required
                placeholder="Seu Nome Completo"
                className="w-full bg-peach/25 border border-gold/15 rounded-full px-6 py-4 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-gold transition-colors text-ink"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Seu WhatsApp (com DDD)"
                className="w-full bg-peach/25 border border-gold/15 rounded-full px-6 py-4 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-gold transition-colors text-ink"
              />
              <select
                name="service"
                required
                defaultValue=""
                className="w-full bg-peach/25 border border-gold/15 rounded-full px-6 py-4 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-gold transition-colors text-ink appearance-none"
              >
                <option value="" disabled>Selecione o Procedimento</option>
                <optgroup label="Mais Procurados">
                  {bestSellers.map((b) => <option key={b.id} value={b.name}>{b.name}</option>)}
                </optgroup>
                <optgroup label="Outros Procedimentos">
                  {treatmentsData.filter(t => !bestSellersIds.includes(t.id)).map((t) => <option key={t.id} value={t.name}>{t.name}</option>)}
                </optgroup>
              </select>

              <button
                type="submit"
                className="group relative w-full overflow-hidden bg-[#b8686d] hover:bg-[#a6575c] text-paper py-5 text-[10px] uppercase tracking-[0.25em] rounded-full transition-all shadow-xl shadow-rose/25 mt-4 cursor-pointer"
              >
                <span className="relative z-10 font-semibold">Enviar via WhatsApp</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-paper to-peach/40 text-center flex flex-col items-center gap-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <img
          src="/images/logo.jpeg"
          alt="Jack Bernardo"
          className="h-20 w-auto object-contain drop-shadow-[0_4px_12px_rgba(201,168,108,0.3)] mix-blend-multiply rounded-lg"
        />
        <div className="flex gap-6 text-cocoa">
          <a
            href="https://instagram.com/jackbernardoesteticaavancada"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            <Instagram className="size-5" />
          </a>
          <a href="mailto:contato@jackbernardo.com.br" className="hover:text-gold transition-colors">
            <Mail className="size-5" />
          </a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-ink/60">
          © {new Date().getFullYear()} Dra. Jaquelyne Bernardo · Estética Avançada de Resultados
        </p>
      </footer>

      {/* Floating Buttons */}
      <WhatsAppButton />

      {/* Treatment Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTreatment(null);
        }}
      />
    </div>
  );
}
