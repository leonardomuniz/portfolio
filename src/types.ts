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
    /** Texto alternativo do retrato ao lado do terminal. */
    fotoAlt: string
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
  /** Chave estável do projeto; também é o nome do arquivo no prompt do card. */
  id: string
  /** Título do card. */
  nome: string
  empresa: string
  /** O que é o produto, numa frase. */
  descricao: Bilingue
  /**
   * O que eu fiz, em texto corrido: o problema, o que eu fiz e o
   * resultado, sem rótulos. Aceita `**destaque**` (ver TextoDestacado).
   */
  papel: Bilingue
  stack: string[]
  links: ProjetoLink[]
}
