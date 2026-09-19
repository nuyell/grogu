import MomentCard from '../shared/MomentCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const moments = [
  {
    emoji: '🥞',
    title: 'Breakfast Time',
    description: 'Grogu loves pancakes. He eats them with big, happy bites.',
    size: 'medium',
  },
  {
    emoji: '🌙',
    title: 'Stargazing',
    description: 'Grogu looks up at the stars and wonders about the galaxy.',
    size: 'large',
  },
  {
    emoji: '🎵',
    title: 'Singing Along',
    description: "Grogu hums little tunes, especially when he's feeling cheerful.",
    size: 'small',
  },
  {
    emoji: '🧸',
    title: 'Cuddle Buddy',
    description: 'Grogu loves soft toys. His favorite is a tiny teddy bear.',
    size: 'small',
  },
  {
    emoji: '🚀',
    title: 'Space Adventure',
    description: 'Grogu dreams of flying through the stars in his own tiny ship.',
    size: 'large',
  },
]

function CuteMoments() {
  const reveal = useScrollReveal()

  return (
    <section id="cute-moments" className="section section-moments">
      <div className="section-inner" {...reveal.ref}>
        <div className={`section-header section-animate ${reveal.revealed ? 'revealed' : ''}`}>
          <span className="section-badge">03 — Gallery</span>
          <h2>Cute Moments</h2>
          <p className="section-subtitle">Adorable snapshots from Grogu's day</p>
        </div>
        <div className="moments-grid">
          {moments.map((moment) => (
            <div
              key={moment.title}
              className={`moments-item moments-item-${moment.size}`}
            >
              <MomentCard
                emoji={moment.emoji}
                title={moment.title}
                description={moment.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuteMoments
