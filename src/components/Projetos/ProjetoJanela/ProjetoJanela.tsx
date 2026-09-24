import TextoDestacado from '../../_shared/TextoDestacado/TextoDestacado'
import Chip from '../../_shared/Chip/Chip'
import { useIdioma } from '../../../i18n/idioma'
import { useTemaAtual } from '../../../utils/useTemaAtual'
import type { Projeto } from '../../../types'
import './ProjetoJanela.css'

interface ProjetoJanelaProps {
  projeto: Projeto
}

/**
 * Janela de terminal de um projeto, no formato de card: barra de
 * título com a empresa, o print de ponta a ponta, o nome do projeto,
 * a descrição, o que foi feito, a stack e os links.
 */
function ProjetoJanela({ projeto }: ProjetoJanelaProps) {
  const { idioma } = useIdioma()
  const tema = useTemaAtual()
  const fundo = tema === 'light' && projeto.imagemFundoClara ? projeto.imagemFundoClara : projeto.imagemFundo

  return (
    <li className="projeto">
      <div className="projeto-barra">
        <span className="projeto-dots" aria-hidden="true">
          <span className="projeto-dot projeto-dot-red" />
          <span className="projeto-dot projeto-dot-terracota" />
          <span className="projeto-dot projeto-dot-bege" />
        </span>
        <span className="projeto-empresa">{projeto.empresa}</span>
      </div>

      {projeto.imagem && (
        <img
          className={`projeto-imagem ${projeto.imagemAjuste === 'conter' ? 'is-conter' : ''}`}
          style={fundo ? { backgroundColor: fundo } : undefined}
          src={tema === 'light' && projeto.imagemClara ? projeto.imagemClara : projeto.imagem}
          alt=""
          loading="lazy"
        />
      )}

      <div className="projeto-corpo">
        <h3 className="projeto-titulo">{projeto.nome}</h3>

        <p className="projeto-descricao">{projeto.descricao[idioma]}</p>
        <p className="projeto-papel">
          <TextoDestacado>{projeto.papel[idioma]}</TextoDestacado>
        </p>

        <ul className="projeto-stack">
          {projeto.stack.map((tec) => (
            <li key={tec}><Chip>{tec}</Chip></li>
          ))}
        </ul>

        <ul className="projeto-links">
          {projeto.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.rotulo[idioma]} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProjetoJanela
