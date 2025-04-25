import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Research from './components/sections/Research';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Teaching from './components/sections/Teaching';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <Research />
        <Projects />
        <Publications />
        <Teaching />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;