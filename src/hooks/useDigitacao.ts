import { useEffect, useState } from 'react'

interface OpcoesDigitacao {
  atraso?: number
  velocidade?: number
  pausa?: number
}

function prefereParado() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}


/**
 * Efeito de máquina de escrever, sem lib externa.
 *
 * Reinicia sozinho quando `texto` muda (troca de idioma) — ajustando
 * o estado durante a própria renderização, que é o jeito que o React
 * documenta pra derivar estado de uma prop que mudou, sem pintar o
 * quadro intermediário. Quem prefere menos movimento
 * (`prefers-reduced-motion`) recebe o texto inteiro de uma vez, sem
 * timer nenhum.
 *
 * @param texto texto a ser "digitado"
 * @param opcoes.atraso ms de espera antes do primeiro caractere
 * @param opcoes.velocidade ms entre caracteres normais
 * @param opcoes.pausa ms de respiro depois de uma vírgula, como quem fala
 * @returns `escrito` (o que já foi digitado) e `completo` (se terminou)
 */
export function useDigitacao(
  texto: string,
  { atraso = 420, velocidade = 58, pausa = 280 }: OpcoesDigitacao = {},
) {
  const [parado] = useState(prefereParado)
  const [alvo, setAlvo] = useState(texto)
  const [escritos, setEscritos] = useState(() => (parado ? texto.length : 0))

  if (alvo !== texto) {
    setAlvo(texto)
    setEscritos(parado ? texto.length : 0)
  }

  useEffect(() => {
    if (parado || escritos >= texto.length) return

    const anterior = texto[escritos - 1]
    const espera = escritos === 0 ? atraso : anterior === ',' ? pausa : velocidade

    const timer = setTimeout(() => setEscritos((n) => n + 1), espera)
    return () => clearTimeout(timer)
  }, [escritos, texto, parado, atraso, velocidade, pausa])

  return {
    escrito: texto.slice(0, escritos),
    completo: escritos >= texto.length,
  }
}
