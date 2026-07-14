export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  howItWorks: string[];
  benefits: string[];
  indications: string;
  category: "facial" | "corporal" | "injetavel" | "clareamento";
  whatsappText: string;
  imageUrl?: string;
}

export const treatmentsData: Treatment[] = [
  // FACIAIS
  {
    id: "limpeza-de-pele",
    name: "Limpeza de Pele Profunda",
    subtitle: "Renovação celular, remoção de cravos e pele iluminada",
    description: "A Limpeza de Pele Profunda é o primeiro passo para uma pele saudável. Ela desobstrui os poros, remove cravos (comedões), espinhas (pústulas) e o acúmulo de células mortas e poluição, garantindo uma pele com muito mais viço, maciez e preparada para absorver outros tratamentos.",
    howItWorks: [
      "Higienização profunda e esfoliação suave.",
      "Emoliência com vapor de ozônio para facilitar a extração sem dor.",
      "Extração manual cuidadosa de cravos e impurezas.",
      "Aplicação de alta frequência (ação bactericida e cicatrizante) e máscara facial calmante."
    ],
    benefits: [
      "Desobstrução e afinamento da pele",
      "Prevenção de cravos e espinhas",
      "Controle da oleosidade excessiva",
      "Pele luminosa, macia e com textura uniforme",
      "Melhora a absorção de dermocosméticos de uso diário"
    ],
    indications: "Indicado para todos os tipos de pele. Recomenda-se a realização a cada 30 ou 45 dias, dependendo da necessidade e oleosidade.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma Limpeza de Pele."
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    subtitle: "Hidratação injetável profunda para um brilho incomparável",
    description: "O Skinbooster é um tratamento injetável que utiliza ácido hialurônico de baixa densidade (não volumizador) enriquecido com vitaminas. Diferente dos cremes, ele hidrata a pele de dentro para fora, melhorando a textura, suavizando linhas finas e devolvendo aquele brilho (glow) de pele jovem e saudável.",
    howItWorks: [
      "Aplicação de creme anestésico tópico para conforto da paciente.",
      "Realizam-se microinjeções do produto em toda a face, pescoço ou colo.",
      "O ácido hialurônico atrai água, formando um reservatório de hidratação na derme.",
      "O resultado surge progressivamente ao longo de 30 dias."
    ],
    benefits: [
      "Hidratação profunda e prolongada, impossível de alcançar com cremes",
      "Melhora na elasticidade, firmeza e textura da pele",
      "Suavização de rugas finas (como ao redor dos olhos e boca)",
      "Devolve o brilho e a luminosidade (efeito glow)",
      "Pode ser associado a outros tratamentos como Botox e Preenchimentos"
    ],
    indications: "Indicado para peles ressecadas, opacas, maduras ou jovens que buscam prevenção e uma pele radiante e profundamente hidratada.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Skinbooster."
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento (Indução Percutânea de Colágeno)",
    subtitle: "Regeneração da pele, clareamento e tratamento de cicatrizes",
    description: "O Microagulhamento utiliza um dispositivo com microagulhas para criar microlesões controladas na pele. Esse estímulo físico desencadeia um poderoso processo de cicatrização que induz a produção natural de muito colágeno e elastina. Durante a sessão, aplicamos ativos estéreis (Drug Delivery) que penetram profundamente na pele.",
    howItWorks: [
      "Assepsia rigorosa e aplicação de anestésico tópico potente.",
      "O dispositivo desliza sobre a pele criando microcanais.",
      "Ativos específicos (para clareamento, rejuvenescimento ou cicatrizes) são aplicados e absorvidos imediatamente.",
      "A pele passa por um processo de vermelhidão temporária, com descamação leve nos dias seguintes."
    ],
    benefits: [
      "Redução de cicatrizes de acne e poros dilatados",
      "Clareamento de manchas e melasma",
      "Aumento significativo na produção de colágeno e elastina",
      "Melhora global da textura, firmeza e brilho da pele",
      "Potencializa em até 400% a absorção de cosméticos"
    ],
    indications: "Indicado para tratamento de cicatrizes de acne, melasma, rugas finas, poros dilatados e rejuvenescimento global do rosto e pescoço.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de tirar dúvidas sobre o Microagulhamento."
  },
  {
    id: "tratamento-de-papada",
    name: "Tratamento de Papada (Enzimas ou Lipo sem cortes)",
    subtitle: "Redução da gordura submentoniana e definição do contorno",
    description: "O tratamento para a papada (queixo duplo) foca em eliminar o excesso de gordura localizada abaixo do queixo e melhorar o contorno facial. Através da aplicação de enzimas lipolíticas (que destroem a gordura) ou equipamentos de alta tecnologia, conseguimos devolver um perfil elegante e harmonioso.",
    howItWorks: [
      "Avaliação para definir se a causa é gordura, flacidez ou ambos.",
      "No tratamento enzimático, aplicam-se microinjeções de ácido deoxicólico diretamente na gordura da papada.",
      "A substância rompe as células de gordura, que são eliminadas naturalmente.",
      "A pele se retrai, melhorando o ângulo cervicomentual (entre queixo e pescoço)."
    ],
    benefits: [
      "Redução visível e definitiva da gordura sob o queixo",
      "Melhora do contorno e harmonização do perfil facial",
      "Procedimento rápido, seguro e minimamente invasivo",
      "Evita a necessidade de procedimentos cirúrgicos complexos",
      "Melhora a autoestima e a autoconfiança"
    ],
    indications: "Indicado para pacientes que possuem gordura submentoniana (papada) e desejam um pescoço mais alongado e contorno mandibular mais definido.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Tratamento de Papada."
  },
  {
    id: "remocao-de-sinais",
    name: "Remoção de Sinais e Verrugas (Eletrocautério)",
    subtitle: "Pele limpa, sem marcas e sinais indesejados",
    description: "Um procedimento estético rápido e altamente eficaz para a remoção de pequenas lesões benignas como acrocórdons (verruguinhas no pescoço/axila), sinais superficiais e hiperplasias. Utilizando o eletrocautério, secamos a lesão na raiz com máxima precisão, sem sangramento e com excelente cicatrização.",
    howItWorks: [
      "Limpeza da área e aplicação de uma pequena dose de anestésico local.",
      "O jato de energia térmica do eletrocautério é aplicado na base da lesão.",
      "A lesão é vaporizada instantaneamente, formando uma crosta minúscula.",
      "A crosta cai naturalmente em poucos dias, deixando a pele lisa e uniforme."
    ],
    benefits: [
      "Remoção definitiva e imediata do sinal indesejado",
      "Procedimento extremamente rápido (poucos minutos)",
      "Altamente seguro, sem sangramentos",
      "Excelente cicatrização, geralmente sem deixar marcas",
      "Conforto total com o uso de anestesia local"
    ],
    indications: "Indicado para remoção de sinais benignos superficiais, verrugas pingentes (acrocórdons) em pescoço e axilas, e pequenas lesões estéticas, após avaliação.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de avaliar alguns sinais para remoção."
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica (Botox)",
    subtitle: "Suavização de rugas dinâmicas e rejuvenescimento do olhar",
    description: "A Toxina Botulínica (Botox) é o tratamento padrão-ouro para suavizar rugas e linhas de expressão causadas pela movimentação muscular repetida. O tratamento relaxa temporariamente os músculos faciais responsáveis pelas marcas da testa, 'pés de galinha' e rugas entre as sobrancelhas, promovendo uma aparência descansada, jovem e natural.",
    howItWorks: [
      "A substância é injetada em pontos estratégicos e específicos dos músculos da face.",
      "Ela bloqueia temporariamente os sinais nervosos que causam as contrações musculares.",
      "Com a musculatura relaxada, a pele sobreposta se suaviza, eliminando as rugas de expressão.",
      "O procedimento dura cerca de 15 a 30 minutos e tem efeito temporário, durando de 4 a 6 meses."
    ],
    benefits: [
      "Suaviza linhas de expressão e rugas na testa e ao redor dos olhos",
      "Previne a formação de novas rugas permanentes",
      "Efeito lifting suave e arqueamento elegante das sobrancelhas",
      "Resultado rápido (início em 3 a 5 dias, pico em 15 dias)",
      "Procedimento rápido, seguro e sem tempo de inatividade"
    ],
    indications: "Indicado para mulheres e homens que desejam suavizar rugas na testa, glabela (entre sobrancelhas) e ao redor dos olhos (pés de galinha), além de prevenção do envelhecimento precoce.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para o procedimento de Toxina Botulínica (Botox)."
  },
  {
    id: "preenchimento-labial",
    name: "Preenchimento Labial",
    subtitle: "Mais volume, contorno definido e hidratação labial profunda",
    description: "O Preenchimento Labial é realizado com ácido hialurônico, um componente natural do organismo. O objetivo é delinear o contorno dos lábios, aumentar o volume de forma harmoniosa, corrigir assimetrias e hidratar profundamente, devolvendo o viço e a maciez da boca de forma personalizada.",
    howItWorks: [
      "Aplicação de anestésico local para total conforto da paciente.",
      "O ácido hialurônico é injetado com agulha fina ou cânula em pontos precisos do lábio.",
      "O profissional esculpe e modela o volume para garantir simetria e naturalidade.",
      "O resultado é visível imediatamente, com duração média de 8 a 12 meses."
    ],
    benefits: [
      "Aumento de volume de forma natural e gradual",
      "Melhora do contorno e definição do 'arco do cupido'",
      "Correção de assimetrias labiais",
      "Hidratação profunda e redução de rugas ao redor dos lábios ('código de barras')",
      "Procedimento seguro e totalmente reversível se necessário"
    ],
    indications: "Indicado para quem deseja lábios mais volumosos, contornados, hidratados ou para quem perdeu o preenchimento labial devido ao processo natural de envelhecimento.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Preenchimento Labial."
  },
  {
    id: "bigode-chines",
    name: "Preenchimento de Bigode Chinês",
    subtitle: "Suavização do sulco nasogeniano para um semblante rejuvenescido",
    description: "O tratamento para o 'bigode chinês' (sulco nasogeniano) devolve o volume perdido na região que vai das abas do nariz até os cantos da boca. Utilizando preenchedores de ácido hialurônico, o tratamento suaviza a profundidade do sulco, eliminando o aspecto cansado e trazendo jovialidade de volta ao terço inferior da face.",
    howItWorks: [
      "Avaliação detalhada das proporções e da perda de volume facial.",
      "Aplicação de microinjeções de ácido hialurônico diretamente no sulco ou na região malar (efeito top model look para tracionar a pele).",
      "Suavização imediata da linha de sombra que envelhece o rosto.",
      "Procedimento rápido, seguro e com duração de 10 a 14 meses."
    ],
    benefits: [
      "Suavização imediata da dobra nasogeniana",
      "Efeito de sustentação e rejuvenescimento facial",
      "Redução da aparência de cansaço ou semblante triste",
      "Aparência natural e harmoniosa",
      "Retorno imediato às atividades normais"
    ],
    indications: "Indicado para pessoas que apresentam o sulco nasogeniano marcado, seja por genética, flacidez ou perda de sustentação da face.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de tirar dúvidas e agendar uma avaliação para o tratamento de Bigode Chinês."
  },
  {
    id: "malar",
    name: "Preenchimento de Malar",
    subtitle: "Efeito 'Top Model Look' e sustentação das bochechas",
    description: "O preenchimento do malar (maçãs do rosto) devolve a sustentação e o volume à região zigomática, que tende a descer com o envelhecimento. Ao projetar essa área com ácido hialurônico, conquistamos o famoso efeito 'Top Model Look' com bochechas definidas, melhorando indiretamente o bigode chinês e redefinindo a estrutura facial.",
    howItWorks: [
      "Injeção profunda de ácido hialurônico de alta densidade sobre o osso zigomático.",
      "Criam-se pontos de ancoragem para tracionar as bochechas e a pele para cima.",
      "O contorno das maçãs do rosto é esculpido conforme as proporções ideais de cada paciente.",
      "Resultados imediatos que duram entre 12 e 18 meses."
    ],
    benefits: [
      "Efeito lifting facial não cirúrgico imediato",
      "Devolve o volume perdido nas maçãs do rosto",
      "Suaviza o bigode chinês ao tracionar os tecidos faciais",
      "Define o contorno lateral do rosto",
      "Confere sofisticação e rejuvenescimento natural"
    ],
    indications: "Indicado para pessoas com perda de volume e sustentação na face média (derretimento facial) ou para quem deseja bochechas mais delineadas e projetadas.",
    category: "facial",
    whatsappText: "Olá Jack, quero saber mais sobre o Preenchimento de Malar."
  },
  {
    id: "olheiras",
    name: "Preenchimento de Olheiras",
    subtitle: "Redução do olhar profundo e cansado",
    description: "O preenchimento de olheiras estruturais/profundas utiliza ácido hialurônico de baixa densidade para nivelar a depressão existente sob os olhos. Esse tratamento melhora a sombra escura causada pelo sulco lacrimal profundo, suavizando o olhar cansado e iluminando a região periocular.",
    howItWorks: [
      "Aplicação de anestésico e introdução delicada do preenchedor via microcânula na região profunda da olheira.",
      "O ácido hialurônico é distribuído uniformemente para evitar irregularidades.",
      "A depressão é preenchida, reduzindo a sombra sob as pálpebras inferiores.",
      "Resultados imediatos com duração de 9 a 12 meses."
    ],
    benefits: [
      "Suavização imediata da olheira profunda",
      "Diminuição do aspecto de cansaço ou noite mal dormida",
      "Melhora da textura da pele sob os olhos",
      "Resultados delicados, naturais e elegantes",
      "Rápido e sem necessidade de repouso"
    ],
    indications: "Indicado para quem possui a calha lacrimal funda ou olheiras estruturais que formam sombras e conferem olhar cansado permanente.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Preenchimento de Olheiras."
  },
  {
    id: "mandibula",
    name: "Preenchimento de Mandíbula",
    subtitle: "Definição do contorno e demarcação da mandíbula",
    description: "O Preenchimento de Mandíbula com ácido hialurônico redefine o contorno facial, criando uma linha mandibular marcada, forte e harmoniosa. Esse procedimento melhora a transição entre o rosto e o pescoço, disfarçando a papada e valorizando a projeção do perfil.",
    howItWorks: [
      "Marcação e análise do ângulo mandibular e da linha de mandíbula.",
      "Injeção do preenchedor in pontos específicos para criar projeção e contorno marcantes.",
      "Alinhamento da linha mandibular da orelha até o queixo.",
      "Duração média do resultado entre 12 e 18 meses."
    ],
    benefits: [
      "Reestabelece e define o contorno do rosto",
      "Disfarça a papada e a flacidez do terço inferior",
      "Traz mais harmonia e projeção para o perfil facial",
      "Resultados imediatos e de alta durabilidade",
      "Procedimento seguro realizado em consultório"
    ],
    indications: "Indicado para quem tem o contorno facial pouco definido, mandíbula curta ou deseja um perfil mais marcante e harmonizado.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de realizar o Preenchimento de Mandíbula."
  },
  {
    id: "queixo",
    name: "Preenchimento de Queixo (Mento)",
    subtitle: "Harmonização do perfil e alongamento facial",
    description: "O preenchimento de mento (queixo) ajusta a projeção, largura e altura do queixo usando ácido hialurônico. É fundamental para equilibrar o perfil facial (perfilometria), alongar rostos arredondados e trazer proporcionalidade estética em relação ao nariz e lábios.",
    howItWorks: [
      "Análise do perfil do paciente para calcular a projeção necessária.",
      "Injeção do produto na região do mento para projetar para a frente ou alongar para baixo.",
      "Modelagem fina para assegurar simetria com a mandíbula.",
      "Duração de 12 a 18 meses."
    ],
    benefits: [
      "Melhora instantânea do perfil do rosto",
      "Alonga e afina rostos redondos de forma sutil",
      "Harmoniza a proporção entre nariz, boca e queixo",
      "Procedimento rápido e indolor com anestésico",
      "Alta durabilidade e excelente contorno"
    ],
    indications: "Indicado para pessoas com queixo retraído (retrognatismo), queixo curto ou que queiram maior definição e alongamento facial.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Preenchimento de Queixo."
  },
  {
    id: "bioestimulador-colageno-facial",
    name: "Bioestimulador de Colágeno Facial",
    subtitle: "Tratamento profundo da flacidez e recuperação da firmeza cutânea",
    description: "Os Bioestimuladores de Colágeno (como Sculptra ou Radiesse) são injetáveis que ativam os fibroblastos do próprio corpo a produzirem colágeno novo de forma progressiva. Trata a flacidez de dentro para fora, melhorando a espessura e a firmeza da pele, devolvendo o contorno original do rosto de forma natural.",
    howItWorks: [
      "A substância é aplicada com cânula na derme profunda em formato de leque.",
      "Nos dias seguintes, inicia-se uma resposta inflamatória subclínica e controlada.",
      "O organismo começa a sintetizar colágeno novo ao longo das semanas.",
      "Os resultados tornam-se visíveis após 30 a 60 dias, melhorando continuamente por até 6 meses."
    ],
    benefits: [
      "Aumento significativo da firmeza e elasticidade da pele",
      "Efeito lifting gradual e natural, sem volumizar o rosto",
      "Melhora na espessura da pele fina e flácida",
      "Durabilidade superior (resultados duram até 24 meses)",
      "Reduz rugas finas e melhora a textura geral da pele"
    ],
    indications: "Indicado para pessoas a partir dos 30 anos que começam a notar flacidez facial, perda de elasticidade e desabamento do contorno do rosto.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de fazer o Bioestimulador de Colágeno Facial."
  },
  {
    id: "peeling",
    name: "Peeling Químico",
    subtitle: "Renovação celular profunda, clareamento de manchas e textura lisa",
    description: "O Peeling Químico consiste na aplicação de ácidos específicos sobre a pele para remover as camadas danificadas através da descamação. O procedimento estimula a renovação celular, promove o clareamento de melasma e manchas solares, atenua cicatrizes de acne e devolve um brilho radiante e uniforme à pele.",
    howItWorks: [
      "Higienização profunda e preparação da pele.",
      "Aplicação controlada da solução ácida (ácido glicólico, salicílico, retinóico, etc.).",
      "O ácido age por alguns minutos, provocando a renovação das camadas superficiais.",
      "Nos dias seguintes ocorre uma descamação controlada, revelando uma nova pele saudável."
    ],
    benefits: [
      "Clareia manchas de sol, melasma e marcas de acne",
      "Suaviza a textura da pele, poros dilatados e linhas finas",
      "Controla a oleosidade e previne cravos e espinhas",
      "Estimula a síntese de colágeno superficial",
      "Pele com brilho renovado, viço e uniformidade"
    ],
    indications: "Indicado para tratamento de melasma, hiperpigmentação pós-inflamatória, poros dilatados, acne ativa, cicatrizes superficiais e rejuvenescimento geral da pele.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma sessão de Peeling."
  },
  {
    id: "jato-de-plasma",
    name: "Jato de Plasma",
    subtitle: "Tecnologia avançada para rejuvenescer e reparar a pele",
    description: "O Jato de Plasma é uma tecnologia não invasiva que utiliza o plasma atmosférico para promover a regeneração tecidual, estimular a produção de colágeno, melhorar a textura da pele e tratar diversas alterações estéticas com precisão e segurança. É indicado para quem busca resultados visíveis com mínima agressão e rápida recuperação.",
    howItWorks: [
      "O equipamento emite uma pequena descarga de plasma que atinge a pele de forma controlada.",
      "O plasma forma microcanais e microagulhas de calor na pele, estimulando a contração imediata e ativando o processo de reparo.",
      "O organismo responde produzindo novas fibras de colágeno e elastina, renovando os tecidos e melhorando a firmeza e a textura.",
      "A pele se regenera de dentro para fora, com melhora gradual, natural e duradoura."
    ],
    benefits: [
      "Estimula a produção de colágeno e elastina",
      "Melhora a firmeza, elasticidade e textura da pele",
      "Promove ação lifting não cirúrgica",
      "Reduz linhas finas, rugas e flacidez",
      "Uniformiza o tom e a textura da pele",
      "Procedimento seguro, rápido e com mínima recuperação",
      "Resultados naturais, progressivos e duradouros"
    ],
    indications: "O Jato de Plasma é indicado para quem deseja tratar flacidez de pálpebras, rugas, cicatrizes de acne, estrias, manchas e poros dilatados, promovendo uma pele mais jovem e saudável.",
    category: "facial",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Jato de Plasma."
  },

  // CORPORAIS
  {
    id: "corrente-russa",
    name: "Corrente Russa",
    subtitle: "Eletroestimulação para tonificação e fortalecimento muscular",
    description: "A corrente russa é um tratamento estético de eletroestimulação de alta performance que promove contrações musculares intensas através de estímulos elétricos. É excelente para aumentar a força, melhorar o tônus e combater a flacidez muscular em áreas como abdômen, glúteos e pernas.",
    howItWorks: [
      "Eletrodos de silicone condutor são posicionados e fixados sobre o músculo a ser trabalhado.",
      "Uma corrente elétrica de média frequência controlada é enviada aos nervos motores do músculo.",
      "O músculo sofre contrações involuntárias rítmicas intensas, que recrutam mais fibras do que um exercício comum.",
      "Equivale a centenas de abdominais ou agachamentos em sessões de apenas 30 minutos."
    ],
    benefits: [
      "Fortalece e tonifica intensamente a musculatura",
      "Combate a flacidez muscular e melhora o contorno corporal",
      "Estimula a circulação sanguínea local e o fluxo linfático",
      "Ajuda no ganho de força e definição das pernas e glúteos",
      "Procedimento seguro, indolor e não invasivo"
    ],
    indications: "Indicado para quem deseja tonificar abdômen, pernas e bumbum, pós-parto (após liberação médica), ou como coadjuvante nos treinos para definição muscular.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de agendar sessões de Corrente Russa."
  },
  {
    id: "endolaser-corporal",
    name: "Endolaser Corporal",
    subtitle: "Tecnologia de fibra óptica para queima de gordura e flacidez extrema",
    description: "O endolaser corporal é um procedimento estético moderno e minimamente invasivo. Utiliza uma fibra óptica de laser inserida sob a pele para quebrar células de gordura localizada e promover uma retração cutânea extraordinária (efeito colagem da pele), tratando a flacidez corporal em uma única sessão.",
    howItWorks: [
      "Realiza-se uma anestesia local infiltrativa na região a ser tratada.",
      "Uma fibra de laser ultra-fina é introduzida delicadamente sob a pele.",
      "A energia térmica do laser liquefaz as células de gordura e aquece o colágeno.",
      "A pele se retrai imediatamente e o colágeno é estimulado intensamente nos meses seguintes."
    ],
    benefits: [
      "Destruição definitiva das células de gordura localizada",
      "Retração imediata da pele flácida (efeito colagem)",
      "Estimula produção massiva de novo colágeno",
      "Tratamento de alta eficácia em sessão única",
      "Rápida recuperação com menor desconforto comparado à cirurgia"
    ],
    indications: "Indicado para quem busca eliminar gordura localizada na barriga, flancos, interno de coxa ou braços, e possui flacidez de pele associada.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de saber mais informações sobre o Endolaser Corporal."
  },
  {
    id: "criolipolise-de-placas",
    name: "Criolipólise de Placas",
    subtitle: "Resfriamento controlado para eliminação de gordura localizada",
    description: "A criolipólise de placas é um tratamento não invasivo inovador que elimina a gordura localizada através do congelamento seletivo das células de gordura. As placas resfriam a região tratada sem a necessidade de vácuo ou sucção forte, tornando o procedimento confortável e seguro contra queimaduras, com excelentes resultados de perda de medidas.",
    howItWorks: [
      "As placas aplicadoras protegidas por membranas anticongelantes são fixadas na área tratada.",
      "As células de gordura são resfriadas a temperaturas negativas controladas.",
      "O resfriamento induz à apoptose (morte celular programada) das células de gordura.",
      "Nas semanas seguintes, o próprio corpo metaboliza e elimina a gordura de forma gradual."
    ],
    benefits: [
      "Redução acentuada de até 30% da gordura localizada na região por sessão",
      "Sem sucção, eliminando o risco de flacidez ou hematomas excessivos",
      "Procedimento totalmente seguro, não invasivo e indolor",
      "Diminuição visível de medidas e harmonização da silhueta",
      "Retorno imediato às atividades normais"
    ],
    indications: "Indicado para gordura localizada no abdômen, culotes, flancos, coxas, braços e gordura das costas (sutiã).",
    category: "corporal",
    whatsappText: "Olá Jack, quero saber como funciona a Criolipólise de Placas."
  },
  {
    id: "ultrassom-cavitacional",
    name: "Ultrassom Cavitacional",
    subtitle: "Lipo sem cortes para reduzir medidas rapidamente",
    description: "O ultrassom cavitacional (conhecido como lipocavitação) utiliza ondas sonoras de baixa frequência para explodir as células de gordura. É um método altamente eficaz e indolor para perda de gordura localizada, afinamento de cintura e redução de medidas em poucas sessões.",
    howItWorks: [
      "Aplicação de gel condutor na pele e movimentos circulares com o cabeçote do aparelho.",
      "As ondas de ultrassom criam microbolhas de ar no interior do tecido adiposo.",
      "A pressão faz com que essas bolhas implodam, rompendo a membrana das células de gordura.",
      "A gordura em estado líquido é eliminada pelo organismo através das vias linfáticas."
    ],
    benefits: [
      "Eliminação eficaz de gordura localizada nas primeiras sessões",
      "Excelente para redução imediata de medidas",
      "Totalmente não invasivo, sem agulhas ou dor",
      "Melhora a circulação local e o aspecto da pele",
      "Estimula a drenagem de toxinas do organismo"
    ],
    indications: "Ideal para gordura localizada no abdômen, culotes, flancos e coxas em pessoas que estão próximas do peso ideal mas têm gordura resistente.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Ultrassom Cavitacional."
  },
  {
    id: "radiofrequencia-corporal",
    name: "Radiofrequência Corporal",
    subtitle: "Combate à flacidez, celulite e estímulo de colágeno",
    description: "A radiofrequência é um tratamento consagrado que aquece as camadas profundas da pele a temperaturas em torno de 40°C. Esse aquecimento controlado contrai as fibras de colágeno existentes e estimula a fabricação de novas fibras, combatendo com maestria a flacidez cutânea e o aspecto casca de laranja da celulite.",
    howItWorks: [
      "O termômetro infravermelho monitora a temperatura da pele constantemente.",
      "O aplicador emite ondas eletromagnéticas que geram calor nas camadas profundas.",
      "Ocorre a retração imediata do colágeno e ativação da microcirculação.",
      "A longo prazo, a pele ganha sustentação, firmeza e densidade estrutural."
    ],
    benefits: [
      "Combate eficaz da flacidez da pele (braços, abdômen, coxas)",
      "Melhora visível da celulite e uniformidade da pele",
      "Estimula colágeno e elastina de forma prolongada",
      "Procedimento confortável, relaxante e não invasivo",
      "Sem agulhas, sem dor e sem recuperação necessária"
    ],
    indications: "Indicado para flacidez abdominal pós-emagrecimento, flacidez pós-parto, flacidez nos braços, pernas e tratamento de celulites.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de agendar sessões de Radiofrequência Corporal."
  },
  {
    id: "ozonioterapia",
    name: "Ozonioterapia",
    subtitle: "Saúde, imunidade e quebra de gordura localizada com ozônio medicinal",
    description: "A ozonioterapia utiliza uma mistura de ozônio e oxigênio medicinal. Aplicado localmente, promove a oxigenação profunda dos tecidos, estimula o sistema imunológico, combate a inflamação da celulite e auxilia na quebra de gordura de forma natural e sistêmica, melhorando também o bem-estar e a disposição.",
    howItWorks: [
      "O gás ozônio é preparado na concentração adequada para cada caso.",
      "São realizadas microinjeções locais na derme ou no tecido adiposo.",
      "O ozônio atua liberando oxigênio ativo, melhorando a circulação e combatendo radicais livres.",
      "Atua também danificando as membranas dos adipócitos, promovendo a eliminação de gordura."
    ],
    benefits: [
      "Poderosa ação anti-inflamatória e antioxidante natural",
      "Ajuda no combate à celulite dolorosa e compacta",
      "Facilita a lipólise (quebra de gordura localizada)",
      "Melhora a oxigenação e a textura geral da pele",
      "Aumenta a energia física, disposição e resposta imune"
    ],
    indications: "Indicado para quem busca tratamento de gordura localizada, celulite, modulação da imunidade, cicatrização e melhora do bem-estar geral.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de entender melhor e agendar uma sessão de Ozonioterapia."
  },
  {
    id: "criofrequencia",
    name: "Criofrequência",
    subtitle: "O choque térmico perfeito contra gordura e flacidez simultâneas",
    description: "A criofrequência combina o resfriamento extremo da ponteira externa (crio) com o calor intenso gerado pela radiofrequência nas camadas profundas (frequência). Este choque térmico desestabiliza as células de gordura e tensiona a pele de imediato, sendo um tratamento premium para gordura e flacidez no mesmo protocolo.",
    howItWorks: [
      "O cabeçote resfria a epiderme até -10°C, anestesiando a pele e protegendo-a.",
      "Ao mesmo tempo, ondas eletromagnéticas aquecem a derme profunda a até 60°C.",
      "Esse choque térmico promove uma contração imediata do colágeno (efeito cinderela).",
      "Além disso, causa a destruição (apoptose) de células de gordura por choque de temperatura."
    ],
    benefits: [
      "Tratamento 2 em 1: combate flacidez e gordura na mesma sessão",
      "Efeito lifting corporal imediato e duradouro",
      "Super confortável devido ao resfriamento congelante da ponteira",
      "Melhora extraordinária do contorno corporal",
      "Não invasivo, sem agulhas e sem inatividade"
    ],
    indications: "Indicado para quem sofre com flacidez e gordura localizada associadas na mesma região, como abdômen flácido, braços ('tchauzinho') e interno de coxa.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de agendar uma Criofrequência."
  },
  {
    id: "ledterapia-corporal",
    name: "LEDterapia Corporal",
    subtitle: "Fotoestimulação celular para circulação, celulite e regeneração",
    description: "A LEDterapia corporal utiliza a fotobiomodulação por luzes de LED com comprimentos de onda específicos (vermelho, infravermelho e azul). Estimula as mitocôndrias das células a produzirem mais energia, melhorando o colágeno, reduzindo a retenção de líquidos, clareando manchas e acelerando a recuperação de tecidos.",
    howItWorks: [
      "O painel ou placa de LED é posicionado a uma distância segura da pele.",
      "A luz penetra nas camadas da pele, sendo absorvida pelos fotorreceptores celulares.",
      "Acelera a síntese de colágeno, melhora a circulação local e reduz inflamações.",
      "O procedimento é 100% indolor, relaxante e seguro."
    ],
    benefits: [
      "Estimula a regeneração de tecidos e colágeno",
      "Reduz retenção de líquidos e inchaço corporal",
      "Ação anti-inflamatória, excelente contra celulite e dor",
      "Pele com melhor textura, viço e brilho",
      "Ideal para acelerar cicatrização pós-procedimentos"
    ],
    indications: "Indicado para tratamento pós-operatório, melhora da celulite inflamatória, dores musculares leves, estrias e regeneração cutânea.",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de saber mais sobre a LEDterapia Corporal."
  },
  {
    id: "vacoterapia",
    name: "Vacoterapia (Vaco)",
    subtitle: "Massagem modeladora mecânica profunda contra celulite e inchaço",
    description: "A vacoterapia (ou endermologia) utiliza um equipamento de pressão negativa que suga e massageia a pele vigorosamente. Esse movimento estimula a circulação linfática, desfaz nódulos de celulite dura, elimina toxinas acumuladas e modela os contornos corporais.",
    howItWorks: [
      "A ventosa do aparelho realiza uma sucção controlada na pele, formando uma prega cutânea.",
      "O cabeçote desliza na direção dos gânglios linfáticos para promover drenagem.",
      "A massagem profunda quebra traves fibróticas que causam os furinhos da celulite.",
      "Estimula a eliminação natural de líquidos e toxinas retidos."
    ],
    benefits: [
      "Diminuição acentuada do aspecto casca de laranja da celulite",
      "Poderosa ação de drenagem linfática mecânica",
      "Modela e esculpe o contorno do bumbum e coxas",
      "Alivia a retenção de líquidos e o inchaço nas pernas",
      "Melhora o metabolismo local do tecido de gordura"
    ],
    indications: "Indicado para tratamento de celulites de todos os graus, retenção de líquidos crônica, modelagem de glúteos e pós-operatório (com indicação).",
    category: "corporal",
    whatsappText: "Olá Jack, gostaria de fazer sessões de Vacoterapia."
  },

  // INJETÁVEIS CORPORAIS
  {
    id: "preenchimento-de-gluteo",
    name: "Preenchimento de Glúteo (Harmonização Glútea)",
    subtitle: "Aumento de volume, projeção e correção de depressões laterais",
    description: "O Preenchimento de Glúteo (ou Harmonização Glútea) é um procedimento estético avançado que utiliza preenchedores de ácido hialurônico corporal de alta performance. Permite aumentar o volume do bumbum, melhorar a projeção vertical, empinar o contorno e preencher as depressões trocantéricas (laterais), harmonizando as curvas de forma imediata e personalizada.",
    howItWorks: [
      "Realiza-se anestesia local para total conforto e segurança da paciente.",
      "O preenchedor é injetado profundamente no tecido subcutâneo com microcânula adequada.",
      "O produto é distribuído estrategicamente para preencher vazios laterais e projetar o topo.",
      "O resultado é imediato, com contorno esculpido e simétrico. Duração de 12 a 18 meses."
    ],
    benefits: [
      "Aumento imediato de volume e projeção do bumbum",
      "Preenchimento e correção de depressões laterais indesejadas",
      "Bumbum empinado e com formato mais arredondado",
      "Procedimento seguro, sem necessidade de internação ou cirurgia",
      "Recuperação rápida e resultados progressivos naturais"
    ],
    indications: "Indicado para mulheres e homens que desejam aumentar o volume dos glúteos, empinar o bumbum, corrigir assimetrias ou preencher o desnível lateral do quadril.",
    category: "injetavel",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Preenchimento de Glúteo."
  },
  {
    id: "enzimas-gordura-localizada",
    name: "Enzimas para Gordura Localizada",
    subtitle: "Aplicação de mesoterapia lipolítica para redução de medidas",
    description: "A aplicação de enzimas para gordura localizada consiste na injeção de substâncias ativas (lipolíticos) que aceleram a quebra da gordura e a eliminação do tecido adiposo em regiões difíceis. É o tratamento ideal para gordura resistente na barriga, flancos, culotes e costas de forma focada.",
    howItWorks: [
      "As enzimas são selecionadas de forma personalizada (lipolíticas, aceleradoras).",
      "Aplica-se o produto através de microagulhas finas diretamente na camada de gordura.",
      "Os ativos agem dissolvendo as membranas das células de gordura (adipócitos).",
      "A gordura destruída é metabolizada e eliminada pelo sistema linfático e excretor."
    ],
    benefits: [
      "Ação direta e localizada sobre a gordura teimosa",
      "Redução acentuada de medidas e centímetros na área tratada",
      "Acelera o metabolismo local de queima de gordura",
      "Procedimento rápido (cerca de 15 minutos)",
      "Recuperação tranquila, sem interromper atividades diárias"
    ],
    indications: "Indicado para pessoas que já praticam atividades físicas mas têm gordura localizada teimosa no abdômen, culote, flancos, costas ou interno de coxa.",
    category: "injetavel",
    whatsappText: "Olá Jack, gostaria de agendar a aplicação de Enzimas para Gordura Localizada."
  },
  {
    id: "enzimas-para-flacidez",
    name: "Enzimas para Flacidez",
    subtitle: "Coquetel tensor injetável para recuperar a firmeza da pele",
    description: "O tratamento injetável para flacidez utiliza um coquetel de enzimas tensoras, aminoácidos e estimuladores de colágeno (como DMAE, silício orgânico e colágeno). A injeção direta na pele flácida estimula a sustentação, melhora a elasticidade celular e promove um efeito firmador imediato e progressivo.",
    howItWorks: [
      "Prepara-se um mesococktail tensor personalizado para a área afetada.",
      "As enzimas são injetadas de forma intradérmica superficial na pele flácida.",
      "Os ativos estimulam a contração das fibras e a produção de novo colágeno.",
      "A pele recupera a espessura ideal, firmeza e viço gradualmente."
    ],
    benefits: [
      "Aumento imediato da firmeza e do tônus da pele",
      "Estímulo na fabricação de colágeno e elastina natural",
      "Reduz a flacidez em áreas como abdômen ('umbigo triste'), pernas e braços",
      "Melhora na textura e elasticidade da pele flácida",
      "Rápido e sem necessidade de repouso"
    ],
    indications: "Indicado para flacidez de pele abdominal pós-gestação, flacidez pós-lipoaspiração, interno de coxa e flacidez nos braços.",
    category: "injetavel",
    whatsappText: "Olá Jack, quero saber sobre as Enzimas para Flacidez."
  },
  {
    id: "enzimas-para-celulite",
    name: "Enzimas para Celulite",
    subtitle: "Injetáveis focados em quebrar fibroses e drenar nódulos",
    description: "O protocolo de enzimas para celulite utiliza substâncias venotônicas, drenantes e lipolíticas injetadas sob a pele. Elas atuam destruindo as traves fibróticas que puxam a pele para baixo (causando os furinhos), reduzem o edema local e melhoram a circulação sanguínea, trazendo uma pele lisa de volta.",
    howItWorks: [
      "Os ativos são selecionados conforme o grau e tipo de celulite do paciente.",
      "O coquetel é injetado diretamente nos gânglios e nódulos de celulite.",
      "O produto age amolecendo o tecido fibroso e ativando a microcirculação local.",
      "Os gânglios inflamatórios diminuem e a ondulação cutânea se suaviza."
    ],
    benefits: [
      "Suaviza intensamente os furinhos e irregularidades da pele",
      "Reduz a dor local causada pela celulite compacta e inflamatória",
      "Melhora a circulação local e diminui a retenção de líquidos",
      "Pele com toque macio, firmeza e aparência uniforme",
      "Resultados rápidos visíveis em poucas sessões"
    ],
    indications: "Indicado para celulite graus I, II e III nas regiões das coxas, glúteos e pernas.",
    category: "injetavel",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Enzimas de Celulite."
  },
  {
    id: "peim-vasinhos",
    name: "PEIM (Secagem de Vasinhos)",
    subtitle: "Procedimento Estético Injetável para Microvasos nas pernas",
    description: "O PEIM (Procedimento Estético Injetável para Microvasos) é o tratamento ideal para eliminar aqueles vasinhos vermelhos e roxos das pernas (telangiectasias). Utiliza a aplicação de uma substância esclerosante diretamente no vaso, fazendo com que ele se feche e seja absorvido pelo próprio corpo, devolvendo a beleza e a saúde às pernas.",
    howItWorks: [
      "Higienização rigorosa da pele e identificação dos microvasos.",
      "Com uma agulha extremamente fina (de insulina), injeta-se o esclerosante no vasinho.",
      "A substância provoca uma reação inflamatória inócua na parede interna do vaso.",
      "O vaso se fecha, o sangue é desviado para vias saudáveis e o vasinho desaparece nas semanas seguintes."
    ],
    benefits: [
      "Eliminação visível de vasinhos vermelhos e roxos",
      "Pernas esteticamente limpas, uniformes e bonitas",
      "Procedimento rápido, seguro e realizado em consultório",
      "Melhora a sensação de peso e cansaço nas pernas",
      "Mínimo desconforto (agulhas ultra-finas)"
    ],
    indications: "Indicado para pessoas que apresentam microvasos (telangiectasias ou aranhas vasculares) nas pernas, coxas e panturrilhas.",
    category: "injetavel",
    whatsappText: "Olá Jack, gostaria de agendar uma sessão de PEIM para secagem de vasinhos."
  },
  {
    id: "pernas-ganho-massa",
    name: "Pernas (Ganho de Massa com Injetável)",
    subtitle: "Injetáveis de hipertrofia para fortalecimento e volume muscular das pernas",
    description: "Este tratamento inovador utiliza substâncias injetáveis compostas de aminoácidos, precursores de síntese proteica e BCAAs que estimulam diretamente a hipertrofia e a recuperação das fibras musculares das pernas. É o empurrão ideal para quem treina pesado e deseja acelerar o volume e a definição de coxas e panturrilhas.",
    howItWorks: [
      "O coquetel hipertrófico é injetado intramuscular nos principais ventres musculares da perna.",
      "Os aminoácidos são absorvidos de forma direta pela fibra do músculo.",
      "A síntese de proteínas musculares é otimizada, acelerando a reconstrução pós-treino.",
      "Potencializa intensamente os treinos de força realizados na mesma semana."
    ],
    benefits: [
      "Acelera o ganho de massa magra e volume muscular nas pernas",
      "Aumenta a força física e a resistência durante os treinos",
      "Melhora o contorno, contornos e definição muscular das coxas",
      "Reduz a fadiga muscular pós-treino intenso",
      "Tratamento 100% seguro com substâncias aprovadas"
    ],
    indications: "Indicado para praticantes de atividade física que buscam otimizar o ganho de massa muscular e a definição de pernas e coxas resistentes.",
    category: "injetavel",
    whatsappText: "Olá Jack, quero saber como funciona o Ganho de Massa com Injetável nas pernas."
  },
  {
    id: "plasma-gel",
    name: "Plasma Gel (Bioestimulador)",
    subtitle: "Volume e regeneração com o poder autólogo do seu próprio sangue",
    description: "O Plasma Gel é um preenchedor e bioestimulador autólogo de última geração. É obtido através da coleta e processamento do próprio sangue do paciente. O plasma é transformado em gel termo-estabilizado, rico em plaquetas e fatores de crescimento, ideal para dar volume e estimular a regeneração celular profunda de forma natural e sem riscos de rejeição.",
    howItWorks: [
      "Realiza-se uma coleta de sangue comum do próprio paciente.",
      "O sangue é centrifugado para isolar o plasma rico em plaquetas (PRP).",
      "O plasma passa por aquecimento em equipamento especial para ganhar consistência de gel.",
      "O gel autólogo é injetado no bumbum ou rosto para volumização e bioestimulação de colágeno."
    ],
    benefits: [
      "Preenchedor 100% natural e biocompatível, sem risco de alergias",
      "Rico em fatores de crescimento que estimulam colágeno novo",
      "Proporciona volumização suave, hidratação profunda e regeneração",
      "Pele incrivelmente firme, lisa e uniforme pós-tratamento",
      "Excelente custo-benefício para volumização corporal"
    ],
    indications: "Indicado para volumização e harmonização de glúteos, preenchimento de flacidez corporal e rejuvenescimento geral da pele de forma autóloga.",
    category: "injetavel",
    whatsappText: "Olá Jack, gostaria de agendar uma avaliação para Plasma Gel."
  },

  // CLAREAMENTOS ESTÉTICOS
  {
    id: "clareamento-intimo",
    name: "Clareamento Íntimo",
    subtitle: "Clareamento seguro e uniforme da região íntima e virilha",
    description: "O Clareamento Íntimo utiliza peelings químicos específicos desenvolvidos exclusivamente para peles sensíveis. O tratamento remove as camadas hiperpigmentadas das regiões interna da coxa, virilha e região perianal, devolvendo a tonalidade natural da pele com total segurança, conforto e privacidade.",
    howItWorks: [
      "Avaliação atenta da pele da região íntima e do nível de pigmentação.",
      "Aplicação de peelings químicos com ácidos suaves que inibem a melanina.",
      "Uso de máscaras clareadoras hidratantes para acalmar a pele sensível.",
      "Orientação de cuidados específicos pós-sessão de uso home-care."
    ],
    benefits: [
      "Uniformiza a coloração e clareia áreas escurecidas",
      "Remove a hiperpigmentação pós-depilação ou atrito",
      "Fórmula suave que não agride nem queima a pele sensível",
      "Melhora o aspecto estético geral e a autoestima íntima",
      "Resultados graduais seguros e duradouros"
    ],
    indications: "Indicado para pessoas que apresentam escurecimento na virilha, grandes lábios, região perianal ou interno de coxas devido ao atrito de roupas ou depilação.",
    category: "clareamento",
    whatsappText: "Olá Jack, gostaria de informações sobre o Clareamento Íntimo."
  },
  {
    id: "clareamento-axilas",
    name: "Clareamento de Axilas",
    subtitle: "Adeus axilas escuras e manchadas",
    description: "O tratamento para Clareamento de Axilas combina peelings suaves com ativos clareadores que combatem o escurecimento provocado por atrito, lâminas ou desodorantes. Renova as células superficiais da pele, trazendo suavidade e tom uniforme de volta às axilas.",
    howItWorks: [
      "Higienização local e aplicação do peeling químico clareador.",
      "O produto age controladamente, inibindo os melanócitos da região.",
      "Aplicação de ativos calmantes e regeneradores da pele.",
      "O clareamento ocorre nas semanas seguintes conforme a renovação celular."
    ],
    benefits: [
      "Clareamento uniforme e eliminação de manchas escuras nas axilas",
      "Melhora a textura áspera da pele provocada por lâminas",
      "Reduz a sensibilidade e inflamação do local",
      "Liberdade para levantar os braços com total segurança e confiança",
      "Rápido, prático e indolor"
    ],
    indications: "Indicado para quem tem axilas escurecidas ou manchadas pós-depilação e quer resgatar o tom uniforme da pele.",
    category: "clareamento",
    whatsappText: "Olá Jack, gostaria de agendar sessões de Clareamento de Axilas."
  }
];

export const bestSellersIds = [
  "preenchimento-de-gluteo",
  "pernas-ganho-massa",
  "peim-vasinhos",
  "enzimas-gordura-localizada",
  "enzimas-para-celulite",
  "endolaser-corporal"
];
