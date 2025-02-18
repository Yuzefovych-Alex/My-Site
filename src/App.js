import './css/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Start from './Start';
import Portfolio from './Porfolio';
import Contact from './Contact';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<Start />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume"element={<Resume />}/>
      </Routes>
    </Router>
  );
}

export default App;