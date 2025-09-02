import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Briefcase, Users, Palette, Code, Calendar, MapPin, TrendingUp, 
  Award, Target, ChevronRight, Building, Clock, GraduationCap,
  Database, BookOpen, Heart, Star, Zap
} from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedExp, setSelectedExp] = useState(-1);

  const experiences = [
    {
      id: 1,
      title: 'Secretary',
      company: 'Tarang Club (Cultural)',
      institution: 'D. Y. Patil Institute of Technology (DYPIT)',
      duration: '2024 – Present',
      type: 'Leadership',
      category: 'Experience',
      description: 'Led the cultural club\'s administration, event coordination, and team initiatives.',
      overview: 'Led the cultural club\'s administration, event coordination, and team initiatives.',
      impact: [
        'Organized 7+ major campus events and festivals',
        'Managed communications for 40+ team members'
      ],
      achievements: [
        '🎤 Hosted flagship annual cultural fest',
        '🗂️ Improved digital coordination workflows'
      ],
      skills: ['Event Management', 'Administration', 'Team Communication'],
      technologies: ['Event Management Tools', 'Communication Platforms'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Design Lead',
      company: 'S4DS (Society for Data Science)',
      institution: 'D. Y. Patil Institute of Technology (DYPIT)',
      duration: '2024 – Present',
      type: 'Leadership',
      category: 'Experience',
      description: 'Managed design and web presence for the college\'s chapter of the national data science society, leading a campus-wide team.',
      overview: 'Managed design and web presence for the college\'s chapter of the national data science society, leading a campus-wide team.',
      impact: [
        'Directed a team of 8+ designers/volunteers',
        'Oversaw 10+ successful design campaigns and college events'
      ],
      achievements: [
        '🖥️ Modernized the S4DS website and digital assets',
        '🎨 Created event branding for college-wide hackathons',
        '🙌 Led creative collaboration among campus societies'
      ],
      skills: ['Web Design', 'Team Leadership', 'Branding', 'Event Coordination'],
      technologies: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Branding Tools'],
      icon: Palette,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'CodeWithHarry',
      institution: '',
      duration: '2025 – Present',
      type: 'Internship',
      category: 'Internship',
      description: 'Hands-on internship involving real-world data science projects: Python, Pandas, NumPy, statistics, visualizations, and preprocessing.',
      overview: 'Hands-on internship involving real-world data science projects: Python, Pandas, NumPy, statistics, visualizations, and preprocessing.',
      impact: [
        'Completed 4+ mini projects end-to-end',
        'Collaborated on data pipelines and analytics dashboards'
      ],
      achievements: [
        '📊 Automated exploratory data analysis workflows',
        '🛠️ Built interactive dashboards using Python libraries'
      ],
      skills: ['Python', 'Data Analysis', 'ML', 'Visualization'],
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Visualization Libraries'],
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Technical Member',
      company: 'DSAIII Club',
      institution: 'D. Y. Patil Institute of Technology (DYPIT)',
      duration: 'Jan 2024 – Present',
      type: 'Leadership',
      category: 'Experience',
      description: 'Leading technical initiatives and community building while managing development projects and workshops.',
      overview: 'Leading technical initiatives and community building while managing development projects and workshops.',
      impact: [
        '15+ technical workshops and coding bootcamps organized',
        'Mentored 50+ students in programming and career development',
        'Led 5+ club development projects'
      ],
      achievements: [
        '💻 Built responsive websites and event management systems for DSAIII Club',
        '🌍 Developed NGO management system at Byteminds for social impact initiatives',
        '🛠️ Coordinated and conducted hands-on technical events',
        '👥 Fostered a supportive programming community'
      ],
      skills: ['Leadership', 'Web Development', 'Community Building', 'Project Management', 'Mentoring'],
      technologies: ['Python', 'JavaScript', 'Web Development Tools', 'Project Management'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Technical Member',
      company: 'Byteminds (NGO)',
      institution: '',
      duration: '2024',
      type: 'Volunteer',
      category: 'Experience',
      description: 'Taught coding at an NGO and contributed tech support for social awareness activities.',
      overview: 'Taught coding at an NGO and contributed tech support for social awareness activities.',
      impact: [
        'Instructed 30+ underprivileged students',
        'Provided technical solutions for 3+ awareness drives'
      ],
      achievements: [
        '📚 Developed beginner coding curriculum',
        '🛠️ Set up first-time tech infrastructure for events',
        '🌱 Supported social projects with technology'
      ],
      skills: ['Teaching', 'Social Impact', 'Coding Outreach', 'Technical Support'],
      technologies: ['Python', 'Scratch', 'Web Tools'],
      icon: Heart,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship': return Database;
      case 'Leadership': return Users;
      case 'Volunteer': return Heart;
      default: return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-700';
      case 'Leadership': return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border border-green-200 dark:border-green-700';
      case 'Volunteer': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 border border-orange-200 dark:border-orange-700';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/40 dark:text-gray-200 border border-gray-200 dark:border-gray-600';
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-[var(--neuro-bg-primary)]"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neuro-bg-primary)] via-[var(--neuro-bg-secondary)] to-[var(--neuro-bg-primary)]" />
      
      {/* Floating Elements - Reduced for Mobile Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <div className="w-1 h-1 bg-[var(--neuro-accent)] rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-20"
        >
          <motion.div variants={staggerItem} className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full neuro-card mb-8 glow-effect">
              <GraduationCap className="w-10 h-10 text-[var(--neuro-accent)]" />
            </div>
          </motion.div>
          
          <motion.h2 
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--neuro-text-primary)] mb-8"
          >
            Professional
            <span className="gradient-text block mt-2">Experience</span>
          </motion.h2>
          
          <motion.p 
            variants={staggerItem}
            className="text-xl md:text-2xl text-[var(--neuro-text-secondary)] max-w-4xl mx-auto leading-relaxed"
          >
            A journey through leadership, innovation, and social impact. Each role has shaped my passion 
            for creating meaningful change through technology and community building.
          </motion.p>
        </motion.div>

        {/* Experience Cards - Modern Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid gap-8 md:gap-12"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const TypeIcon = getTypeIcon(exp.type);
            const isSelected = selectedExp === index;
            
            return (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="group relative"
              >
                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative neuro-card p-8 md:p-10 hover:glow-effect transition-all duration-500 bg-[var(--neuro-bg-primary)] dark:bg-[var(--neuro-bg-primary)]"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-gradient-to-br from-current to-transparent" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-gradient-to-tr from-current to-transparent" />
                  </div>

                  <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col space-y-6 mb-6">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 180, scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl neuro-card flex items-center justify-center bg-gradient-to-br ${exp.color} flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          {/* Type Badge */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mb-3">
                            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${getTypeColor(exp.type)} w-fit`}>
                              <TypeIcon className="w-3 h-3 mr-2" />
                              {exp.type}
                            </span>
                            <span className="text-xs sm:text-sm text-[var(--neuro-text-secondary)] flex items-center">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              {exp.duration}
                            </span>
                          </div>

                          {/* Title & Company */}
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--neuro-text-primary)] mb-2 leading-tight">
                            {exp.title}
                          </h3>
                          
                          <div className="space-y-1">
                            <div className="flex items-start text-sm sm:text-base lg:text-lg text-[var(--neuro-text-secondary)]">
                              <Building className="w-4 h-4 lg:w-5 lg:h-5 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="font-medium leading-tight">{exp.company}</span>
                            </div>
                            
                            {exp.institution && (
                              <div className="flex items-start text-xs sm:text-sm lg:text-base text-[var(--neuro-text-secondary)]">
                                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="leading-tight">{exp.institution}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Expand Button - Desktop */}
                        <motion.button
                          onClick={() => setSelectedExp(isSelected ? -1 : index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="hidden lg:flex items-center justify-center w-10 h-10 neuro-button rounded-full text-[var(--neuro-text-primary)]"
                        >
                          <motion.div
                            animate={{ rotate: isSelected ? 90 : 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>

                    {/* Overview */}
                    <p className="text-base lg:text-lg text-[var(--neuro-text-secondary)] leading-relaxed mb-6">
                      {exp.overview}
                    </p>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isSelected ? 'auto' : 0,
                        opacity: isSelected ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 lg:pt-8 border-t-2 border-[var(--neuro-border)]">
                        {/* Impact Section */}
                        <div className="mb-6 lg:mb-8">
                          <h4 className="text-lg lg:text-xl font-bold text-[var(--neuro-text-primary)] mb-3 lg:mb-4 flex items-center">
                            <Target className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-[var(--neuro-accent)]" />
                            Impact
                          </h4>
                          <ul className="space-y-2 lg:space-y-3">
                            {exp.impact.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -20 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-sm lg:text-base text-[var(--neuro-text-secondary)] flex items-start"
                              >
                                <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 mt-0.5 lg:mt-1 text-[var(--neuro-accent)] flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Achievements */}
                        <div className="mb-6 lg:mb-8">
                          <h4 className="text-lg lg:text-xl font-bold text-[var(--neuro-text-primary)] mb-3 lg:mb-4 flex items-center">
                            <Award className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-[var(--neuro-accent)]" />
                            Key Achievements
                          </h4>
                          <div className="grid gap-3 lg:gap-4 sm:grid-cols-2">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isSelected ? 1 : 0, y: isSelected ? 0 : 20 }}
                                transition={{ delay: idx * 0.1 }}
                                className="neuro-inset p-3 lg:p-4 rounded-lg lg:rounded-xl"
                              >
                                <div className="text-[var(--neuro-text-secondary)] flex items-start">
                                  <span className="text-lg lg:text-2xl mr-2 lg:mr-3 flex-shrink-0">{achievement.split(' ')[0]}</span>
                                  <span className="text-xs lg:text-sm leading-relaxed">{achievement.split(' ').slice(1).join(' ')}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2">
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-[var(--neuro-text-primary)] mb-3 lg:mb-4 flex items-center">
                              <Zap className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-[var(--neuro-accent)]" />
                              Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.8 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="px-2.5 lg:px-3 py-1 lg:py-1.5 bg-[var(--neuro-accent)]/10 text-[var(--neuro-accent)] rounded text-xs lg:text-sm font-medium border border-[var(--neuro-accent)]/20 dark:bg-[var(--neuro-accent)]/20 dark:border-[var(--neuro-accent)]/30"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-[var(--neuro-text-primary)] mb-3 lg:mb-4 flex items-center">
                              <Code className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-[var(--neuro-accent)]" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.8 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="px-2.5 lg:px-3 py-1 lg:py-1.5 bg-[var(--neuro-bg-secondary)] text-[var(--neuro-text-secondary)] rounded text-xs lg:text-sm font-medium border border-[var(--neuro-border)] dark:bg-[var(--neuro-bg-secondary)] dark:border-[var(--neuro-border)]"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mobile Expand Button */}
                    <motion.button
                      onClick={() => setSelectedExp(isSelected ? -1 : index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="lg:hidden w-full mt-6 neuro-button py-3 px-4 text-sm font-medium text-[var(--neuro-text-primary)] flex items-center justify-center rounded-lg"
                    >
                      <span>{isSelected ? 'Show Less' : 'View Details'}</span>
                      <motion.div
                        animate={{ rotate: isSelected ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={staggerItem}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="neuro-button px-8 py-4 text-lg font-semibold text-[var(--neuro-text-primary)] rounded-xl hover:glow-effect transition-all duration-300"
            >
              Let's Work Together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
