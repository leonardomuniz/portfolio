import type { ReactNode } from 'react'
import './IconLink.css'

interface IconLinkProps {
  href: string
  /** Nome acessível e tooltip: o botão não tem texto visível. */
  label: string
  children: ReactNode
}


/**
 * Link quadrado só com ícone, abrindo em nova aba.
 * O ícone herda a cor via `currentColor`.
 */
function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a
      className="icon-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  )
}

export default IconLink
