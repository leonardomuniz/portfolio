import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '../Icons/Icons'
import { lerTema, outroTema, aplicarTema, escutarSistema, type Tema } from '../../utils/tema'
import { useIdioma } from '../../i18n/idioma'
import './Navbar.css'

// O botão de tema mostra o destino, não o atual: no escuro
// aparece o sol, porque é nele que o clique vai dar. O de
// idioma segue a mesma lógica — em português mostra "EN".
const TEMA: Record<Tema, { Icon: typeof SunIcon; chave: 'temaClaro' | 'temaEscuro' }> = {
  dark: { Icon: SunIcon, chave: 'temaClaro' },
  light: { Icon: MoonIcon, chave: 'temaEscuro' },
}

function Navbar() {
  const { idioma, textos, trocarIdioma } = useIdioma()
  const [open, setOpen] = useState(false)
  // Estado inicial vem do <html>, já resolvido pelo script inline.
  const [tema, setTema] = useState(lerTema)

  useEffect(() => escutarSistema((novo) => {
    setTema(novo)
    aplicarTema(novo, false)
  }), [])

  function trocarTema() {
    const novo = outroTema(tema)
    setTema(novo)
    aplicarTema(novo)
  }

  const links = [
    { href: '#trajetoria', label: textos.navbar.trajetoria },
    { href: '#experiencia', label: textos.navbar.experiencia },
    { href: '#contato', label: textos.navbar.contato },
  ]

  const { Icon, chave } = TEMA[tema]
  const rotuloTema = textos.navbar[chave]
  const proximoIdioma = idioma === 'pt' ? 'EN' : 'PT'

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#topo" className="navbar-brand">leo@portfolio:~$</a>

        <ul id="navbar-links" className={`navbar-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {/* O rótulo acessível vai no idioma de DESTINO — é o que
              a pessoa que não lê o idioma atual precisa entender. */}
          <button
            type="button"
            className="idioma-toggle"
            onClick={trocarIdioma}
            aria-label={textos.navbar.trocarIdioma}
            title={textos.navbar.trocarIdioma}
            lang={idioma === 'pt' ? 'en' : 'pt'}
          >
            {proximoIdioma}
          </button>

          <button
            type="button"
            className="tema-toggle"
            onClick={trocarTema}
            aria-label={rotuloTema}
            title={rotuloTema}
          >
            <span className="tema-icone"><Icon /></span>
          </button>

          <button
            type="button"
            className="navbar-toggle"
            aria-expanded={open}
            aria-controls="navbar-links"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? textos.navbar.fechar : textos.navbar.menu}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
