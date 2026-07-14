import { createFileRoute } from '@tanstack/react-router'
import { TratamentosFaciaisOrbitSection } from '../components/site/TratamentosFaciaisOrbitSection'
import { JatoDePlasmaSection } from '../components/site/JatoDePlasmaSection'
import { ClareamentosSection } from '../components/site/ClareamentosSection'
import { CallToAction } from '../components/site/CallToAction'

export const Route = createFileRoute('/faciais')({
  component: FaciaisComponent,
})

function FaciaisComponent() {
  return (
    <div className="pb-20 pt-8 space-y-24">
      <TratamentosFaciaisOrbitSection />
      <JatoDePlasmaSection />
      <ClareamentosSection />
      
      <CallToAction 
        title="Pronta para realçar seu rosto?" 
        subtitle="Vamos montar um protocolo facial personalizado para a sua pele." 
      />
    </div>
  )
}
