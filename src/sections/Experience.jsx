import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading title="Internship Experience" subtitle="Work Exposure" />

        <div className="card-grid">
          {experiences.map((experience) => (
            <article className="glass-card reveal" key={`${experience.role}-${experience.duration}`}>
              <p className="card-meta">{experience.duration}</p>
              <h3>{experience.role}</h3>
              <p className="card-subtitle">{experience.company}</p>
              <ul className="bullet-list">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
