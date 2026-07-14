import { createFileRoute } from '@tanstack/react-router'
import { QuemSouEuSection } from '../components/site/QuemSouEuSection'

export const Route = createFileRoute('/sobre')({
  component: SobreComponent,
})

function SobreComponent() {
  return (
    <div className="pb-20 pt-8">
      <QuemSouEuSection />
    </div>
  )
}
