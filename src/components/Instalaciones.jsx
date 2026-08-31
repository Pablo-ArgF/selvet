import { useState, useEffect } from 'react';
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

  const total = instalacionesData?.length ?? 0;

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
    const id = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % total);
    }, 12000);
    return () => clearInterval(id);
  }, [isPaused, total]);

  if (total === 0) return null;

  const item = instalacionesData[activeIndex];
  const imageSources = (item.images ?? [item.image]).map(
    (image) => (import.meta.env.BASE_URL || '/') + image,
  );

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
          <div className="instalaciones-intro">
            <p>
              En nuestra clínica veterinaria hemos creado un espacio pensado para ofrecer a cada paciente una atención veterinaria profesional y un trato personalizado, procurando que tanto ellos como sus familias se sientan cómodos desde el primer momento.
            </p>
            <p>
              Contamos con unas instalaciones modernas, funcionales y adaptadas a las necesidades de perros y gatos. Combinamos tecnología, higiene y bienestar para proporcionar una atención veterinaria de calidad.
            </p>
          </div>
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
                <div className={`inst-media${imageSources.length > 1 ? ' inst-media--multiple' : ''}`}>
                  {imageSources.map((imageSrc, imageIndex) => (
                    <img
                      key={imageSrc}
                      src={imageSrc}
                      alt={`${item.title}${imageSources.length > 1 ? ` ${imageIndex + 1}` : ''}`}
                      className="inst-image"
                    />
                  ))}
                </div>
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
