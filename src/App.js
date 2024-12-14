// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import './App.css';

function App() {

  return (
    <>
     <Router>
      <div>
      
      <nav>
        <ul class="nav">
          <li><Link to="/home" className="Home">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/about" className="About">About</Link></li>
        </ul>
        <ul>
          <li><Link to="/services" className="Services">Services</Link></li>
        </ul>
        <ul>
          <li><Link to="/contact" className="Contact">Contact</Link></li>
        </ul>
      </nav>
       <Routes>
        <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />

       </Routes>
       </div>
     </Router>
    </>
  )
}

export default App;
