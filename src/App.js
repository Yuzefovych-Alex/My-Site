import './sass/css/App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import PixGame from './page/PixGame'

function App() {
  return (
    <Router basename="/My-Site">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pixgame" element={<PixGame />} />
      </Routes>
    </Router>
  )
}

export default App
