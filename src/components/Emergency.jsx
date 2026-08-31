import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import './Emergency.css';

const Emergency = () => {
  return (
    <section id="emergency" className="emergency-section">
      <div className="container">
        <motion.div 
          className="emergency-card glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="emergency-content">
            <motion.div 
              className="pulse-icon-container"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <PhoneCall size={48} color="white" />
            </motion.div>
            
            <div className="emergency-text">
              <h2>¿Emergencia Veterinaria?</h2>
              <p>Estamos disponibles las 24 horas del día, los 365 días del año para atender a tu mascota cuando más lo necesita.</p>
            </div>
            
            <a href="tel:622738115" className="btn btn-emergency btn-large">
              Llamar Urgencias: 622 738 115
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Emergency;
