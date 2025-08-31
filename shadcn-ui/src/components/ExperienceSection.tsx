import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Palette, Code, Calendar, MapPin } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern',
      organization: 'CodeWithHarry',
      period: '2024',
      location: 'Remote',
      type: 'Internship',
      icon: Briefcase,
      color: '#667eea',
      description: 'Worked on Python-based data analysis projects using Pandas for data manipulation and visualization. Contributed to real-world mini-projects involving data cleaning, statistical analysis, and creating insightful visualizations.',
      skills: ['Python', 'Pandas', 'Data Visualization', 'Statistical Analysis', 'Data Cleaning'],
      achievements: [
        'Completed 5+ real-world data analysis projects',
        'Improved data processing efficiency by 40%',
        'Created comprehensive data visualization dashboards'
      ]
    },
    {
      id: 2,
      title: 'Secretary',
      organization: 'Tarang Club',
      period: '2023-2024',
      location: 'College',
      type: 'Leadership',
      icon: Users,
      color: '#4ecdc4',
      description: 'Led cultural events and managed administrative responsibilities for the college cultural club. Coordinated with multiple teams and organized large-scale events for student engagement.',
      skills: ['Leadership', 'Event Management', 'Team Coordination', 'Administration', 'Communication'],
      achievements: [
        'Successfully organized 10+ cultural events',
        'Managed a team of 25+ volunteers',
        'Increased club participation by 60%'
      ]
    },
    {
      id: 3,
      title: 'Design Lead',
      organization: 'S4DS (Society for Data Science)',
      period: '2023-Present',
      location: 'College',
      type: 'Leadership',
      icon: Palette,
      color: '#ff6b6b',
      description: 'Leading web design and visual identity for the Data Science Society. Managing design team and overseeing all visual communications, website development, and promotional materials.',
      skills: ['UI/UX Design', 'Web Design', 'Team Management', 'Figma', 'Brand Identity'],
      achievements: [
        'Redesigned society website with 50% improved UX',
        'Led design team of 8 members',
        'Created cohesive brand identity across all platforms'
      ]
    },
    {
      id: 4,
      title: 'Technical Member',
      organization: 'DSAIII Club',
      period: '2024',
      location: 'College',
      type: 'Technical',
      icon: Code,
      color: '#f093fb',
      description: 'Developed club website and event management tools. Contributed to technical infrastructure and helped organize coding competitions and technical workshops.',
      skills: ['Web Development', 'Event Tools', 'JavaScript', 'Database Management', 'Technical Support'],
      achievements: [
        'Built responsive club website from scratch',
        'Developed event registration system',
        'Supported 15+ technical workshops'
      ]
    },
    {
      id: 5,
      title: 'Technical Member',
      organization: 'Byteminds',
      period: '2024',
      location: 'NGO',
      type: 'Volunteer',
      icon: Code,
      color: '#43e97b',
      description: 'Coding for social good - developing technology solutions for NGO operations and creating awareness through tech-driven initiatives. Focus on creating impactful digital solutions.',
      skills: ['Social Impact Tech', 'Web Development', 'Awareness Campaigns', 'Volunteer Coordination'],
      achievements: [
        'Developed NGO management system',
        'Created digital awareness campaigns',
        'Contributed 100+ volunteer hours'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 px-4 bg-[var(--neuro-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
            Experience & Leadership
          </motion.h2>
          <motion.p variants={staggerItem} className="text-base md:text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto">
            A journey through various roles in technology, leadership, and social impact, 
            building skills and making meaningful contributions.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="relative"
        >
          {/* Timeline Line - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--neuro-accent)] to-[var(--neuro-accent-light)] transform -translate-x-1/2 rounded-full"></div>

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 mb-4 md:mb-0"
                >
                  <div 
                    className="neuro-card p-3 md:p-4 rounded-full"
                    style={{ backgroundColor: `${exp.color}20` }}
                  >
                    <IconComponent 
                      className="w-6 md:w-8 h-6 md:h-8" 
                      style={{ color: exp.color }} 
                    />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 15px 30px ${exp.color}30`
                  }}
                  className={`neuro-card p-6 md:p-8 ${
                    isEven ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'
                  } md:w-5/12 w-full relative overflow-hidden`}
                >
                  {/* Simplified Background for Mobile */}
                  <div className="absolute inset-0 opacity-5 hidden md:block">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-full h-full"
                      style={{
                        background: `conic-gradient(from 0deg, ${exp.color}, transparent, ${exp.color})`
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span 
                          className="neuro-inset px-2 md:px-3 py-1 text-xs font-semibold rounded-full"
                          style={{ color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <div className="flex items-center text-xs md:text-sm text-[var(--neuro-text-secondary)]">
                          <Calendar className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-xs md:text-sm text-[var(--neuro-text-secondary)]">
                          <MapPin className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-[var(--neuro-text-primary)] mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-base md:text-lg font-medium" style={{ color: exp.color }}>
                        {exp.organization}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[var(--neuro-text-secondary)] mb-4 md:mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-[var(--neuro-text-primary)] mb-2 md:mb-3 text-sm md:text-base">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.05, 
                            }}
                            className="neuro-inset px-2 md:px-3 py-1 text-xs font-medium text-[var(--neuro-text-secondary)]"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-[var(--neuro-text-primary)] mb-2 md:mb-3 text-sm md:text-base">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-start text-xs md:text-sm text-[var(--neuro-text-secondary)]"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: achIndex * 0.3 
                              }}
                              className="w-2 h-2 rounded-full mr-2 md:mr-3 mt-1 md:mt-2 flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;