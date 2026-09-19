import { useState } from 'react'

const navLinks = [
  { id: 'meet-grogu', label: 'Meet Grogu' },
  { id: 'grogu-mood', label: 'Mood' },
  { id: 'cute-moments', label: 'Moments' },
  { id: 'fun-facts', label: 'Facts' },
  { id: 'grogu-quotes', label: 'Quotes' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#meet-grogu" className="navbar-brand" onClick={(e) => handleLinkClick(e, 'meet-grogu')}>
          <span className="navbar-logo">🐾</span>
          <span className="navbar-title">Grogu World</span>
        </a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#meet-grogu"
              className="navbar-cta"
              onClick={(e) => handleLinkClick(e, 'meet-grogu')}
            >
              ✨ Explore Grogu
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
