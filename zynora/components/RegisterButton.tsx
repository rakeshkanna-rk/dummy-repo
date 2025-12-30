'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setShowModal(true);
    // If Google Form URL is available, open it
    const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
    if (formUrl && formUrl !== 'your-google-form-url') {
      window.open(formUrl, '_blank');
      setShowModal(false);
    }
  };

  return (
    <>
      {/* Main Register Button (always visible at bottom) */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.button
          onClick={handleClick}
          className="relative px-10 py-4 font-cinematic text-xl font-bold text-white bg-cinematic-red rounded overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(139, 0, 0, 0.5)',
              '0 0 40px rgba(139, 0, 0, 0.8)',
              '0 0 20px rgba(139, 0, 0, 0.5)',
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity },
          }}
        >
          {/* Heartbeat animation container */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10"
          >
            REGISTER NOW
          </motion.div>

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 bg-white mix-blend-overlay"
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />

          {/* Hover gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>

      {/* Sticky Register Button (appears on scroll) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-8 right-8 z-50"
          >
            <motion.button
              onClick={handleClick}
              className="px-6 py-3 font-cinematic font-bold text-white bg-cinematic-red rounded border-2 border-cinematic-red hover:bg-transparent transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 15px rgba(139, 0, 0, 0.4)',
                  '0 0 30px rgba(139, 0, 0, 0.6)',
                  '0 0 15px rgba(139, 0, 0, 0.4)',
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
              }}
            >
              REGISTER
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-cinematic-black border-2 border-cinematic-red rounded-lg p-8 max-w-2xl w-full mx-4 cinematic-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white hover:text-cinematic-red transition-colors text-2xl"
              >
                ×
              </button>

              <h2 className="font-cinematic text-4xl font-bold text-white text-glow-red mb-4">
                Join ZYNORA
              </h2>

              <p className="font-body text-gray-300 mb-6">
                Registration form will open here. The event organizers will provide the Google Forms link.
              </p>

              {/* Placeholder for Google Forms iframe */}
              <div className="w-full h-96 bg-cinematic-blue/20 rounded border border-cinematic-red/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Google Forms Integration</p>
                  <p className="text-sm text-gray-500">
                    Add your Google Form URL to .env.local
                    <br />
                    NEXT_PUBLIC_GOOGLE_FORM_URL=your-form-url
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 font-body text-white border border-cinematic-red hover:bg-cinematic-red transition-all duration-300 rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
