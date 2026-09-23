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
  valor: string
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
