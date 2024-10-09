
import React from 'react';

import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';

import Navbar from './Components/Navbar.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
