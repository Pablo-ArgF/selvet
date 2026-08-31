import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content container text-center"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Selvet Logo" className="hero-logo" />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Tu familia, <br />
          <span className="text-gradient">nuestra vocación.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Cuidamos de tus mascotas con cercanía, confianza y un trato personalizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="hero-actions"
        >
          <a href="#services" className="btn btn-primary">Descubre nuestros servicios</a>
          <a href="#info" className="btn glass">Dónde estamos</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} color="var(--text-secondary)" />
      </motion.div>

      {/* Floating Animals */}
      <motion.img
        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80"
        alt="Perro"
        className="floating-animal animal-dog"
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, -80]) }}
      />
      <motion.img
        src="https://www.elindependiente.com/wp-content/uploads/2024/04/cow-1715829-1280-1200x675.jpg"
        alt="Vaca"
        className="floating-animal animal-cow"
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, -170]) }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=400&q=80"
        alt="Oveja"
        className="floating-animal animal-cat"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.7, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, -120]) }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=400&q=80"
        alt="Caballo"
        className="floating-animal animal-horse"
        initial={{ opacity: 0, scale: 0, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.9, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, 60]) }}
      />
      <motion.img
        src="https://static.maskokotas.com/blog/wp-content/uploads/2020/12/hare-4375952_1920-1.jpg"
        alt="Conejo"
        className="floating-animal animal-rabbit"
        initial={{ opacity: 0, scale: 0, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.3, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, -40]) }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80"
        alt="Gato"
        className="floating-animal animal-sheep"
        initial={{ opacity: 0, scale: 0, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.7, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, 70]) }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=400&q=80"
        alt="Gato 2"
        className="floating-animal animal-cat2"
        initial={{ opacity: 0, scale: 0, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.5, type: "spring" }}
        style={{ y: useTransform(scrollY, [0, 500], [0, 110]) }}
      />
    </section>
  );
};

export default Hero;
