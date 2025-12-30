'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggs() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const konami = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.key].slice(-10);
      setKonamiCode(newCode);

      if (JSON.stringify(newCode) === JSON.stringify(konami)) {
        activateSecretMode();
        setKonamiCode([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiCode]);

  const handleLogoClick = () => {
    setLogoClicks((prev) => prev + 1);
    
    if (logoClicks + 1 === 5) {
      setShowSecret(true);
      setTimeout(() => setShowSecret(false), 3000);
      setLogoClicks(0);
    }
  };

  const activateSecretMode = () => {
    // Secret animation
    const body = document.body;
    body.style.animation = 'flicker 0.3s ease-in-out 3';
    
    setTimeout(() => {
      body.style.animation = '';
      alert('🎬 Secret Unlocked! You found the hidden cinema mode!');
    }, 1000);
  };

  return (
    <>
      {/* Hidden Logo Click Area */}
      <div
        onClick={handleLogoClick}
        className="fixed top-4 left-4 w-12 h-12 cursor-pointer z-50 opacity-0 hover:opacity-10 transition-opacity"
        title="Click me 5 times..."
      >
        <div className="w-full h-full bg-cinematic-red rounded-full" />
      </div>

      {/* Secret Message */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200]"
          >
            <div className="bg-black border-2 border-cinematic-red rounded-lg p-8 text-center cinematic-shadow">
              <motion.p
                className="font-cinematic text-3xl text-white text-glow-red"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                🎭 You found a secret! 🎭
              </motion.p>
              <p className="font-body text-gray-400 mt-4">
                The legends are watching...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sound Toggle Button */}
      <motion.button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-cinematic-black border-2 border-cinematic-red/30 flex items-center justify-center text-white hover:border-cinematic-red transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Toggle ambient sound"
      >
        {soundEnabled ? '🔊' : '🔇'}
      </motion.button>

      {/* Hidden Glow Paths */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-40 bg-gradient-to-b from-transparent via-cinematic-red/20 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Hidden Symbols (reveal on hover) */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 space-y-4 opacity-0 hover:opacity-100 transition-opacity duration-500 z-40">
        {['△', '○', '□', '✕'].map((symbol, i) => (
          <motion.div
            key={i}
            className="w-8 h-8 border-2 border-cinematic-red/30 rounded flex items-center justify-center text-cinematic-red text-xl"
            whileHover={{
              scale: 1.5,
              borderColor: 'rgba(220, 38, 38, 1)',
              boxShadow: '0 0 20px rgba(220, 38, 38, 0.8)',
            }}
            title="Squid Game Symbol"
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Ambient Sound Message */}
      <AnimatePresence>
        {soundEnabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-8 bg-black/80 border border-cinematic-red/30 rounded px-4 py-2 text-sm text-gray-400 z-50"
          >
            Ambient sound enabled
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
