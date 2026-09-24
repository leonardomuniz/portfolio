import { projetos } from '../../data/projetos'
import { useIdioma } from '../../i18n/idioma'
import SectionTitle from '../_shared/SectionTitle/SectionTitle'
import ProjetoJanela from './ProjetoJanela/ProjetoJanela'
import './Projetos.css'

/**
 * Seção de projetos: cada um é uma janela de terminal, lado a lado
 * em telas largas e empilhadas nas estreitas.
 */
function Projetos() {
  const { textos } = useIdioma()

  return (
    <section id="projetos" className="section">
      <SectionTitle>{textos.projetos.titulo}</SectionTitle>

      <ul className="projeto-lista">
        {projetos.map((projeto) => (
          <ProjetoJanela key={projeto.id} projeto={projeto} />
        ))}
      </ul>
    </section>
  )
}

export default Projetos
