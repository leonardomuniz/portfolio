import { Fragment } from 'react'
import './TextoDestacado.css'

interface TextoDestacadoProps {
  /** Texto com trechos entre `**duplo asterisco**` para destacar. */
  children: string
}


/**
 * Renderiza um texto destacando os trechos marcados com `**...**`
 * (números, percentuais etc.). Funciona igual em PT e EN, pois a
 * marcação vive dentro da própria string traduzida.
 */
function TextoDestacado({ children }: TextoDestacadoProps) {
  const partes = children.split(/\*\*(.+?)\*\*/g)

  return (
    <>
      {partes.map((parte, i) =>
        // Após o split, os índices ímpares são os trechos marcados.
        i % 2 === 1
          ? <strong key={i} className="texto-destaque">{parte}</strong>
          : <Fragment key={i}>{parte}</Fragment>,
      )}
    </>
  )
}

export default TextoDestacado
