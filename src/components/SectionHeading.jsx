export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading reveal">
      <p className="section-kicker">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
