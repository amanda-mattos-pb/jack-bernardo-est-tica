import { createFileRoute } from '@tanstack/react-router'
import { Phone, MapPin, Instagram, Mail } from 'lucide-react'

export const Route = createFileRoute('/contato')({
  component: ContatoComponent,
})

function ContatoComponent() {
  return (
    <div className="pb-20 pt-16 min-h-[70vh] flex items-center justify-center bg-paper">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-cocoa font-bold mb-6">Entre em Contato</h1>
          <p className="text-ink/80 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Estamos prontos para cuidar de você. Agende sua avaliação e descubra o melhor protocolo para realçar sua beleza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gold/20">
          <div className="space-y-8">
            <h3 className="font-display text-2xl text-cocoa font-semibold mb-6">Informações de Contato</h3>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-cocoa/60 font-mono uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-cocoa font-medium">+55 (81) 99293-9016</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-cocoa/60 font-mono uppercase tracking-widest mb-1">Instagram</p>
                <p className="text-cocoa font-medium">@jackbernardoesteticaavancada</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-cocoa/60 font-mono uppercase tracking-widest mb-1">Endereço</p>
                <p className="text-cocoa font-medium">Rua da Riachuelo, Cond. Edf Ébano 325 - Sala 508, Boa Vista, Recife - PE</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center p-8 bg-peach/20 rounded-2xl border border-gold/10">
            <h4 className="font-display text-xl text-cocoa font-semibold mb-4">Pronta para começar?</h4>
            <p className="text-sm text-ink/80 mb-8">Fale diretamente com a nossa equipe pelo WhatsApp para agendar seu horário.</p>
            <a
              href="#"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full bg-[#b8686d] text-paper shadow-lg shadow-rose/25 hover:shadow-cocoa/30 hover:scale-[1.02] transition-all w-full"
            >
              <Phone className="size-4 fill-current" />
              <span>Chamar no WhatsApp</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
