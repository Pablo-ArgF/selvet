import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Emergency from './components/Emergency';
import Instalaciones from './components/Instalaciones';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Emergency />
        <Instalaciones />
        <Location />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
