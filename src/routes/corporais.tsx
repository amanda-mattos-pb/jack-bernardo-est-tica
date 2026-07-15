import { createFileRoute } from '@tanstack/react-router'
import { HarmonizacaoCorporalIntro } from '../components/site/HarmonizacaoCorporalIntro'
import { ClareamentosSection } from '../components/site/ClareamentosSection'
import { InjetaveisCorporaisSection } from '../components/site/InjetaveisCorporaisSection'
import { TratamentosAparelhosSection } from '../components/site/TratamentosAparelhosSection'
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
      <TratamentosAparelhosSection />
      
      <CallToAction 
        title="Harmonia e contorno corporal" 
        subtitle="Agende sua avaliação e descubra o protocolo ideal para o seu corpo." 
      />
    </div>
  )
}
