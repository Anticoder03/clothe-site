import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './Main';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        {/* Define routes for each component */}
        <Route path="/home" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
