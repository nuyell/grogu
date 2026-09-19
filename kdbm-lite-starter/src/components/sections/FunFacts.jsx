import FactCard from '../shared/FactCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const facts = [
  {
    emoji: '🥞',
    label: 'Loves Snacks',
    fact: 'Grogu loves pancakes. He eats them with big, happy bites every morning.',
    color: '#c8f6e8',
  },
  {
    emoji: '👂',
    label: 'Big Ears',
    fact: "Grogu's ears are super expressive — they move when he's curious or excited.",
    color: '#ffecd2',
  },
  {
    emoji: '🚀',
    label: 'Galaxy Traveler',
    fact: 'Grogu enjoys stargazing. He wonders about all the planets in the galaxy.',
    color: '#e1bee7',
  },
  {
    emoji: '🥺',
    label: 'Extremely Adorable',
    fact: 'Grogu is extremely adorable. He makes everyone smile with his big eyes.',
    color: '#ffdab9',
  },
]

function FunFacts() {
  const reveal = useScrollReveal()

  return (
    <section id="fun-facts" className="section section-facts">
      <div className="section-inner" {...reveal.ref}>
        <div className={`section-header section-animate ${reveal.revealed ? 'revealed' : ''}`}>
          <span className="section-badge">04 — Facts</span>
          <h2>Fun Facts</h2>
          <p className="section-subtitle">Fun facts about Grogu</p>
        </div>
        <div className="facts-grid">
          {facts.map((fact) => (
            <FactCard
              key={fact.label}
              emoji={fact.emoji}
              fact={fact.fact}
              label={fact.label}
              color={fact.color}
            />
          ))}
        </div>
        <p className="facts-disclaimer">
          All facts are sample fan content, not official Star Wars canon.
        </p>
      </div>
    </section>
  )
}

export default FunFacts
