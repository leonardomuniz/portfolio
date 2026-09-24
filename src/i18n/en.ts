// ==========================================================
// TEXTS — English
// Mirror of pt.ts: same keys, same shape — there is no
// fallback layer, so a missing key renders as undefined.
// ==========================================================
import type { Textos } from '../types'

export const en = {
  meta: {
    titulo: 'Léo Muniz — Back-end Developer',
    descricao:
      'Portfolio of Léo Muniz, a back-end developer with 4+ years in Node.js.',
  },

  navbar: {
    trajetoria: 'background',
    experiencia: 'experience',
    projetos: 'projects',
    contato: 'contact',
    menu: 'menu',
    fechar: 'close',
    trocarIdioma: 'Switch to Portuguese',
    temaClaro: 'Switch to the light theme',
    temaEscuro: 'Switch to the dark theme',
  },

  hero: {
    saudacao: "Hi, I'm Léo Muniz",
    cargo: '// back-end developer · node.js',
    descricao:
      'Leonardo Campos Muniz, 4+ years building back-ends in Node.js — ' +
      'the most recent as Tech Lead of a squad of 4. My work is usually the same: ' +
      'take a system that already exists, is slow or hard to maintain, and hand it ' +
      'back fast, tested and built to last.',
    faleComigo: 'Get in Touch',
    baixarCurriculo: 'Download Resume',
    curriculo: '/curriculo-leonardo-muniz-en.pdf',
  },

  trajetoria: {
    titulo: 'Background',
    tituloStack: 'Tech Stack',
    paragrafos: [
      'I joined Stefanini in 2022 as a junior and left as a mid-level developer, ' +
        'working on a checkout that serves **more than 20 million** people and on ' +
        "Ford's payment engine, translated from a mainframe. At Poder360 I came in " +
        'as a senior and took over technical leadership of a squad of 4.',
      'The pattern repeats: a system already in production, slow or hard to evolve, ' +
        "that has to stay up while it's rebuilt. That's the kind of problem I like " +
        'to solve.',
    ],
    fatos: [
      { rotulo: 'experience', valor: '4+ years in back-end' },
      { rotulo: 'education', valor: 'Technologist Degree in Internet Systems — IFB' },
      { rotulo: 'languages', valor: 'Portuguese (native) · English (advanced)' },
      { rotulo: 'location', valor: '🇧🇷 - Brasília, DF (open to remote and hybrid)' },
    ],
  },

  experiencia: {
    titulo: 'Experience',
    atual: 'present',
  },

  projetos: {
    titulo: 'Projects',
  },

  contato: {
    titulo: 'Get in Touch',
    intro: 'Direct channels — I answer quickly on all of them.',
    copiado: '{canal} copied',
    canais: {
      whatsapp: { label: 'whatsapp', acao: 'open chat' },
      email: { label: 'e-mail', acao: 'click to copy' },
      linkedin: { label: 'linkedin', acao: 'view profile' },
      github: { label: 'github', acao: 'view repositories' },
    },
  },
} satisfies Textos
