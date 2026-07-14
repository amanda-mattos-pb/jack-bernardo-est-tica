import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Treatment } from "@/data/treatments";
import { Phone, Check, Award, Compass, HeartPulse } from "lucide-react";

interface TreatmentModalProps {
  treatment: Treatment | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TreatmentModal({ treatment, isOpen, onClose }: TreatmentModalProps) {
  if (!treatment) return null;

  const phone = "5581992939016";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(treatment.whatsappText)}`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-paper/95 border-gold/30 shadow-2xl p-8 overflow-y-auto max-h-[85vh] rounded-[2rem] backdrop-blur-xl">
        <DialogHeader className="border-b border-gold/15 pb-6 text-left">
          <div className="flex items-center gap-2 text-gold mb-2">
            <Compass className="size-4 animate-spin-slow" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium">
              Procedimento {treatment.category === "facial" ? "Facial" : treatment.category === "clareamento" ? "Clareamento" : "Corporal"}
            </span>
          </div>
          <DialogTitle className="font-display text-4xl text-cocoa leading-tight tracking-normal font-semibold">
            {treatment.name}
          </DialogTitle>
          <DialogDescription className="text-xs text-ink/75 font-mono uppercase tracking-wider mt-2">
            {treatment.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Imagem do Tratamento */}
          {treatment.imageUrl && (
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl shadow-cocoa/10 border border-gold/15">
              <img src={treatment.imageUrl} alt={treatment.name} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Descrição */}
          <div className="text-ink/80 leading-relaxed text-sm">
            <p>{treatment.description}</p>
          </div>

          {/* Indicações */}
          <div className="bg-peach/30 border border-gold/10 p-5 rounded-2xl flex gap-4 items-start">
            <Award className="size-5 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-lg text-cocoa font-semibold mb-1">Indicação Clínica</h4>
              <p className="text-xs text-ink/75 leading-relaxed">{treatment.indications}</p>
            </div>
          </div>

          {/* Como Funciona */}
          <div>
            <h4 className="font-display text-xl text-cocoa font-semibold mb-4 flex items-center gap-2">
              <span className="size-1.5 bg-gold rounded-full" />
              Como funciona o tratamento?
            </h4>
            <ul className="space-y-3.5 pl-2">
              {treatment.howItWorks.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-ink/70 leading-relaxed">
                  <span className="font-mono text-gold font-bold shrink-0">{(idx + 1).toString().padStart(2, "0")}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefícios */}
          <div className="border-t border-gold/15 pt-6">
            <h4 className="font-display text-xl text-cocoa font-semibold mb-4 flex items-center gap-2">
              <span className="size-1.5 bg-gold rounded-full" />
              Principais Benefícios
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <span className="size-5 rounded-full bg-rose/40 text-cocoa flex items-center justify-center shrink-0 mt-0.5 border border-gold/10">
                    <Check className="size-3 text-gold" />
                  </span>
                  <span className="text-xs text-ink/70 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="border-t border-gold/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <HeartPulse className="size-5 text-gold animate-pulse" />
              <p className="text-[10px] font-mono text-ink/65 uppercase tracking-wider">
                Exclusividade · Resultados Naturais · Tecnologia
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#b8686d] hover:bg-[#a6575c] text-paper px-8 py-4.5 text-[10px] uppercase tracking-[0.25em] rounded-full shadow-xl shadow-rose/25 hover:shadow-cocoa/20 transition-all duration-300 w-full md:w-auto"
            >
              <Phone className="size-3.5 fill-current" />
              <span className="relative z-10 font-semibold">Agendar Avaliação</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
