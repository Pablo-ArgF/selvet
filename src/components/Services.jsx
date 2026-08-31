import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Syringe, 
  Cpu, 
  Pill, 
  Microscope, 
  Bone, 
  Waves, 
  Smile, 
  Scissors, 
  Bed, 
  AlertCircle, 
  Drumstick 
} from 'lucide-react';
import './Services.css';

const services = [
  { name: 'Consultas', icon: Stethoscope },
  { name: 'Vacunación', icon: Syringe },
  { name: 'Microchips', icon: Cpu },
  { name: 'Medicina interna', icon: Pill },
  { name: 'Análisis Clínicos', icon: Microscope },
  { name: 'Radiografías', icon: Bone },
  { name: 'Ecografías', icon: Waves },
  { name: 'Limpiezas dentales', icon: Smile },
  { name: 'Cirugía', icon: Scissors },
  { name: 'Hospitalización', icon: Bed },
  { name: 'Urgencias', icon: AlertCircle },
  { name: 'Alimentación', icon: Drumstick },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="section bg-secondary">
      <div className="container">
        <motion.div 
          className="services-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Equipamiento de vanguardia y profesionales dedicados para el cuidado integral de tu mascota.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                className="service-card glass"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="service-icon-wrapper">
                  <Icon size={32} className="service-icon" />
                </div>
                <h3 className="service-name">{service.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
