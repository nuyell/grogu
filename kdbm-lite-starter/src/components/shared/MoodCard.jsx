import './MoodCard.css'

function MoodCard({ emoji, label, description, selected, onClick, color }) {
  return (
    <button
      className={`mood-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
      aria-label={`Set mood: ${label}`}
      aria-pressed={selected}
      style={{ '--card-accent': color }}
    >
      <span className="mood-emoji" aria-hidden="true">{emoji}</span>
      <span className="mood-label">{label}</span>
      <span className="mood-desc">{description}</span>
    </button>
  )
}

export default MoodCard
