import './MomentCard.css'

function MomentCard({ emoji, title, description }) {
  return (
    <div className="moment-card">
      <div className="moment-visual" aria-hidden="true">
        <span className="moment-emoji">{emoji}</span>
      </div>
      <div className="moment-content">
        <h3 className="moment-title">{title}</h3>
        <p className="moment-desc">{description}</p>
      </div>
    </div>
  )
}

export default MomentCard
