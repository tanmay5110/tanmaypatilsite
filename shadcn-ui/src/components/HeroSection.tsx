import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, staggerItem, floatingVariants } from '@/lib/animations';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Creative Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neuro-bg-primary)] to-[var(--neuro-bg-secondary)]">
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute neuro-card w-16 h-16 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={staggerItem} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-[var(--neuro-text-primary)] mb-4">
            Alex Chen
          </h1>
        </motion.div>

        <motion.div variants={staggerItem} className="mb-8">
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-light gradient-text">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </h2>
          </div>
        </motion.div>

        <motion.div variants={staggerItem} className="mb-12">
          <p className="text-lg md:text-xl text-[var(--neuro-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend innovative design with cutting-edge technology. 
            Specializing in interactive web applications and immersive user interfaces.
          </p>
        </motion.div>

        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="neuro-button px-8 py-4 text-lg font-medium text-[var(--neuro-text-primary)] glow-effect"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="neuro-button px-8 py-4 text-lg font-medium text-[var(--neuro-text-primary)]"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="neuro-button p-3 rounded-full"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-6 h-6 text-[var(--neuro-text-primary)]" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;