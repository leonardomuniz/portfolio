import SectionTitle from '../_shared/SectionTitle/SectionTitle'
import Chip from '../_shared/Chip/Chip'
import Rotulo from '../_shared/Rotulo/Rotulo'
import TextoDestacado from '../_shared/TextoDestacado/TextoDestacado'
import { stack } from '../../data/stack'
import { useIdioma } from '../../i18n/idioma'
import './Trajetoria.css'

function Trajetoria() {
  const { idioma, textos } = useIdioma()
  const t = textos.trajetoria

  return (
    <section id="trajetoria" className="section">
      <div className="trajetoria-grid">
        <div className="trajetoria-col">
          <SectionTitle>{t.titulo}</SectionTitle>

          <div className="trajetoria-resumo">
            {t.paragrafos.map((paragrafo) => (
              <p key={paragrafo.slice(0, 24)}><TextoDestacado>{paragrafo}</TextoDestacado></p>
            ))}
          </div>

          <ul className="trajetoria-fatos">
            {t.fatos.map((fato) => (
              <li key={fato.rotulo}>
                <Rotulo className="fato-rotulo">{fato.rotulo}</Rotulo>
                <span className="fato-valor">{fato.valor}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="trajetoria-col">
          <SectionTitle>{t.tituloStack}</SectionTitle>

          <div className="stack-grupos">
            {stack.map((grupo) => (
              <div key={grupo.id} className="stack-group">
                <Rotulo as="h3" className="stack-label">{grupo.categoria[idioma]}</Rotulo>
                <ul className="stack-itens">
                  {grupo.itens.map((item) => (
                    <li key={item}><Chip>{item}</Chip></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trajetoria
