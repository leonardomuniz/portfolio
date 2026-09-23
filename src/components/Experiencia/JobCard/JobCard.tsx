import TextoDestacado from '../../_shared/TextoDestacado/TextoDestacado'
import Card from '../../_shared/Card/Card'
import { useIdioma } from '../../../i18n/idioma'
import { formatMesAno, formatDuracao } from '../../../utils/periodo'
import type { Cargo, EmpresaExperiencia } from '../../../types'
import './JobCard.css'

interface JobCardProps {
  job: EmpresaExperiencia
}

// `cargos` vem do mais recente para o mais antigo: o início da
// passagem é o do último cargo, o fim é o do primeiro.
function periodoDaEmpresa(cargos: Cargo[]) {
  return {
    inicio: cargos[cargos.length - 1].inicio,
    fim: cargos[0].fim,
  }
}

/**
 * Card de uma empresa na timeline: nome, duração total, local,
 * um bloco por cargo (com período e destaques) e a stack usada.
 *
 * Deve ser filho de um `.job-list`, que desenha a linha vertical;
 * o anel e o ponto de cada cargo se posicionam em relação a ela.
 */
function JobCard({ job }: JobCardProps) {
  const { idioma, textos } = useIdioma()
  const { inicio, fim } = periodoDaEmpresa(job.cargos)

  return (
    <Card as="li" className="job-card">
      <div className="job-header">
        <h3 className="job-empresa">{job.empresa}</h3>
        <span className="job-duracao">{formatDuracao(inicio, fim, idioma)}</span>
      </div>

      <p className="job-local">{job.local[idioma]}</p>

      {job.cargos.map((c) => (
        <div key={c.inicio} className="job-cargo-bloco">
          <h4 className="job-cargo">{c.cargo[idioma]}</h4>

          <p className="job-periodo">
            {formatMesAno(c.inicio, idioma)} —{' '}
            {c.fim ? formatMesAno(c.fim, idioma) : textos.experiencia.atual}
          </p>

          <ul className="job-destaques">
            {c.destaques[idioma].map((destaque) => (
              <li key={destaque}><TextoDestacado>{destaque}</TextoDestacado></li>
            ))}
          </ul>
        </div>
      ))}

      <p className="job-stack">{job.stack.join(' · ')}</p>
    </Card>
  )
}

export default JobCard
