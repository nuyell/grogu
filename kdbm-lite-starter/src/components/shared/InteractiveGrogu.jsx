import { useState } from 'react'
import './InteractiveGrogu.css'

const states = {
  idle: { emoji: '👽', label: 'Grogu', reaction: 'Looking cute...' },
  hungry: { emoji: '😋', label: 'Hungry Grogu', reaction: 'Feed me! I love pancakes!' },
  happy: { emoji: '😄', label: 'Happy Grogu', reaction: 'This is so fun!' },
  sleepy: { emoji: '😴', label: 'Sleepy Grogu', reaction: 'Zzz... nap time...' },
  loved: { emoji: '🥰', label: 'Loved Grogu', reaction: 'You are the best!' },
  playing: { emoji: '🎉', label: 'Playful Grogu', reaction: 'Let\'s play!' },
}

function InteractiveGrogu() {
  const [state, setState] = useState('idle')
  const [animating, setAnimating] = useState(false)

  const current = states[state]

  const triggerAction = (newState) => {
    setState(newState)
    setAnimating(true)
    setTimeout(() => setAnimating(false), 800)
  }

  const buttons = [
    { label: 'Feed Grogu', emoji: '🍖', action: () => triggerAction('hungry'), state: 'hungry' },
    { label: 'Play', emoji: '🧸', action: () => triggerAction('playing'), state: 'playing' },
    { label: 'Pet', emoji: '🫶', action: () => triggerAction('loved'), state: 'loved' },
    { label: 'Sleep', emoji: '😴', action: () => triggerAction('sleepy'), state: 'sleepy' },
  ]

  return (
    <div className="interactive-grogu">
      <div className={`grogu-character ${animating ? 'animating' : ''} state-${state}`}>
        <div className="grogu-face">
          <span className="grogu-emoji">{current.emoji}</span>
        </div>
        <p className="grogu-reaction">{current.reaction}</p>
      </div>
      <div className="grogu-buttons">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            className={`grogu-btn ${state === btn.state ? 'active' : ''}`}
            onClick={btn.action}
            aria-label={btn.label}
          >
            <span className="grogu-btn-emoji">{btn.emoji}</span>
            <span className="grogu-btn-label">{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default InteractiveGrogu
