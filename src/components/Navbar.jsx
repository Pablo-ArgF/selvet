import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Urgencias', href: '#emergency' },
    { name: 'Instalaciones', href: '#instalaciones' },
    { name: 'Ubicación', href: '#info' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <a href="#home" className="logo-container">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Selvet Logo" className="logo" />
          <span className="logo-text">Selvet</span>
        </a>

        <div className="desktop-nav">
                      <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.replace('#', '');
                    const el = document.getElementById(id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // offset for navbar height
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}>{link.name}</a>
                </li>
              ))}
            </ul>
          
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="tel:984244834" className="btn btn-primary nav-cta">
            <Phone size={18} style={{ marginRight: '8px' }} />
            Cita Previa
          </a>
        </div>

        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn-mobile" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-nav glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:984244834" className="btn btn-primary mobile-cta">
                <Phone size={18} style={{ marginRight: '8px' }} />
                984 24 48 34
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
