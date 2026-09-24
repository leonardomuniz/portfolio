import { useEffect, useState } from 'react'
import { lerTema, type Tema } from './tema'

/**
 * Acompanha o tema aplicado no `<html>`, qualquer que seja quem o trocou
 * (botão da Navbar ou mudança do sistema operacional).
 */
export function useTemaAtual(): Tema {
  const [tema, setTema] = useState<Tema>(lerTema)

  useEffect(() => {
    const observador = new MutationObserver(() => setTema(lerTema()))
    observador.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observador.disconnect()
  }, [])

  return tema
}
