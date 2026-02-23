import SectionHeading from '../components/SectionHeading'
import { achievements, certifications, languages } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Recognition"
        />

        <div className="card-grid three-col">
          <article className="glass-card reveal">
            <h3>Achievements</h3>
            <ul className="bullet-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="glass-card reveal">
            <h3>Certifications</h3>
            <ul className="bullet-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="glass-card reveal">
            <h3>Languages</h3>
            <ul className="bullet-list">
              {languages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
