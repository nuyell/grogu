import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import BackToTop from './components/shared/BackToTop'
import MeetGrogu from './components/sections/MeetGrogu'
import GroguMood from './components/sections/GroguMood'
import CuteMoments from './components/sections/CuteMoments'
import FunFacts from './components/sections/FunFacts'
import GroguQuotes from './components/sections/GroguQuotes'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MeetGrogu />
        <GroguMood />
        <CuteMoments />
        <FunFacts />
        <GroguQuotes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
