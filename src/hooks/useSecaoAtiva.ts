import { useCallback, useEffect, useRef, useState } from 'react'

// Linha imaginária a 30% da altura da tela, logo abaixo da navbar:
// a seção cujo topo já passou dela é a que está sendo lida.
const REGUA = 0.3

/**
 * Qual seção está na tela agora — para a navbar destacar o link dela.
 *
 * A ativa é a última seção cujo topo já passou da régua. No topo da
 * página, com o Hero à mostra, nenhuma fica ativa. No fim da página a
 * última seção ganha de qualquer jeito: o rodapé é baixo demais para o
 * topo dele chegar à régua numa tela grande.
 *
 * O clique num link chama `marcar`, que acende o item na hora e segura
 * o destaque até a rolagem suave terminar — sem isso, indo do topo até
 * Projetos, o destaque passaria por Trajetória e Experiência no caminho.
 *
 * @param ids ids das seções, na ordem em que aparecem na página
 * @returns `ativa` (id da seção na tela, ou null) e `marcar(id)`
 */
export function useSecaoAtiva(ids: readonly string[]) {
  const [ativa, setAtiva] = useState<string | null>(null)
  const travada = useRef(false)
  const timer = useRef<number | undefined>(undefined)
  const recalcular = useRef(() => {})

  // solta o destaque do clique `ms` depois do último movimento da tela
  const soltarEm = useCallback((ms: number) => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      travada.current = false
      recalcular.current()
    }, ms)
  }, [])

  useEffect(() => {
    let quadro = 0

    function calcular() {
      quadro = 0
      if (travada.current) return

      const regua = window.innerHeight * REGUA
      const noFim =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      let atual: string | null = null
      for (const id of ids) {
        const secao = document.getElementById(id)
        if (secao && secao.getBoundingClientRect().top <= regua) atual = id
      }
      setAtiva(noFim ? ids[ids.length - 1] : atual)
    }

    function aoRolar() {
      // rolagem vinda do clique: cada evento adia a liberação, e o
      // destaque só volta a seguir a tela quando ela para
      if (travada.current) {
        soltarEm(150)
        return
      }
      if (!quadro) quadro = requestAnimationFrame(calcular)
    }

    recalcular.current = calcular
    calcular()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoRolar)
      cancelAnimationFrame(quadro)
      window.clearTimeout(timer.current)
    }
  }, [ids, soltarEm])

  const marcar = useCallback((id: string) => {
    setAtiva(id)
    travada.current = true
    // se o clique não rolar nada (a seção já estava na tela), solta sozinho
    soltarEm(400)
  }, [soltarEm])

  return { ativa, marcar }
}
