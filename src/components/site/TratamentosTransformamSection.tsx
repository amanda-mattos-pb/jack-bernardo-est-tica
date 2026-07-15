import { CircleCarousel } from "./CircleCarousel";

export function TratamentosTransformamSection() {
  const items = [
    {
      id: "preenchimento-de-gluteo",
      image: "/images/real_glutes_1.jpg",
      title: "Harmonização de Glúteos",
      description: "Mais volume, projeção e contorno sem cirurgia."
    },
    {
      id: "enzimas-gordura-localizada",
      image: "/images/real_abdomen_1.jpg",
      title: "Gordura Localizada",
      description: "Reduza medidas e elimine gordura de forma eficaz."
    },
    {
      id: "enzimas-para-celulite",
      image: "/images/real_glutes_2.jpg",
      title: "Celulite e Flacidez",
      description: "Pele mais firme, lisa e com aparência saudável."
    },
    {
      id: "harmonizacao-facial",
      image: "/images/real_facial_1.jpg",
      title: "Harmonização Facial",
      description: "Realce sua beleza com naturalidade e equilíbrio."
    },
    {
      id: "peim-vasinhos",
      image: "/images/real_legs_1.jpg",
      title: "Microvasos em Pernas",
      description: "Tecnologia e técnicas para reduzir microvasos e melhorar a aparência da pele."
    }
  ];

  return (
    <CircleCarousel
      title="Tratamentos que transformam"
      subtitle="PROCEDIMENTOS"
      items={items}
    />
  );
}
