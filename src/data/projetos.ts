// ==========================================================
// PROJETOS EM DESTAQUE
// Só projetos públicos, que qualquer pessoa pode abrir e
// conferir. A ordem aqui é a ordem das colunas na seção.
//
// Bilíngue como em experiencia.ts: descricao e papel vêm como
// { pt, en }; stack e links (URLs) são iguais nos dois idiomas.
// Se um link cair, é só remover o item daqui.
//
// `imagem` é opcional: o print fica em public/ e o caminho
// aponta para lá (ex.: '/nome.png').
// ==========================================================
import type { Projeto } from '../types'

export const projetos: Projeto[] = [
  {
    id: 'agregador-de-pesquisas',
    nome: 'Agregador de Pesquisas',
    imagem: '/logo_poder_dark.png',
    imagemClara: '/logo_poder_light.png',
    imagemAjuste: 'conter',
    imagemFundo: '#121820',
    imagemFundoClara: '#d6e2e9',
    empresa: 'Poder360 · Drive',
    descricao: {
      pt: 'Plataforma pública que reúne e compara pesquisas eleitorais.',
      en: 'Public platform that gathers and compares electoral polls.',
    },
    papel: {
      pt: 'Fiz a V2 do sistema, tanto a parte pública quanto a administrativa, e reduzi em **90%** o tempo de resposta do servidor: de 25~30s para 3~5s.',
      en: "I built the system's V2, covering both the public side and the admin side, and cut server response time by **90%**: from 25~30s to 3~5s.",
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
    imagem: '/painel_de_energia.png',
    empresa: 'Poder360 · Especiais',
    descricao: {
      pt: 'Página especial feita em parceria com a Eneva: explica a operação de energia solar e traz um dashboard público, em tempo real, da geração.',
      en: 'Special page built in partnership with Eneva: it explains the solar power operation and features a public, real-time dashboard of the generation.',
    },
    papel: {
      pt: 'Atuei como Tech Lead: liderei o time e desenvolvi o back-end que lê os dados do banco, alimenta o painel e os widgets do Poder360.',
      en: 'I worked as Tech Lead: I led the team and built the back-end that reads the data from the database and feeds the dashboard and the Poder360 widgets.',
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
    imagem: '/shell_box.jpeg',
    empresa: 'Stefanini',
    descricao: {
      pt: 'Aplicativo da Shell para motoristas.',
      en: "Shell's app for drivers.",
    },
    papel: {
      pt: 'Desenvolvi o back-end do aplicativo.',
      en: "I built the app's back-end.",
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
