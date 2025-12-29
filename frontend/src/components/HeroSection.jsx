import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Animated fog layers */}
      <div className="fog-layer fog-1"></div>
      <div className="fog-layer fog-2"></div>
      <div className="fog-layer fog-3"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Dark vignette overlay */}
      <div className="vignette"></div>

      {/* Hero content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="hero-title-wrapper"
        >
          <h1 className="hero-title glitch" data-text="ZYNORA">
            ZYNORA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-tagline-wrapper"
        >
          <p className="hero-tagline">
            Where Fear Becomes Fest
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="hero-cta-wrapper"
        >
          <button onClick={scrollToEvents} className="hero-explore-btn">
            <span>Explore Events</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="scroll-indicator"
        onClick={scrollToEvents}
      >
        <ChevronDown className="scroll-icon" />
        <span className="scroll-text">Scroll to discover</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
