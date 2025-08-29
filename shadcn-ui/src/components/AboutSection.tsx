import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { staggerContainer, staggerItem, progressVariants } from '@/lib/animations';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Frontend Development', percentage: 95, icon: Code2 },
    { name: 'UI/UX Design', percentage: 88, icon: Palette },
    { name: 'Performance Optimization', percentage: 92, icon: Rocket },
    { name: 'Team Collaboration', percentage: 90, icon: Users },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[var(--neuro-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto">
            Passionate about creating digital experiences that inspire and engage. 
            With a keen eye for design and a love for clean code, I bring ideas to life through innovative web solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <motion.div variants={staggerItem} className="neuro-card p-8">
              <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-4">
                My Journey
              </h3>
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed mb-4">
                Started as a curious designer who fell in love with code. Over the years, I've evolved into a 
                full-stack developer with a passion for creating seamless user experiences that bridge the gap 
                between beautiful design and functional technology.
              </p>
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed">
                I believe in the power of continuous learning and staying ahead of the curve with the latest 
                technologies and design trends. Every project is an opportunity to push boundaries and create 
                something extraordinary.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="neuro-card p-6 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--neuro-text-secondary)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <motion.h3 variants={staggerItem} className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
              Skills & Expertise
            </motion.h3>
            
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="neuro-card p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="neuro-button p-3 mr-4">
                      <Icon className="w-6 h-6 text-[var(--neuro-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--neuro-text-primary)]">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-[var(--neuro-text-secondary)]">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="neuro-progress h-3">
                    <motion.div
                      variants={progressVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      custom={skill.percentage}
                      className="neuro-progress-fill h-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;