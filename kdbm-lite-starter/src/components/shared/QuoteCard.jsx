import './QuoteCard.css'

function QuoteCard({ emoji, quote, label, size }) {
  return (
    <div className={`quote-card quote-card-${size || 'medium'}`}>
      <span className="quote-mark" aria-hidden="true">"</span>
      <div className="quote-emoji" aria-hidden="true">
        {emoji}
      </div>
      <blockquote className="quote-text">{quote}</blockquote>
      <span className="quote-label">{label}</span>
    </div>
  )
}

export default QuoteCard
