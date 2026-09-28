// ==========================================================
// PROJETOS EM DESTAQUE
// Só projetos públicos, que qualquer pessoa pode abrir e
// conferir. A ordem aqui é a ordem das colunas na seção.
//
// Bilíngue como em experiencia.ts: descricao e papel vêm como
// { pt, en }; stack e links (URLs) são iguais nos dois idiomas.
// Se um link cair, é só remover o item daqui.
//
// `descricao` diz o que é o produto. `papel` conta o meu
// trabalho em texto corrido — o problema, o que eu fiz e o
// resultado —, sem rótulos.
//
// Sem imagem de propósito: print, logo e banner brigavam com a
// paleta, e diagrama exporia a arquitetura de sistemas que não
// são meus. O card é texto, na linguagem de terminal do Hero.
// ==========================================================
import type { Projeto } from '../types'

export const projetos: Projeto[] = [
  {
    id: 'agregador-de-pesquisas',
    nome: 'Agregador de Pesquisas',
    empresa: 'Poder360 · Drive',
    descricao: {
      pt: 'Plataforma pública que reúne e compara pesquisas eleitorais.',
      en: 'Public platform that gathers and compares electoral polls.',
    },
    papel: {
      pt: 'As consultas levavam de 25 a 30 segundos numa base de **mais de 14 mil** pesquisas eleitorais. Fiz a V2 do site público e do painel administrativo: reestruturei a busca, criei índices no MongoDB e coloquei cache em Redis, derrubando o tempo de resposta em **90%**, para 3 a 5 segundos. Também refiz os formulários por onde as pesquisas entram no sistema, com validação e controle de acesso.',
      en: 'Queries took 25 to 30 seconds on a base of **more than 14,000** electoral polls. I built the V2 of the public site and the admin panel: I restructured the search, added MongoDB indexes and put a Redis cache in front of the queries, cutting response time by **90%**, down to 3–5 seconds. I also rebuilt the forms through which polls enter the system, with validation and access control.',
    },
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Redis'],
    links: [
      {
        rotulo: { pt: 'abrir o agregador', en: 'open the aggregator' },
        href: 'https://drive.poder360.com.br/agregador-de-pesquisas',
      },
    ],
  },
  {
    id: 'painel-eneva',
    nome: 'Painel de Geração de Energia',
    empresa: 'Poder360 · Especiais',
    descricao: {
      pt: 'Página especial, feita em parceria com a Eneva, sobre como a geração térmica garante a estabilidade do sistema elétrico brasileiro.',
      en: "Special page, built in partnership with Eneva, on how thermal generation keeps Brazil's power grid stable.",
    },
    papel: {
      pt: 'A página precisava mostrar em tempo real a geração de energia do país, com dados do ONS separados por fonte: hidráulica, térmica, eólica, solar e nuclear. Como Tech Lead, liderei o time e desenvolvi o back-end que lê esses dados do banco e abastece tanto o painel público quanto os widgets espalhados pelo site do Poder360.',
      en: "The page had to show Brazil's power generation in real time, with data from the national grid operator (ONS) broken down by source: hydro, thermal, wind, solar and nuclear. As Tech Lead, I led the team and built the back-end that reads this data from the database and feeds both the public dashboard and the widgets across Poder360's site.",
    },
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Python', 'Vite'],
    links: [
      {
        rotulo: { pt: 'abrir o painel', en: 'open the dashboard' },
        href: 'https://especiais.poder360.com.br/painel-geracao-energia',
      },
    ],
  },
  {
    id: 'shell-box',
    nome: 'Shell Box',
    empresa: 'Stefanini',
    descricao: {
      pt: 'App de pagamentos dos postos Shell: o motorista abastece, paga pelo celular e junta pontos.',
      en: "Shell's payment app for its gas stations: drivers fill up, pay from their phone and earn points.",
    },
    papel: {
      pt: 'No checkout de pagamentos, usado por **mais de 20 milhões** de usuários, ajudei a migrar partes do monólito para microsserviços, separando os contextos com DDD. A cobertura de testes E2E estava em **25%**: refatorei mais de 140 scrapers e ela chegou a **74%**.',
      en: 'On the payment checkout, used by **more than 20 million** users, I helped migrate parts of the monolith to microservices, separating contexts with DDD. E2E test coverage was at **25%**: I refactored more than 140 scrapers and brought it to **74%**.',
    },
    stack: ['Node.js', 'Express', 'TypeScript', 'AWS', 'SQS', 'Lambda', 'Terraform'],
    links: [
      {
        rotulo: { pt: 'site', en: 'website' },
        href: 'https://www.shell.com.br/motoristas/app-shell-box.html',
      },
      {
        rotulo: { pt: 'app (Google Play)', en: 'app (Google Play)' },
        href: 'https://play.google.com/store/apps/details?id=com.raizen.acelera&hl=pt_BR',
      },
    ],
  },
]
