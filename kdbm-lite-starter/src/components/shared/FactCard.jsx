import './FactCard.css'

function FactCard({ emoji, fact, label, color }) {
  return (
    <div className="fact-card" style={{ '--card-accent': color }}>
      <div className="fact-emoji" aria-hidden="true">
        {emoji}
      </div>
      <div className="fact-content">
        <span className="fact-label">{label}</span>
        <p className="fact-text">{fact}</p>
      </div>
    </div>
  )
}

export default FactCard
