import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users, GraduationCap, Calendar, Heart, Target, Cloud, Bot } from 'lucide-react';
import { staggerContainer, staggerItem, progressVariants } from '@/lib/animations';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Python & AI/ML', percentage: 85, icon: Code2, color: '#3776ab' },
    { name: 'Data Science & Analytics', percentage: 80, icon: Palette, color: '#ff6b35' },
    { name: 'Flutter & Mobile Dev', percentage: 75, icon: Rocket, color: '#02569b' },
    { name: 'Cloud & APIs', percentage: 70, icon: Cloud, color: '#ff9900' },
    { name: 'Web Development', percentage: 75, icon: Users, color: '#4facfe' },
  ];

  const techStack = [
    'Python', 'JavaScript', 'Dart', 'Flutter', 'Flask', 'HTML', 'CSS',
    'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Google Vision OCR',
    'AWS', 'GCP', 'n8n', 'REST APIs', 'Git', 'SQL', 'Figma', 'Data Visualization'
  ];

  const education = [
    {
      degree: 'B.E. Artificial Intelligence & Data Science',
      institution: 'Savitribai Phule Pune University (SPPU)',
      year: '2023-2027',
      cgpa: '8.8 CGPA',
      status: 'Current'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Pratibha International, Pune',
      year: '2023',
      cgpa: '74.5%',
      status: 'Completed'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Amrita Vidyalayam, Pune',
      year: '2021',
      cgpa: '81.4%',
      status: 'Completed'
    }
  ];

  const funFacts = [
    { icon: Target, text: 'Automation Enthusiast', color: '#667eea' },
    { icon: Heart, text: 'Flutter Developer', color: '#02569b' },
    { icon: Bot, text: 'AI/ML Specialist', color: '#4facfe' },
    { icon: Code2, text: 'Data Science Intern', color: '#43e97b' }
  ];

  return (
    <section id="about" className="py-20 md:py-24 px-4 bg-[var(--neuro-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
            About Me
          </motion.h2>
          <motion.h3 variants={staggerItem} className="text-xl md:text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6 md:mb-8 text-center">
            Education
          </motion.h3>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="neuro-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="neuro-button p-3 mx-auto md:mx-0 w-fit">
                    <GraduationCap className="w-6 md:w-8 h-6 md:h-8 text-[var(--neuro-accent)]" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-lg md:text-xl font-semibold text-[var(--neuro-text-primary)] mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-[var(--neuro-text-secondary)] mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </span>
                      <span className="neuro-inset px-3 py-1 rounded-full font-medium gradient-text">
                        {edu.cgpa}
                      </span>
                      <span className={`neuro-inset px-3 py-1 rounded-full ${
                        edu.status === 'Current' ? 'text-[var(--neuro-success)]' : 'text-[var(--neuro-text-secondary)]'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Skills Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <motion.h3 variants={staggerItem} className="text-xl md:text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
              Core Skills
            </motion.h3>
            
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="neuro-card p-4 md:p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="neuro-button p-2 md:p-3 mr-3 md:mr-4">
                      <Icon className="w-5 md:w-6 h-5 md:h-6" style={{ color: skill.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--neuro-text-primary)] text-sm md:text-base">
                        {skill.name}
                      </h4>
                      <span className="text-xs md:text-sm text-[var(--neuro-text-secondary)]">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="neuro-progress h-2 md:h-3">
                    <motion.div
                      variants={progressVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      custom={skill.percentage}
                      className="neuro-progress-fill h-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* Tech Stack Cloud */}
            <motion.div variants={staggerItem} className="neuro-card p-4 md:p-6">
              <h4 className="font-semibold text-[var(--neuro-text-primary)] mb-4 text-sm md:text-base">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="neuro-inset px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-medium text-[var(--neuro-text-secondary)] cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Fun Facts & Values */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <motion.h3 variants={staggerItem} className="text-xl md:text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
              What Drives Me
            </motion.h3>

            <motion.div variants={staggerItem} className="neuro-card p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-semibold text-[var(--neuro-text-primary)] mb-4">
                My Journey
              </h4>
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed mb-4 text-sm md:text-base">
                🚀 An enthusiastic and aspiring AI/ML engineer, I'm driven by curiosity and a passion for leveraging data science, collaboration, and innovative thinking to build impactful solutions. My journey is fueled by continuous learning and a vision to use cutting-edge tech—be it crafting intelligent automation, developing cross-platform apps, or uncovering insights through data. I thrive in dynamic environments where curiosity, teamwork, and real-world application come together.
              </p>
            </motion.div>

            {/* Current Status */}
            <motion.div variants={staggerItem} className="neuro-card p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-semibold text-[var(--neuro-text-primary)] mb-4">
                Current Focus
              </h4>
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed text-sm md:text-base">
                🌊 Currently developing an advanced research portal to help scientists explore and study oceans using deep learning, machine learning, LLMs, and AI-powered analytics.<br/>
                �️ My work spans intelligent database management, robust data pipelines, and solving complex, real-world problems—from data wrangling to building and deploying scalable solutions.<br/>
                🤝 I'm always learning from the vibrant data science community and turning new knowledge into innovative tools that connect research to real impact.
              </p>
            </motion.div>

            {/* Fun Facts Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {funFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 10px 25px ${fact.color}40`
                    }}
                    className="neuro-card p-4 md:p-6 text-center"
                  >
                    <div className="neuro-button p-2 md:p-3 mx-auto mb-2 md:mb-3 w-fit">
                      <Icon className="w-4 md:w-6 h-4 md:h-6" style={{ color: fact.color }} />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-[var(--neuro-text-primary)]">
                      {fact.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;