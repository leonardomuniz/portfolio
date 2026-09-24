export type Idioma = 'pt' | 'en'

export interface Bilingue<T = string> {
  pt: T
  en: T
}

export interface Fato {
  rotulo: string
  valor: string
}

export interface Textos {
  meta: {
    titulo: string
    descricao: string
  }
  navbar: {
    trajetoria: string
    experiencia: string
    projetos: string
    contato: string
    menu: string
    fechar: string
    trocarIdioma: string
    temaClaro: string
    temaEscuro: string
  }
  hero: {
    saudacao: string
    cargo: string
    descricao: string
    faleComigo: string
    baixarCurriculo: string
    /** Caminho do PDF em public/, um por idioma. */
    curriculo: string
  }
  trajetoria: {
    titulo: string
    tituloStack: string
    paragrafos: string[]
    fatos: Fato[]
  }
  experiencia: {
    titulo: string
    atual: string
  }
  projetos: {
    titulo: string
  }
  contato: {
    titulo: string
    intro: string
    copiado: string
    canais: Record<CanalId, { label: string; acao: string }>
  }
}

export type CanalId = 'whatsapp' | 'email' | 'linkedin' | 'github'

export interface Canal {
  id: CanalId
  valor: string | Bilingue
  href: string
  externo?: boolean
  copiar?: string
}

export interface StackGrupo {
  id: string
  categoria: Bilingue
  itens: string[]
}

export interface Cargo {
  cargo: Bilingue
  inicio: string
  fim: string | null
  destaques: Bilingue<string[]>
}

export interface EmpresaExperiencia {
  empresa: string
  local: Bilingue
  stack: string[]
  cargos: Cargo[]
}

export interface ProjetoLink {
  rotulo: Bilingue
  href: string
}

export interface Projeto {
  /** Chave estável do projeto. */
  id: string
  /** Título mostrado abaixo da imagem. */
  nome: string
  empresa: string
  descricao: Bilingue
  /** O que eu fiz. Aceita `**destaque**` (ver TextoDestacado). */
  papel: Bilingue
  stack: string[]
  links: ProjetoLink[]
  /** Print do projeto; quando ausente, a janela não mostra imagem. */
  imagem?: string
  /** Versão da imagem para o tema claro; quando presente, `imagem` vale só para o tema escuro. */
  imagemClara?: string
  /** Como a imagem preenche o topo do card: 'cobrir' (padrão, corta) ou 'conter' (mostra inteira, ex.: logo). */
  imagemAjuste?: 'cobrir' | 'conter'
  /** Cor de fundo atrás da imagem quando ela é 'conter'. */
  imagemFundo?: string
  /** Cor de fundo no tema claro, quando há `imagemClara`. */
  imagemFundoClara?: string
}
