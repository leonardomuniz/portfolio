// ==========================================================
// TEXTOS — português (idioma padrão)
// Só cópia de interface. O que é conteúdo estruturado (empresas,
// cargos, destaques, categorias de stack) mora em src/data com
// as duas línguas lado a lado, pra não duplicar datas e ordem.
// Toda chave daqui tem que existir igual em en.ts.
// ==========================================================
import type { Textos } from '../types'

export const pt = {
  meta: {
    titulo: 'Léo Muniz — Desenvolvedor Back-end',
    descricao:
      'Portfólio de Léo Muniz, desenvolvedor back-end com mais de 4 anos em Node.js.',
  },

  navbar: {
    trajetoria: 'trajetória',
    experiencia: 'experiência',
    projetos: 'projetos',
    contato: 'contato',
    menu: 'menu',
    fechar: 'fechar',
    trocarIdioma: 'Switch to English',
    temaClaro: 'Mudar para o tema claro',
    temaEscuro: 'Mudar para o tema escuro',
  },

  hero: {
    saudacao: 'Olá, eu sou o Léo Muniz',
    cargo: '// desenvolvedor back-end · node.js',
    descricao:
      'Leonardo Campos Muniz, 4+ anos construindo back-end em Node.js — ' +
      'os últimos como Tech Lead de uma squad de 4 pessoas. Meu trabalho costuma ' +
      'ser o mesmo: pegar um sistema que já existe, está lento ou difícil de ' +
      'manter, e devolver ele rápido, testado e pronto pra durar.',
    faleComigo: 'Fale Comigo',
    baixarCurriculo: 'Baixar Currículo',
    curriculo: '/curriculo-leonardo-muniz-pt.pdf',
  },

  trajetoria: {
    titulo: 'Trajetória',
    tituloStack: 'Tecnologias',
    paragrafos: [
      'Entrei na Stefanini em 2022 como júnior e saí como pleno, passando por um ' +
        'checkout que atende **mais de 20 milhões** de pessoas e pelo motor de pagamentos ' +
        'da Ford, traduzido de um mainframe. No Poder360, cheguei como sênior e ' +
        'assumi a liderança técnica de uma squad de 4 pessoas.',
      'O padrão se repete: um sistema que já está em produção, lento ou difícil de ' +
        'evoluir, e que precisa continuar de pé enquanto é reconstruído. É o tipo de ' +
        'problema que eu gosto de resolver.',
    ],
    fatos: [
      { rotulo: 'experiência', valor: '4+ anos em back-end' },
      { rotulo: 'formação', valor: 'Tecnologia em Sistemas para Internet — IFB' },
      { rotulo: 'idiomas', valor: 'Português nativo · Inglês avançado' },
      { rotulo: 'localização', valor: '🇧🇷 - Brasília, DF (aberto a remoto e híbrido)' },
    ],
  },

  experiencia: {
    titulo: 'Experiência',
    atual: 'atual',
  },

  projetos: {
    titulo: 'Projetos',
  },

  contato: {
    titulo: 'Fale Comigo',
    intro: 'Canais diretos — respondo rápido em todos eles.',
    copiado: '{canal} copiado',
    canais: {
      whatsapp: { label: 'whatsapp', acao: 'abrir conversa' },
      email: { label: 'e-mail', acao: 'clique para copiar' },
      linkedin: { label: 'linkedin', acao: 'ver perfil' },
      github: { label: 'github', acao: 'ver repositórios' },
    },
  },
} satisfies Textos
