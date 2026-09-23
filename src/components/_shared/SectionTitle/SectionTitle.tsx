import type { ReactNode } from 'react'
import './SectionTitle.css'

interface SectionTitleProps {
  children: ReactNode
}


/**
 * Título de seção no estilo "// Título".
 * Único lugar que define o prefixo e o visual dos h2 do site.
 */
function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="section-title">
      <span className="section-prompt">//</span> {children}
    </h2>
  )
}

export default SectionTitle
