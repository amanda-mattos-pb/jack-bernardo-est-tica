import { Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
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
  );
}
