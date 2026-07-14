import { createFileRoute } from '@tanstack/react-router'
import { TratamentoMuscularSection } from '../components/site/TratamentoMuscularSection'
import { VasinhosSection } from '../components/site/VasinhosSection'
import { EstriasSection } from '../components/site/EstriasSection'
import { CallToAction } from '../components/site/CallToAction'

export const Route = createFileRoute('/corporais')({
  component: CorporaisComponent,
})

function CorporaisComponent() {
  return (
    <div className="pb-20 pt-8 space-y-24">
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
