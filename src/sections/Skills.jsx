import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading title="Skills" subtitle="Technical Stack" />

        <div className="skills-grid">
          {skills.map((group) => (
            <article className="glass-card skill-card reveal" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <img src={skill.icon} alt={`${skill.name} icon`} loading="lazy" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
