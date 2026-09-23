import { experiencia } from '../../data/experiencia'
import { useIdioma } from '../../i18n/idioma'
import SectionTitle from '../_shared/SectionTitle/SectionTitle'
import JobCard from './JobCard/JobCard'
import './Experiencia.css'

function Experiencia() {
  const { textos } = useIdioma()

  return (
    <section id="experiencia" className="section">
      <SectionTitle>{textos.experiencia.titulo}</SectionTitle>

      <ol className="job-list">
        {experiencia.map((job) => (
          <JobCard key={job.empresa} job={job} />
        ))}
      </ol>
    </section>
  )
}

export default Experiencia
