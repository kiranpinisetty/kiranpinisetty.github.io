import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', ...navLinks.map((link) => link.id)]

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140
      let currentSection = 'home'

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Primary">
        <a href="#home" className="brand" onClick={handleNavClick}>
          {personalInfo.name}
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                aria-current={activeSection === link.id ? 'page' : undefined}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
