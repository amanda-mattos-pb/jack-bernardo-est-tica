import { createFileRoute } from '@tanstack/react-router'
import { ProcedimentosMaisVendidosOrbitSection } from '../components/site/ProcedimentosMaisVendidosOrbitSection'

export const Route = createFileRoute('/mais-procurados')({
  component: MaisProcuradosComponent,
})

function MaisProcuradosComponent() {
  return (
    <div className="pb-20 pt-8">
      <ProcedimentosMaisVendidosOrbitSection />
    </div>
  )
}
