import { useIdioma } from '../../../i18n/idioma'
import './Retrato.css'

// As fotos já saem alinhadas do tratamento (rosto do mesmo tamanho, olhos
// na mesma altura) e com ombros e bordas esfumados: é isso que deixa a troca
// entre elas sem "pulo". A ordem aqui é a ordem do loop.
const FOTOS = ['/foto_leo_1.webp', '/foto_leo_2.webp', '/foto_leo_3.webp']

/**
 * Retrato do Hero: a cabeça "flutuando" ao lado do terminal, trocando entre
 * as três fotos em loop. Só a primeira é anunciada ao leitor de tela — as
 * outras são a mesma pessoa e ficam aria-hidden. Com movimento reduzido,
 * fica só a primeira foto, parada.
 */
function Retrato() {
  const { textos } = useIdioma()

  return (
    <div className="retrato">
      <div className="retrato-flutua">
        {FOTOS.map((src, i) => (
          <img
            key={src}
            className="retrato-foto"
            src={src}
            alt={i === 0 ? textos.hero.fotoAlt : ''}
            aria-hidden={i === 0 ? undefined : true}
            width={720}
            height={900}
            decoding="async"
          />
        ))}
      </div>
    </div>
  )
}

export default Retrato
