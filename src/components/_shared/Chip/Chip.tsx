import type { ReactNode } from 'react'
import './Chip.css'

interface ChipProps {
  children: ReactNode
}


/**
 * Tag pequena (tecnologia, categoria). É um <span>: quem usa decide
 * o container, normalmente um <li> dentro de uma <ul>.
 */
function Chip({ children }: ChipProps) {
  return <span className="chip">{children}</span>
}

export default Chip
