import { createFileRoute } from '@tanstack/react-router'
import { TratamentosTransformamSection } from '../components/site/TratamentosTransformamSection'
import { BeforeAfterSlider } from '../components/site/BeforeAfterSlider'

export const Route = createFileRoute('/resultados')({
  component: ResultadosComponent,
})

function ResultadosComponent() {
  return (
    <div className="pb-20 pt-8 space-y-24">
      <TratamentosTransformamSection />
      
      {/* Interactive Sliders Section */}
      <section className="py-24 bg-paper relative overflow-hidden" id="sliders">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-cocoa font-bold mb-6">Resultados de Excelência</h2>
            <p className="text-ink/80 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Arraste para ver a diferença real que nossos protocolos exclusivos proporcionam.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Slider 1 */}
            <div className="space-y-6">
              <BeforeAfterSlider
                beforeImage="/images/SUA_FOTO_ANTES_AXILA.jpg"
                afterImage="/images/SUA_FOTO_DEPOIS_AXILA.jpg"
                beforeLabel="Antes"
                afterLabel="Depois - Axila"
              />
              <div className="text-center">
                <h3 className="font-display text-2xl text-gold font-semibold">Clareamento de Axilas</h3>
                <p className="text-xs text-paper/70 font-mono uppercase tracking-widest mt-1">Pele Uniforme e Iluminada</p>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-6">
              <BeforeAfterSlider
                beforeImage="/images/celulite_antes.png"
                afterImage="/images/celulite_depois.png"
                beforeLabel="Antes"
                afterLabel="Depois - Celulite"
              />
              <div className="text-center">
                <h3 className="font-display text-2xl text-gold font-semibold">Tratamento de Celulite</h3>
                <p className="text-xs text-paper/70 font-mono uppercase tracking-widest mt-1">Pele Mais Firme e Lisa</p>
              </div>
            </div>

            {/* Slider 3 */}
            <div className="space-y-6">
              <BeforeAfterSlider
                beforeImage="/images/gordura_antes.jpg"
                afterImage="/images/gordura_depois.jpg"
                beforeLabel="Antes"
                afterLabel="Depois - Gordura"
              />
              <div className="text-center">
                <h3 className="font-display text-2xl text-gold font-semibold">Gordura Localizada</h3>
                <p className="text-xs text-paper/70 font-mono uppercase tracking-widest mt-1">Redução de Medidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
