import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { WhatsappIcon, MailIcon, GithubIcon, LinkedinIcon, ArrowIcon } from '../Icons/Icons'
import SectionTitle from '../_shared/SectionTitle/SectionTitle'
import Card from '../_shared/Card/Card'
import Rotulo from '../_shared/Rotulo/Rotulo'
import { canais } from '../../data/contato'
import { useIdioma } from '../../i18n/idioma'
import type { Canal, CanalId } from '../../types'
import './Footer.css'

const TOAST_MS = 1900

// Endereços e comportamento vêm de data/contato.js; aqui fica
// só o ícone de cada canal, que é coisa de apresentação.
const ICONES: Record<CanalId, typeof WhatsappIcon> = {
  whatsapp: WhatsappIcon,
  email: MailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

interface Toast {
  id: number
  texto: string
}

function Footer() {
  const { idioma, textos } = useIdioma()
  // `id` muda a cada clique pra remontar o toast e reiniciar a animação
  const [toast, setToast] = useState<Toast | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  function mostrarToast(texto: string) {
    setToast({ id: Date.now(), texto })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), TOAST_MS)
  }

  function handleClick(canal: Canal, label: string) {
    return (event: MouseEvent) => {
      if (!canal.copiar || !navigator.clipboard) return
      event.preventDefault()
      navigator.clipboard
        .writeText(canal.copiar)
        .then(() => mostrarToast(textos.contato.copiado.replace('{canal}', label)))
    }
  }

  return (
    <footer id="contato" className="footer">
      <SectionTitle>{textos.contato.titulo}</SectionTitle>

      <p className="contato-intro">{textos.contato.intro}</p>

      <ul className="canal-grid">
        {canais.map((canal) => {
          const Icon = ICONES[canal.id]
          const { label, acao } = textos.contato.canais[canal.id]

          return (
            <li key={canal.id}>
              <Card
                as="a"
                className={`canal canal-${canal.id}`}
                href={canal.href}
                onClick={handleClick(canal, label)}
                {...(canal.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="canal-icone"><Icon /></span>

                <span className="canal-texto">
                  <Rotulo>{label}</Rotulo>
                  <span className="canal-valor">{typeof canal.valor === 'string' ? canal.valor : canal.valor[idioma]}</span>
                  <span className="canal-acao">{acao}</span>
                </span>

                <span className="canal-seta" aria-hidden="true"><ArrowIcon /></span>
              </Card>
            </li>
          )
        })}
      </ul>

      <div className="toast-area" aria-live="polite">
        {toast && <span key={toast.id} className="toast">{toast.texto}</span>}
      </div>
    </footer>
  )
}

export default Footer
