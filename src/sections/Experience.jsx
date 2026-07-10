import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading title="Internship Experience" subtitle="Work Exposure" />

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item reveal" key={`${experience.role}-${experience.duration}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="glass-card experience-card">
                <div className="experience-meta">
                  <p className="timeline-year">{experience.duration}</p>
                  <p className="card-subtitle">{experience.company}</p>
                </div>
                <div className="experience-body">
                  <h3>{experience.role}</h3>
                  <p className="card-subtitle experience-company-mobile">{experience.company}</p>
                <ul className="bullet-list">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
