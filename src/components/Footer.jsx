import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <div className="footer-grid">
          
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="logo-container mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Selvet Logo" className="logo" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="logo-text" style={{ color: 'white' }}>Selvet</span>
            </div>
            <p className="footer-desc">
              Tu clínica veterinaria de confianza en Blimea. Cuidando de tus mejores amigos con profesionalidad y cariño.
            </p>
          </motion.div>

          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="footer-title">Contacto Rápido</h4>
            <ul className="footer-list">
              <li>
                <Phone size={20} className="footer-icon" />
                <a href="tel:984244834">984 24 48 34</a>
              </li>
              <li>
                <Mail size={20} className="footer-icon" />
                <a href="mailto:cvselvet@gmail.com">cvselvet@gmail.com</a>
              </li>
            </ul>
          </motion.div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clínica Veterinaria Selvet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
