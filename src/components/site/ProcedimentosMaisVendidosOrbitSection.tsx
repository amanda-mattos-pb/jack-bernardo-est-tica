import { OrbitLayout } from "./OrbitLayout";

export function ProcedimentosMaisVendidosOrbitSection() {
  const leftItems = [
    { image: "/images/real_glutes_1.jpg", label: "Bumbum Volume", id: "preenchimento-de-gluteo" },
    { image: "/images/real_legs_1.jpg", label: "Vasinhos", id: "peim-vasinhos" },
    { image: "/images/real_glutes_2.jpg", label: "Celulite", id: "enzimas-para-celulite" }
  ];

  const rightItems = [
    { image: "/images/real_legs_2.jpg", label: "Pernas Definidas", id: "pernas-ganho-massa" },
    { image: "/images/real_abdomen_1.jpg", label: "Gordura Localizada", id: "enzimas-gordura-localizada" },
    { image: "/images/real_abdomen_2.jpg", label: "Flacidez Corporal", id: "endolaser-corporal" }
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
