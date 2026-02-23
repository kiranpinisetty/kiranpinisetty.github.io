import SectionHeading from '../components/SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education" subtitle="Academic Journey" />
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item reveal" key={`${item.title}-${item.year}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="glass-card">
                <p className="timeline-year">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <p className="timeline-score">{item.score}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
