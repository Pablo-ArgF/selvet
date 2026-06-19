import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import instalacionesData from './instalaciones.json';
import './Instalaciones.css';

// Animation variants for slide transitions
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { x: { type: 'spring', stiffness: 280, damping: 28 }, opacity: { duration: 0.25 } },
  },
  exit: (dir) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    transition: { x: { type: 'spring', stiffness: 280, damping: 28 }, opacity: { duration: 0.25 } },
  }),
};

const Instalaciones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  if (!instalacionesData || instalacionesData.length === 0) return null;
  const total = instalacionesData.length;

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Autoplay – 12 seconds interval
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = setInterval(handleNext, 12000);
    return () => clearInterval(id);
  }, [activeIndex, isPaused]);

  const item = instalacionesData[activeIndex];
  const imageSrc = (import.meta.env.BASE_URL || '/') + item.image;

  return (
    <section id="instalaciones" className="instalaciones-section section">
      <div className="container inst-container">
        {/* Section heading */}
        <motion.div
          className="services-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Nuestras Instalaciones</h2>
        </motion.div>

        {/* Carousel with side arrows */}
        <div
          className="instalaciones-outer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-live="polite"
        >
          {/* Left arrow */}
          <button
            className="inst-arrow inst-arrow--left"
            onClick={handlePrev}
            aria-label="Anterior"
            role="button"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="instalaciones-slide"
            >
              {/* Image column (left) */}
              <div className="inst-image-col">
                <img src={imageSrc} alt={item.title} className="inst-image" />
              </div>

              {/* Text column (right) */}
              <div className="inst-text-col">
                {/* Title & counter */}
                <div className="inst-title-box">
                  <span className="inst-counter">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <h3 className="inst-title">{item.title}</h3>
                </div>

                {/* Body */}
                <div className="inst-body-box">
                  <p className="inst-body">{item.body}</p>
                </div>

                {/* Dots navigation */}
                <div className="inst-dots">
                  {instalacionesData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      className={`inst-dot${i === activeIndex ? ' active' : ''}`}
                      aria-label={`Instalación ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          <button
            className="inst-arrow inst-arrow--right"
            onClick={handleNext}
            aria-label="Siguiente"
            role="button"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instalaciones;
