import { createFileRoute } from '@tanstack/react-router'
import { ProcedimentosMaisVendidosOrbitSection } from '../components/site/ProcedimentosMaisVendidosOrbitSection'
import { CallToAction } from '../components/site/CallToAction'

export const Route = createFileRoute('/mais-procurados')({
  component: MaisProcuradosComponent,
})

function MaisProcuradosComponent() {
  return (
    <div className="pb-0 pt-8">
      <ProcedimentosMaisVendidosOrbitSection />
      
      <CallToAction 
        title="Você merece o melhor" 
        subtitle="Escolha um dos nossos procedimentos mais vendidos e transforme-se." 
      />
    </div>
  )
}
