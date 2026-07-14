import { createFileRoute } from '@tanstack/react-router'
import { QuemSouEuSection } from '../components/site/QuemSouEuSection'
import { CallToAction } from '../components/site/CallToAction'

export const Route = createFileRoute('/sobre')({
  component: SobreComponent,
})

function SobreComponent() {
  return (
    <div className="pb-0 pt-8">
      <QuemSouEuSection />
      
      <CallToAction 
        title="Dê o primeiro passo" 
        subtitle="Agende sua avaliação e descubra o protocolo ideal para realçar a sua beleza natural." 
      />
    </div>
  )
}
