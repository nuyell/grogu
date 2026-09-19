import { useState } from 'react'
import InteractiveGrogu from '../shared/InteractiveGrogu'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function MeetGrogu() {
  const [currentState, setCurrentState] = useState('idle')
  const heroReveal = useScrollReveal()
  const profileReveal = useScrollReveal()

  return (
    <section id="meet-grogu">
      <div className="hero" {...heroReveal.ref}>
        <div className={`hero-inner section-animate ${heroReveal.revealed ? 'revealed' : ''}`}>
          <div className="hero-image" aria-label="Grogu in a peaceful galaxy scene" role="img">
            <span className="hero-image-character" aria-hidden="true">👽</span>
            <span className="hero-image-star hero-image-star-one" aria-hidden="true">✦</span>
            <span className="hero-image-star hero-image-star-two" aria-hidden="true">✧</span>
            <span className="hero-image-planet" aria-hidden="true"></span>
          </div>
          <div className="hero-text">
            <span className="hero-badge">The galaxy's cutest character</span>
            <h1 className="hero-title">
              Welcome to <span className="hero-highlight">Grogu World</span>
            </h1>
            <p className="hero-description">
              A cozy little corner of the galaxy dedicated to the sweetest, most adorable
              character in the galaxy far, far away. Explore his moods, moments, and more!
            </p>
            <div className="hero-ctas">
              <a href="#grogu-mood" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('grogu-mood')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}>
                Explore Grogu
              </a>
              <a href="#cute-moments" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('cute-moments')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}>
                Discover Moments
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-grogu-card">
              <div className="hero-grogu-glow"></div>
              <div className="hero-grogu-emoji">👽</div>
              <span className="hero-float-badge hero-float-badge-1">New</span>
              <span className="hero-float-badge hero-float-badge-2">Cute</span>
              <span className="hero-float-badge hero-float-badge-3">Best</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile" {...profileReveal.ref}>
        <div className={`profile-inner section-animate ${profileReveal.revealed ? 'revealed' : ''}`}>
          <div className="profile-header">
            <span className="section-badge">01 — Profile</span>
            <h2>Meet Grogu</h2>
            <p>Also known as "The Child" or "Baby Yoda," Grogu is a young member of Yoda's species.</p>
          </div>
          <div className="profile-grid">
            <div className="profile-card">
              <span className="profile-icon">🍖</span>
              <h3>Loves Pancakes</h3>
              <p>Grogu's favorite snack — he eats them with big, happy bites!</p>
            </div>
            <div className="profile-card">
              <span className="profile-icon">👂</span>
              <h3>Big Ears</h3>
              <p>His ears are super expressive and move when he's curious.</p>
            </div>
            <div className="profile-card">
              <span className="profile-icon">🚀</span>
              <h3>Galaxy Traveler</h3>
              <p>Dreams of flying through the stars in his own tiny ship.</p>
            </div>
            <div className="profile-card">
              <span className="profile-icon">🧸</span>
              <h3>Cuddle Buddy</h3>
              <p>Never lets go of his tiny teddy bear soft toy.</p>
            </div>
          </div>
          <div className="profile-interactive">
            <h3>See Grogu in Action</h3>
            <InteractiveGrogu />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetGrogu
