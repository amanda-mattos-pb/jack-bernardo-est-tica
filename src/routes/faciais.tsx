import { createFileRoute } from '@tanstack/react-router'
import { TratamentosFaciaisOrbitSection } from '../components/site/TratamentosFaciaisOrbitSection'
import { JatoDePlasmaSection } from '../components/site/JatoDePlasmaSection'
import { ClareamentosSection } from '../components/site/ClareamentosSection'

export const Route = createFileRoute('/faciais')({
  component: FaciaisComponent,
})

function FaciaisComponent() {
  return (
    <div className="pb-20 pt-8 space-y-24">
      <TratamentosFaciaisOrbitSection />
      <JatoDePlasmaSection />
      <ClareamentosSection />
    </div>
  )
}
