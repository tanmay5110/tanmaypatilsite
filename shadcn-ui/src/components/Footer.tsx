import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const inspirationalQuotes = [
    "Code is poetry written in logic.",
    "Dream in code, build in reality.",
    "Every great developer was once a beginner.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Simplicity is the ultimate sophistication.",
    "First, solve the problem. Then, write the code."
  ];

  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-50/20 dark:to-gray-900/20 py-12 px-4 relative border-t border-gray-200/10 dark:border-gray-800/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <blockquote className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-400 font-light mb-3">
            "{randomQuote}"
          </blockquote>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-300 dark:via-purple-600 to-transparent mx-auto"></div>
        </motion.div>

        {/* Elegant Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Made with love section */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="italic">Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span className="italic">passion &</span>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Coffee className="w-4 h-4 text-amber-500" />
            </motion.div>
            <span className="italic">endless curiosity</span>
          </div>

          {/* Copyright with style */}
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 dark:text-gray-500">
            <Code className="w-3 h-3" />
            <span className="italic">© {currentYear} • Designed & Developed by Tanmay Patil</span>
            <Code className="w-3 h-3" />
          </div>

          {/* Subtle tagline */}
          <p className="text-xs italic text-gray-400 dark:text-gray-600 mt-2">
            Building tomorrow's solutions, one line at a time
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-purple-500 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;