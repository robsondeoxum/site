import { Service, FAQItem, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "buzios",
    title: "Jogo de Búzios",
    description: "Consulta realizada pelo Merindilogum (16 odus), com interpretação baseada na tradição dos Orixás e das Entidades, proporcionando direcionamentos claros para as diversas áreas da sua vida.",
    iconName: "Compass"
  },
  {
    id: "cartomancia",
    title: "Cartomancia",
    description: "Leitura profunda das cartas ciganas para auxiliar na compreensão de situações complexas, ciclos energéticos e tomadas de decisão importantes, trazendo visão espiritual imediata.",
    iconName: "Sparkles"
  },
  {
    id: "afetivo",
    title: "Questões Afetivas",
    description: "Atendimento sensível e voltado para quem busca orientação espiritual sobre relacionamentos, reconciliações saudáveis, harmonia de convivência e caminhos da vida amorosa.",
    iconName: "Heart"
  },
  {
    id: "prosperidade",
    title: "Prosperidade e Caminhos",
    description: "Direcionamento e orientação espiritual para momentos de transição profissional, novas oportunidades de negócios, organização financeira e abertura de novos caminhos prósperos.",
    iconName: "TrendingUp"
  },
  {
    id: "equilibrio",
    title: "Equilíbrio Espiritual",
    description: "Atendimento focado em seu fortalecimento pessoal, proteção, limpeza energética profunda de ambientes ou corpo, e harmonização espiritual contínua.",
    iconName: "ShieldCheck"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Como funciona a consulta on-line?",
    answer: "A consulta on-line é realizada com o mesmo respeito, dedicação e seriedade do atendimento presencial. É feita por meio de chamada de áudio ou vídeo (WhatsApp ou plataforma de sua preferência) com total sigilo e privacidade."
  },
  {
    question: "Como é feita a consulta do Jogo de Búzios?",
    answer: "A consulta é conduzida através do Merindilogum (os 16 búzios sagrados). Pela interpretação das caídas e dos Odus, estabelecemos a comunicação com as divindades e guias espirituais, trazendo respostas precisas para suas dúvidas."
  },
  {
    question: "Qual a diferença entre os Búzios e a Cartomancia?",
    answer: "O Jogo de Búzios é focado na sua conexão com os Orixás, analisando seu destino e orientando sobre energias profundas e limpezas necessárias. A Cartomancia (cartas ciganas) é excelente para entender o momento presente, influências de terceiros e escolhas imediatas do cotidiano."
  },
  {
    question: "Onde ocorrem os atendimentos presenciais?",
    answer: "Os atendimentos presenciais ocorrem na cidade do Rio de Janeiro (RJ) em um espaço discreto, seguro e confortável, com hora marcada previamente para garantir total privacidade e bem-estar."
  },
  {
    question: "Como agendo meu atendimento?",
    answer: "O agendamento é extremamente simples. Basta clicar em qualquer botão de WhatsApp neste site para falar diretamente comigo. Vamos escolher juntos o melhor horário e a modalidade (on-line ou presencial) que melhor atende você."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Mariana Silva",
    location: "Rio de Janeiro - RJ",
    text: "Encontrei no Robson um acolhimento verdadeiro e as respostas de que eu precisava em um momento muito delicado. Ele tem uma sensibilidade e respeito ímpares.",
    date: "Consulta recente"
  },
  {
    name: "Carlos Eduardo",
    location: "São Paulo - SP",
    text: "Minha consulta de búzios on-line superou todas as expectativas. Robson foi cirúrgico nas previsões e as orientações espirituais mudaram totalmente meus negócios para melhor.",
    date: "Consulta recente"
  },
  {
    name: "Beatriz Ribeiro",
    location: "Niterói - RJ",
    text: "A leitura de cartas ciganas me trouxe muita paz e clareza para tomar decisões importantes na minha vida profissional e afetiva. Indico de olhos fechados!",
    date: "Consulta recente"
  }
];

export const WHATSAPP_LINK = "https://wa.me/5521983949579?text=Ol%C3%A1%2C%20Robson.%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20e%20agendar%20uma%20consulta%20espiritual.";
export const PHONE_NUMBER = "(21) 98394-9579";
