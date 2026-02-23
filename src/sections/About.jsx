import SectionHeading from '../components/SectionHeading'
import { objective } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <SectionHeading title="About Me" subtitle="Objective" />
          <p className="about-text reveal">{objective}</p>
        </div>

        <div className="about-visual reveal">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
            alt="Software developer workstation illustration"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
