function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">🐾</span>
            <h3>Grogu World</h3>
            <p>A cozy corner of the galaxy for the cutest character in the galaxy far, far away. Explore moods, moments, and more — all in one playful space.</p>
          </div>
          <div className="footer-nav">
            <h4>Explore</h4>
            <ul>
              <li><button onClick={() => scrollToSection('meet-grogu')}>Meet Grogu</button></li>
              <li><button onClick={() => scrollToSection('grogu-mood')}>Mood</button></li>
              <li><button onClick={() => scrollToSection('cute-moments')}>Moments</button></li>
              <li><button onClick={() => scrollToSection('fun-facts')}>Fun Facts</button></li>
              <li><button onClick={() => scrollToSection('grogu-quotes')}>Quotes</button></li>
            </ul>
          </div>
          <div className="footer-extra">
            <h4>Community</h4>
            <ul>
              <li><span>Fan Made</span></li>
              <li><span>Made with Care</span></li>
              <li><span>Star Wars Fandom</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>© 2026 Grogu World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
