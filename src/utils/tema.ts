export type Tema = 'dark' | 'light'

const CHAVE = 'tema'

const COR_DA_BARRA: Record<Tema, string> = {
  dark: '#0B0F14',
  light: '#F2ECE1',
}

// Precisa bater com a duração de .trocando-tema no index.css.
const TRANSICAO_MS = 200
let timerTransicao: ReturnType<typeof setTimeout> | undefined


/**
 * Lê o tema atual a partir do `data-theme` do `<html>` — já aplicado
 * antes da primeira pintura pelo script inline do index.html.
 */
export function lerTema(): Tema {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}


/**
 * Devolve o tema oposto ao informado.
 */
export function outroTema(tema: Tema): Tema {
  return tema === 'dark' ? 'light' : 'dark'
}


/**
 * Aplica o tema no documento — classe de transição, `data-theme` e cor
 * da barra do navegador — e por padrão persiste a escolha.
 *
 * @param tema tema a aplicar
 * @param persistir `false` quando a troca veio do sistema operacional
 * (não é escolha do usuário, e gravar apagaria o "ainda não escolheu"
 * de que `escutarSistema` depende)
 */
export function aplicarTema(tema: Tema, persistir = true) {
  const html = document.documentElement

  html.classList.add('trocando-tema')
  clearTimeout(timerTransicao)
  timerTransicao = setTimeout(() => html.classList.remove('trocando-tema'), TRANSICAO_MS)

  html.dataset.theme = tema

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', COR_DA_BARRA[tema])

  if (!persistir) return
  try {
    localStorage.setItem(CHAVE, tema)
  } catch {
    // modo privado / storage bloqueado: o tema vale só nesta visita
  }
}

function jaEscolheu() {
  try {
    return localStorage.getItem(CHAVE) !== null
  } catch {
    return false
  }
}


/**
 * Ouve o tema do sistema operacional e chama `aoMudar` enquanto o
 * usuário não tiver escolhido um tema manualmente (depois disso, a
 * escolha dele manda).
 *
 * @returns função de limpeza do listener
 */
export function escutarSistema(aoMudar: (tema: Tema) => void) {
  const mq = window.matchMedia('(prefers-color-scheme: light)')

  function handler(evento: MediaQueryListEvent) {
    if (jaEscolheu()) return
    aoMudar(evento.matches ? 'light' : 'dark')
  }

  mq.addEventListener('change', handler)
  return () => mq.removeEventListener('change', handler)
}
