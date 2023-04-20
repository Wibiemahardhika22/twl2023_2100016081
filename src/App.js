import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/FooterComponent';
import Home from './Pages/Home'
import About from './Pages/About'
import Notfound from './Pages/Notfound'
import NavbarComponent from './Components/NavbarComponent';


function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
