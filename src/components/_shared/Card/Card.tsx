import type { ElementType, ReactNode } from 'react'
import './Card.css'

type CardProps<T extends ElementType> = {
  /** Elemento HTML renderizado: `li`, `a`, `div`... */
  as?: T
  children: ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>


/**
 * Caixa com fundo, borda e efeito de "levantar" no hover.
 *
 * A cor da borda no hover vem de `--card-cor` (padrão: azul).
 * Quem usa o Card sobrescreve a variável pra mudar a cor, e cuida
 * sozinho do padding e do conteúdo interno.
 */
function Card<T extends ElementType = 'div'>({
  as,
  className = '',
  children,
  ...props
}: CardProps<T>) {
  const Tag: ElementType = as ?? 'div'

  return (
    <Tag className={`card ${className}`.trim()} {...props}>
      {children}
    </Tag>
  )
}

export default Card
