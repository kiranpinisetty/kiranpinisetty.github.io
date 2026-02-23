import SectionHeading from '../components/SectionHeading'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading title="Contact" subtitle="Get In Touch" />

        <article className="glass-card reveal contact-card">
          <h3>Contact Details</h3>
          <p className="contact-intro">
            Open to fresher opportunities in the IT domain. Reach out through
            any of the channels below.
          </p>

          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/kiranpinisetty
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                github.com/kiranpinisetty
              </a>
            </li>
          </ul>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${personalInfo.email}`}>
              Email Me
            </a>
            <a className="btn btn-secondary" href={`tel:${personalInfo.phone}`}>
              Call Me
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
