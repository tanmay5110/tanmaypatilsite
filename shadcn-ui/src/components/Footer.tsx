import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 md:py-10 bg-[var(--neuro-bg-secondary)] border-t border-[var(--neuro-border)]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--neuro-bg-primary)] to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center"
        >
          {/* Inspirational Quote - Compact */}
          <motion.div variants={staggerItem} className="mb-6">
            <div className="neuro-card p-4 md:p-6 max-w-xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {/* Quote marks decoration - smaller */}
                <div className="absolute -top-2 -left-2 text-2xl md:text-3xl text-[var(--neuro-accent)] opacity-20 font-serif">
                  "
                </div>
                <div className="absolute -bottom-2 -right-2 text-2xl md:text-3xl text-[var(--neuro-accent)] opacity-20 font-serif">
                  "
                </div>
                
                <blockquote className="text-sm md:text-base font-light text-[var(--neuro-text-primary)] leading-relaxed mb-3 relative z-10">
                  The future belongs to those who learn more skills and combine them in creative ways
                </blockquote>
                
                <div className="flex items-center justify-center space-x-2 text-xs text-[var(--neuro-text-secondary)]">
                  <Sparkles className="w-3 h-3 text-[var(--neuro-accent)]" />
                  <span className="italic">— Robert Greene</span>
                  <Sparkles className="w-3 h-3 text-[var(--neuro-accent)]" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Content - Compact */}
          <motion.div variants={staggerItem} className="space-y-3">
            {/* Made with love section */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs md:text-sm text-[var(--neuro-text-secondary)]">
              <span>Crafted with</span>
              <div className="flex items-center space-x-1">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-400 fill-current" />
                </motion.div>
                <span>passion & innovation</span>
              </div>
            </div>

            {/* Copyright - Compact */}
            <div className="text-xs text-[var(--neuro-text-secondary)]">
              © {currentYear} Tanmay Patil • Building tomorrow's solutions
            </div>
          </motion.div>

          {/* Back to Top Button - Smaller */}
          <motion.div
            variants={staggerItem}
            className="mt-6"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="neuro-button w-10 h-10 rounded-full flex items-center justify-center text-[var(--neuro-text-primary)] hover:glow-effect transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:text-[var(--neuro-accent)] transition-colors" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;