import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import { staggerContainer, staggerItem, floatingVariants } from '@/lib/animations';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI/Data Science Engineer | Automation Enthusiast | Flutter Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tanmay5110',
      color: '#0077B5'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/tanmay5110',
      color: '#333'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://tanmaypatil.fun',
      color: '#667eea'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neuro-bg-primary)] to-[var(--neuro-bg-secondary)]">
        {/* Optimized Particle Background */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute neuro-card w-3 h-3 rounded-full opacity-20"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--neuro-text-primary)] mb-4">
                Tanmay Patil
              </h1>
            </motion.div>

            <motion.div variants={staggerItem} className="mb-6">
              <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-lg md:text-xl lg:text-2xl font-light gradient-text text-center lg:text-left leading-relaxed">
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

            <motion.div variants={staggerItem} className="mb-8">
              <p className="text-base md:text-lg text-[var(--neuro-text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                B.E. in Artificial Intelligence & Data Science (CGPA 8.8) | Building intelligent automation solutions, 
                mobile apps, and AI-powered platforms. Currently interning at CodeWithHarry.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={staggerItem} className="mb-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[var(--neuro-text-secondary)]">
                <span>📧 tanmaypatil5110@gmail.com</span>
                <span>📱 +91 9876543210</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="mb-8">
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="neuro-button p-3 hover:glow-effect transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-[var(--neuro-accent)]" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="neuro-button px-6 py-3 text-base font-medium text-[var(--neuro-text-primary)] glow-effect"
              >
                View My Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="neuro-button px-6 py-3 text-base font-medium text-[var(--neuro-text-primary)]"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div 
            variants={staggerItem}
            initial="initial"
            animate="animate"
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Profile Photo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 neuro-card rounded-full overflow-hidden glow-effect">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Tanmay Patil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Optimized Particle Halo Effect */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="absolute w-3 h-3 bg-gradient-to-r from-[var(--neuro-accent)] to-[var(--neuro-accent-light)] rounded-full opacity-60"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${120 + i * 15}px 0px`,
                  }}
                />
              ))}

              {/* Floating Tech Icons */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 neuro-button p-3 text-xs font-semibold gradient-text"
              >
                AI/ML
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 neuro-button p-3 text-xs font-semibold gradient-text"
              >
                Flutter
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -left-8 neuro-button p-3 text-xs font-semibold gradient-text"
              >
                Python
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="neuro-button p-3 rounded-full"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-5 h-5 text-[var(--neuro-text-primary)]" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;