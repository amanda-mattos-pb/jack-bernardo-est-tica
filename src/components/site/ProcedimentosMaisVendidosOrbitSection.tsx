import { OrbitLayout } from "./OrbitLayout";

export function ProcedimentosMaisVendidosOrbitSection() {
  const leftItems = [
    { image: "/images/real_glutes_1.jpg", label: "Bumbum Volume" },
    { image: "/images/real_legs_1.jpg", label: "Vasinhos" },
    { image: "/images/real_glutes_2.jpg", label: "Celulite" }
  ];

  const rightItems = [
    { image: "/images/real_legs_2.jpg", label: "Pernas Definidas" },
    { image: "/images/real_abdomen_1.jpg", label: "Gordura Localizada" },
    { image: "/images/real_abdomen_2.jpg", label: "Flacidez Corporal" }
  ];

  return (
    <OrbitLayout
      id="mais-procurados"
      title="Procedimentos"
      subtitle="Mais Vendidos"
      tags={["Resultados Reais", "Confiança", "Autoestima"]}
      centralImage="/images/jack-portrait.jpeg"
      leftItems={leftItems}
      rightItems={rightItems}
      footerText={
        <>
          <span>Beleza que transforma • Resultados que elevam</span>
          <span>Tecnologia • Segurança • Excelência</span>
        </>
      }
    />
  );
}
