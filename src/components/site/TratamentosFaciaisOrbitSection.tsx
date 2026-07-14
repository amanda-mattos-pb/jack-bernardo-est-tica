import { OrbitLayout } from "./OrbitLayout";

export function TratamentosFaciaisOrbitSection() {
  const leftItems = [
    { image: "/images/real_facial_1.jpg", label: "Limpeza de Pele" },
    { image: "/images/real_facial_2.jpg", label: "Peeling" },
    { image: "/images/real_facial_3.jpg", label: "Microagulhamento" }
  ];

  const rightItems = [
    { image: "/images/real_facial_2.jpg", label: "Skinbooster" },
    { image: "/images/real_facial_1.jpg", label: "Tratamento de Papada" },
    { image: "/images/real_facial_3.jpg", label: "Remoção de Sinais" }
  ];

  return (
    <OrbitLayout
      id="faciais"
      title="Tratamentos"
      subtitle="Para uma pele saudável e radiante"
      tags={["Cuidado", "Tecnologia", "Resultados Naturais"]}
      centralImage="/images/jack-about.jpeg"
      leftItems={leftItems}
      rightItems={rightItems}
      footerText={
        <>
          <span>Tecnologia • Segurança • Resultados Naturais</span>
          <span>Beleza que transforma, Confiança que fica.</span>
        </>
      }
    />
  );
}
