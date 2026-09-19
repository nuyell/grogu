import { useState } from 'react'
import MoodCard from '../shared/MoodCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const moods = [
  { emoji: '😄', label: 'Happy', description: 'Feeling joyful and bouncy!', color: '#c8f6e8' },
  { emoji: '😴', label: 'Sleepy', description: 'Time for a cozy nap...', color: '#e1bee7' },
  { emoji: '🎉', label: 'Playful', description: "Let's play!", color: '#ffecd2' },
  { emoji: '🤔', label: 'Curious', description: "What's that?", color: '#fff9c4' },
  { emoji: '🤩', label: 'Excited', description: 'So much to do, so little time!', color: '#ffdab9' },
]

function GroguMood() {
  const [selectedMood, setSelectedMood] = useState(null)
  const reveal = useScrollReveal()

  return (
    <section id="grogu-mood" className="section section-mood">
      <div className="section-inner" {...reveal.ref}>
        <div className={`section-header section-animate ${reveal.revealed ? 'revealed' : ''}`}>
          <span className="section-badge">02 — Mood</span>
          <h2>Grogu's Mood</h2>
          <p className="section-subtitle">How is Grogu feeling today? Pick a mood!</p>
        </div>
        <div className="mood-grid">
          {moods.map((mood) => (
            <MoodCard
              key={mood.label}
              emoji={mood.emoji}
              label={mood.label}
              description={mood.description}
              color={mood.color}
              selected={selectedMood === mood.label}
              onClick={() => setSelectedMood(mood.label)}
            />
          ))}
        </div>
        <div className="mood-result">
          {selectedMood && (
            <p>
              Grogu is now <strong>{selectedMood}</strong>!{' '}
              {moods.find((m) => m.label === selectedMood)?.emoji}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default GroguMood
