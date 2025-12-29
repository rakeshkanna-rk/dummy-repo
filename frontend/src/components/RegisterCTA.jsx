import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Ticket } from 'lucide-react';
import { registrationLink } from '../data/mockEvents';
import './RegisterCTA.css';

const RegisterCTA = () => {
  const handleRegisterClick = () => {
    window.open(registrationLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="register-cta-section">
      <div className="register-cta-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="register-cta-content"
        >
          <div className="register-icon-wrapper">
            <Ticket className="register-icon" />
          </div>
          
          <h2 className="register-title">Ready to Face Your Fears?</h2>
          <p className="register-description">
            Secure your spot at ZYNORA. Limited entries available. 
            The nightmare awaits those brave enough to enter.
          </p>
          
          <motion.button
            onClick={handleRegisterClick}
            className="register-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="register-btn-text">Register Now</span>
            <ArrowRight className="register-btn-icon" />
            <div className="register-btn-glow"></div>
          </motion.button>

          <p className="register-warning">
            ⚠️ Not recommended for the faint of heart
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="register-decoration decoration-1"></div>
        <div className="register-decoration decoration-2"></div>
        <div className="register-decoration decoration-3"></div>
      </div>
    </section>
  );
};

export default RegisterCTA;
