import TextoDestacado from '../_shared/TextoDestacado/TextoDestacado'
import { useDigitacao } from '../../hooks/useDigitacao'
import { useIdioma } from '../../i18n/idioma'
import { canalPorId } from '../../data/contato'
import Button from '../_shared/Button/Button'
import IconLink from '../_shared/IconLink/IconLink'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../Icons/Icons'
import './Hero.css'

// Atalhos sociais do Hero: só ícone, pra quem quiser ir direto
// ao perfil sem rolar até o rodapé. As URLs vêm de data/contato.
const SOCIAIS = [
  { id: 'github', Icon: GithubIcon, nome: 'GitHub' },
  { id: 'linkedin', Icon: LinkedinIcon, nome: 'LinkedIn' },
  { id: 'whatsapp', Icon: WhatsappIcon, nome: 'WhatsApp' },
]

function Hero() {
  const { textos } = useIdioma()
  const { escrito, completo } = useDigitacao(textos.hero.saudacao)

  return (
    <header id="topo" className="hero">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-terracota" />
            <span className="dot dot-bege" />
          </div>
          <span className="terminal-title">leo@portfolio:~$</span>
        </div>

        <div className="terminal-body">
          <p className="terminal-prompt">$ echo $SAUDACAO</p>

          {/* O texto digitado é aria-hidden pra ninguém ouvir letra
              por letra; o aria-label entrega a frase inteira ao
              leitor de tela. O "fantasma" é a mesma frase invisível
              ocupando o espaço final: sem ele, o h1 cresce de uma
              linha pra duas no meio da digitação e empurra a página. */}
          <h1 className="hero-greeting" aria-label={textos.hero.saudacao}>
            <span className="digitacao" aria-hidden="true">
              <span className="digitacao-fantasma">
                {textos.hero.saudacao}<span className="cursor">▮</span>
              </span>

              <span className="digitacao-texto">
                {escrito}
                <span className={`cursor ${completo ? 'cursor-piscando' : ''}`}>▮</span>
              </span>
            </span>
          </h1>

          <p className="hero-role">{textos.hero.cargo}</p>

          <p className="hero-desc"><TextoDestacado>{textos.hero.descricao}</TextoDestacado></p>

          <div className="hero-actions">
            <Button href="#contato">{textos.hero.faleComigo}</Button>
            <Button href={textos.hero.curriculo} variant="outline" download>
              {textos.hero.baixarCurriculo}
            </Button>
          </div>

          <hr className="hero-divisor" />

          <ul className="hero-social">
            {SOCIAIS.map(({ id, Icon, nome }) => (
              <li key={id}>
                <IconLink href={canalPorId(id)!.href} label={nome}>
                  <Icon />
                </IconLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Hero
