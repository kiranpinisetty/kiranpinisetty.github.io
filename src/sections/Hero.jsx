import { useEffect, useState } from 'react'
import { personalInfo, quickFacts } from '../data/portfolioData'

export default function Hero() {
  const fullText = personalInfo.typingText
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let delay = isDeleting ? 40 : 65

    if (!isDeleting && typedText === fullText) {
      delay = 1000
    }

    if (isDeleting && typedText === '') {
      delay = 350
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.slice(0, typedText.length + 1))
        } else {
          setIsDeleting(true)
        }
      } else if (typedText.length > 0) {
        setTypedText(fullText.slice(0, typedText.length - 1))
      } else {
        setIsDeleting(false)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [typedText, fullText, isDeleting])

  return (
    <section id="home" className="hero section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-profile reveal">
          <img src="/kiran.jpg" alt="Pinisetty Hanumath Satya Kiran" />
        </div>
        <p className="hero-location reveal">{personalInfo.location}</p>
        <h1 className="reveal">{personalInfo.name}</h1>
        <p className="typewriter reveal" aria-label={fullText}>
          {typedText}
          <span className="cursor">|</span>
        </p>
        <p className="hero-summary reveal">
          Motivated fresher seeking opportunities in the IT domain, with
          hands-on experience in software development, web interfaces, and AI
          projects.
        </p>

        <div className="hero-actions reveal">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="/kiran_Resume2026.pdf" download>
            Download Resume
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>

        <ul className="hero-facts reveal">
          {quickFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
