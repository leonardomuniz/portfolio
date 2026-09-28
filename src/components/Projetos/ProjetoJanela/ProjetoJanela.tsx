import TextoDestacado from '../../_shared/TextoDestacado/TextoDestacado'
import Chip from '../../_shared/Chip/Chip'
import { useIdioma } from '../../../i18n/idioma'
import type { Projeto } from '../../../types'
import './ProjetoJanela.css'

interface ProjetoJanelaProps {
  projeto: Projeto
}

/**
 * Janela de terminal de um projeto, no formato de card: barra de
 * título com a empresa, o prompt, o nome do projeto, o que ele é, o
 * que eu fiz e, no rodapé, a stack e os links.
 */
function ProjetoJanela({ projeto }: ProjetoJanelaProps) {
  const { idioma } = useIdioma()

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

      <div className="projeto-corpo">
        {/* O mesmo prompt do terminal do Hero. É enfeite: o título logo
            abaixo já diz tudo ao leitor de tela. */}
        <p className="projeto-prompt" aria-hidden="true">$ cat {projeto.id}.md</p>

        <h3 className="projeto-titulo">{projeto.nome}</h3>

        <p className="projeto-descricao">{projeto.descricao[idioma]}</p>
        <p className="projeto-papel">
          <TextoDestacado>{projeto.papel[idioma]}</TextoDestacado>
        </p>

        <div className="projeto-rodape">
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
      </div>
    </li>
  )
}

export default ProjetoJanela
