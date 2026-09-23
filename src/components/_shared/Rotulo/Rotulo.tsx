import type { ReactNode } from 'react'
import './Rotulo.css'

interface RotuloProps {
  /** Tag renderizada: `span` (padrão) ou `h3` quando rotula um grupo. */
  as?: 'span' | 'h3'
  className?: string
  children: ReactNode
}


/**
 * Rótulo curto em fonte mono, caixa alta e cor discreta
 * ("STACK", "GITHUB", "LOCAL"...).
 */
function Rotulo({ as: Tag = 'span', className = '', children }: RotuloProps) {
  return <Tag className={`rotulo ${className}`.trim()}>{children}</Tag>
}

export default Rotulo
