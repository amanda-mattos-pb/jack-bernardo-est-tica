import { Phone } from "lucide-react";

export function CallToAction({
  title = "Pronta para sua transformação?",
  subtitle = "Agende uma avaliação e descubra o protocolo ideal para você.",
  buttonText = "Agendar Avaliação"
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  const phone = "5581992939016";
  const msg = "Olá Jack! Gostaria de agendar uma avaliação.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-peach/20 border-t border-gold/10 mt-12">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-cocoa font-bold mb-6">
          {title}
        </h2>
        <p className="text-ink/75 text-lg md:text-xl font-light mb-10 text-pretty">
          {subtitle}
        </p>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center justify-center gap-4 bg-[#b8686d] text-paper px-12 py-5 text-[11px] md:text-xs uppercase tracking-[0.25em] rounded-full shadow-xl shadow-rose/30 hover:shadow-cocoa/40 transition-all duration-500 hover:scale-[1.02]"
        >
          <Phone className="size-4 md:size-5 fill-current" />
          <span className="relative z-10 font-semibold">{buttonText}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </a>
      </div>
    </section>
  );
}
