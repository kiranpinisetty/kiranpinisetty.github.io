import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Selected Work" />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="glass-card project-content">
                {project.status ? (
                  <p className="project-status">{project.status}</p>
                ) : null}
                <h3>{project.title}</h3>
                <p className="card-subtitle">Tech: {project.tech}</p>
                <ul className="bullet-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github ? (
                    <a
                      className="btn btn-secondary"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      className="btn btn-primary"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
