// ==========================================================
// EXPERIÊNCIA PROFISSIONAL
// Uma entrada por EMPRESA. Se houve progressão de cargo na
// mesma empresa, adicionar mais um item em `cargos` — nunca
// duplicar a empresa como se fossem duas passagens.
//
// Bilíngue: o que é texto vem como { pt, en } e o componente
// indexa pelo idioma atual. Datas, ordem e stack ficam fora
// disso, porque são iguais nos dois idiomas — assim não tem
// como as duas versões saírem de sincronia.
//
// Datas no formato 'AAAA-MM'. fim: null quando for o cargo
// atual (mostra "atual"/"present" e segue contando o tempo
// sozinho). A duração é calculada em src/utils/periodo.ts —
// não precisa escrever o tempo de experiência manualmente.
//
// Ordem: mais recente primeiro, tanto nas empresas quanto
// dentro de `cargos`.
// ==========================================================
import type { EmpresaExperiencia } from '../types'

export const experiencia: EmpresaExperiencia[] = [
  {
    empresa: 'Poder360',
    local: { pt: 'Brasília · Presencial', en: 'Brasília · On-site' },
    stack: ['Node.js', 'Nest.js', 'TypeScript', 'Python', 'MongoDB', 'Redis', 'BullMQ', 'Docker', 'Kubernetes', 'Jenkins'],
    cargos: [
      {
        cargo: {
          pt: 'Desenvolvedor Full Stack Sênior',
          en: 'Senior Full Stack Developer',
        },
        inicio: '2025-05',
        fim: '2026-07',
        destaques: {
          pt: [
            'Reduzi em **mais de 95%** o tempo de geração de relatórios jornalísticos — de uma semana de trabalho manual para menos de **20 minutos** — com um dashboard em Nest.js e arquitetura de mensageria (BullMQ) que coleta os dados, gera os PDFs e dispara os e-mails de forma agendada.',
            'Derrubei em **90%** o tempo de resposta do servidor (de 25~30s para 3~5s) em uma base com **mais de 14 mil** pesquisas eleitorais, reestruturando os motores de busca, criando índices no MongoDB e cacheando as consultas com Redis.',
            'Desenvolvi um chatbot de IA especializado em notícias dos três poderes, com backend em Python, arquitetura RAG e técnicas de chunking sobre uma base de **mais de 50 mil** documentos.',
            'Liderei tecnicamente uma squad de **4 desenvolvedores** como Tech Lead, implantando gestão de backlog, sprint planning/review e 1:1 periódicos.',
            'Migrei o deploy de 3 sistemas críticos de processos manuais via SSH/PM2 para esteiras de CI/CD com Jenkins, Docker e Kubernetes, com rollback confiável.',
            'Aumentei a segurança da ingestão de dados do agregador de pesquisas eleitorais, reestruturando mais de 9 formulários com validação de entrada e saída, melhorias de UI/UX e gestão de acesso.',
          ],
          en: [
            'Cut newsroom report generation time by **more than 95%** — from a week of manual work to under **20 minutes** — with a Nest.js dashboard and a message-queue architecture (BullMQ) that collects the data, generates the PDFs and sends the e-mails on a schedule.',
            'Brought server response time down by **90%** (from 25~30s to 3~5s) on a database of **more than 14,000** electoral polls, by restructuring the search engines, adding MongoDB indexes and caching queries with Redis.',
            "Built an AI chatbot specialized in news about Brazil's three branches of government, with a Python backend, RAG architecture and chunking techniques over a base of **more than 50,000** documents.",
            'Led a squad of **4 developers** as Tech Lead, putting backlog management, sprint planning/review and regular 1:1s in place.',
            'Migrated the deployment of 3 critical systems from manual SSH/PM2 processes to CI/CD pipelines with Jenkins, Docker and Kubernetes, with reliable rollback.',
            'Hardened data ingestion on the electoral poll aggregator, reworking more than 9 forms with input and output validation, UI/UX improvements and access management.',
          ],
        },
      },
    ],
  },
  {
    empresa: 'Stefanini Brasil',
    local: { pt: 'Brasília · Remoto', en: 'Brasília · Remote' },
    stack: ['Node.js', 'TypeScript', 'AWS', 'DynamoDB', 'Terraform', 'Angular', 'Jest', 'Java', 'Spring', 'JUnit'],
    cargos: [
      {
        cargo: {
          pt: 'Desenvolvedor Back-end Pleno',
          en: 'Mid-level Back-end Developer',
        },
        inicio: '2023-10',
        fim: '2025-05',
        destaques: {
          pt: [
            'Refatorei o backoffice legado que atende **mais de 7 mil** postos em toda a América Latina, com Node.js, TypeScript e AWS SQS/DLQ sob os princípios de Clean Architecture.',
            'Atuei na modernização do motor de pagamentos da Ford — o sistema de empréstimo bancário com os lojistas —, ajudando a traduzir as regras de negócio de um mainframe para um sistema que atende todo o Brasil.',
            'Desenvolvi o motor de pagamentos internacional em arquitetura de microsserviços, implementando as Lambdas que lidavam com as transações (AWS Lambda e DynamoDB).',
            'Entreguei a funcionalidade de pagamento via PIX em tempo recorde, atuando da concepção ao acompanhamento da homologação e implantação nos ambientes de produção do cliente.',
            'Fui responsável por 15% de uma suíte com mais de **1.500 testes** unitários (Node.js, TypeScript, Jest), garantindo entregas estáveis em produção.',
          ],
          en: [
            'Refactored the legacy backoffice serving **more than 7,000** stations across Latin America, with Node.js, TypeScript and AWS SQS/DLQ under Clean Architecture principles.',
            "Worked on modernizing Ford's payment engine — the financing system used with dealerships — helping translate business rules from a mainframe into a system that serves all of Brazil.",
            'Developed the international payment engine on a microservices architecture, implementing the Lambdas that handled the transactions (AWS Lambda and DynamoDB).',
            "Delivered PIX payment support in record time, from design through to following sign-off and rollout in the client's production environments.",
            'Owned 15% of a suite of more than **1,500 unit tests** (Node.js, TypeScript, Jest), keeping releases stable in production.',
          ],
        },
      },
      {
        cargo: {
          pt: 'Desenvolvedor Full Stack Júnior',
          en: 'Junior Full Stack Developer',
        },
        inicio: '2022-01',
        fim: '2023-09',
        destaques: {
          pt: [
            'Aumentei a cobertura de testes E2E de **25% para 74%**, sendo o responsável pela refatoração de mais de 140 scrapers do aplicativo Shell Box.',
            'Trabalhei no checkout de pagamentos que atende mais de **20 milhões** de usuários, migrando partes de um monólito e separando contextos com DDD em uma arquitetura de microsserviços.',
            'Liderei a entrega da funcionalidade de controle de liquidez e taxas para donos de postos, **25% mais rápido** que o esperado e zerando o backlog, em contato direto com POs e tech leads de outras squads.',
          ],
          en: [
            'Raised E2E test coverage from **25% to 74%**, owning the refactor of more than 140 scrapers in the Shell Box app.',
            'Worked on the payment checkout serving more than **20 million** users, migrating parts of a monolith and separating contexts with DDD in a microservices architecture.',
            'Led the delivery of liquidity and fee control for station owners, **25% faster** than expected and clearing the backlog, working directly with POs and tech leads from other squads.',
          ],
        },
      },
    ],
  },
]
