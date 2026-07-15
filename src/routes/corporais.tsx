import { createFileRoute } from '@tanstack/react-router'
import { HarmonizacaoCorporalIntro } from '../components/site/HarmonizacaoCorporalIntro'
import { ClareamentosSection } from '../components/site/ClareamentosSection'
import { InjetaveisCorporaisSection } from '../components/site/InjetaveisCorporaisSection'
import { TratamentoMuscularSection } from '../components/site/TratamentoMuscularSection'
import { VasinhosSection } from '../components/site/VasinhosSection'
import { EstriasSection } from '../components/site/EstriasSection'
import { CallToAction } from '../components/site/CallToAction'

export const Route = createFileRoute('/corporais')({
  component: CorporaisComponent,
})

function CorporaisComponent() {
  return (
    <div className="pb-20 space-y-24">
      <HarmonizacaoCorporalIntro />
      <ClareamentosSection />
      <InjetaveisCorporaisSection />
      
      {/* High Performance & Specific Body Care Section Header */}
      <section className="text-center pt-12 pb-4 max-w-3xl mx-auto px-6">
        <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-bold mb-3 inline-block">
          ⚡ Alta Performance
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-cocoa font-semibold mb-4">
          Outros Protocolos Corporais Especializados
        </h2>
        <p className="text-ink/80 text-sm font-light leading-relaxed">
          Complemente seus resultados com tecnologias de ponta para tônus muscular, estrias e microvasos.
        </p>
      </section>

      <TratamentoMuscularSection />
      <VasinhosSection />
      <EstriasSection />
      
      <CallToAction 
        title="Harmonia e contorno corporal" 
        subtitle="Agende sua avaliação e descubra o protocolo ideal para o seu corpo." 
      />
    </div>
  )
}
