import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { pt } from './pt'
import { en } from './en'
import type { Idioma, Textos } from '../types'

const DICIONARIOS: Record<Idioma, Textos> = { pt, en }
const HTML_LANG: Record<Idioma, string> = { pt: 'pt-BR', en: 'en' }
const CHAVE = 'idioma'

interface IdiomaContextValor {
  idioma: Idioma
  textos: Textos
  trocarIdioma: () => void
}

const IdiomaContext = createContext<IdiomaContextValor | null>(null)


/**
 * Idioma inicial: a escolha salva manda; sem ela, vale o idioma do
 * navegador (português abre em português, qualquer outro em inglês).
 *
 * @returns 'pt' ou 'en'
 */
export function lerIdiomaInicial(): Idioma {
  try {
    const salvo = localStorage.getItem(CHAVE)
    if (salvo === 'pt' || salvo === 'en') return salvo
  } catch {
    // storage bloqueado: cai na detecção abaixo
  }

  const doNavegador = navigator.language || 'pt'
  return doNavegador.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}


/**
 * Provider de idioma (pt/en) via Context — dois idiomas e um
 * dicionário por arquivo não justificam uma lib de i18n. Mantém o
 * `<html lang>`, o título e a meta description sincronizados com o
 * idioma atual, e persiste a troca no localStorage.
 *
 * @param props.children árvore que passa a ter acesso a `useIdioma()`
 */
export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(lerIdiomaInicial)
  const textos = DICIONARIOS[idioma]

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[idioma]
    document.title = textos.meta.titulo

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', textos.meta.descricao)
  }, [idioma, textos])

  function trocarIdioma() {
    const novo = idioma === 'pt' ? 'en' : 'pt'
    setIdioma(novo)
    try {
      localStorage.setItem(CHAVE, novo)
    } catch {
      // modo privado: vale só nesta visita
    }
  }

  return (
    <IdiomaContext.Provider value={{ idioma, textos, trocarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  )
}


/**
 * Lê o idioma atual, os textos resolvidos e a função de troca do
 * `IdiomaContext`.
 *
 * @throws se chamado fora de `<IdiomaProvider>`
 */
export function useIdioma() {
  const contexto = useContext(IdiomaContext)
  if (!contexto) throw new Error('useIdioma() precisa estar dentro de <IdiomaProvider>')
  return contexto
}
