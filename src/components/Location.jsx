import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section id="info" className="section location-section">
      <div className="container">
        <motion.div 
          className="location-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Dónde Estamos</h2>
          <p className="section-subtitle">
            Ven a visitarnos a nuestras instalaciones.
          </p>
        </motion.div>

        <div className="location-grid">
          <motion.div 
            className="map-container glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.9123281085025!2d-5.6190807!3d43.2741513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3671a1c97efba1%3A0x6e9f28ecb343a948!2sC.%20Vel%C3%A1zquez%2C%2013A%2C%2033960%20Blimea%2C%20Asturias!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de la Clínica Selvet"
            ></iframe>
          </motion.div>

          <motion.div 
            className="schedule-container glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="schedule-content">
              <h3><MapPin className="inline-icon" /> Dirección</h3>
              <p>Calle Velázquez 13A<br/>Blimea, Asturias 33960</p>
              
              <hr className="schedule-divider" />
              
              <h3><Clock className="inline-icon" /> Horario de Atención</h3>
              <ul className="schedule-list">
                <li>
                  <span className="day">Lunes a Viernes</span>
                  <span className="time">10:30 - 13:30<br/>16:00 - 20:00</span>
                </li>
                <li>
                  <span className="day">Sábado</span>
                  <span className="time">10:30 - 13:30</span>
                </li>
                <li className="sunday">
                  <span className="day">Domingo</span>
                  <span className="time">Cerrado (Solo Urgencias)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
