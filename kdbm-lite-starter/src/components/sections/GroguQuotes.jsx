import QuoteCard from '../shared/QuoteCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const quotes = [
  { emoji: '🧸', quote: 'This is the way.', label: 'Sample Quote', size: 'large' },
  { emoji: '🥞', quote: 'Can I have pancakes? Please?', label: 'Sample Quote', size: 'medium' },
  { emoji: '💤', quote: 'Nap time is the best time.', label: 'Sample Quote', size: 'small' },
  { emoji: '👀', quote: 'I am Grogu. I have my ways.', label: 'Sample Quote', size: 'medium' },
  { emoji: '❤️', quote: 'You are my favorite person in the galaxy.', label: 'Sample Quote', size: 'large' },
  { emoji: '🚀', quote: 'To the stars!', label: 'Sample Quote', size: 'medium' },
]

function GroguQuotes() {
  const reveal = useScrollReveal()

  return (
    <section id="grogu-quotes" className="section section-quotes">
      <div className="section-inner" {...reveal.ref}>
        <div className={`section-header section-animate ${reveal.revealed ? 'revealed' : ''}`}>
          <span className="section-badge">05 — Quotes</span>
          <h2>Grogu Quotes</h2>
          <p className="section-subtitle">Adorable words from Grogu</p>
        </div>
        <div className="quotes-grid">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.quote}
              emoji={quote.emoji}
              quote={quote.quote}
              label={quote.label}
              size={quote.size}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GroguQuotes
