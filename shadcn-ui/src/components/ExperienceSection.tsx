import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Palette, Code, Calendar, MapPin, TrendingUp, Award, Target, Sparkles, ChevronRight, Building, Clock } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedExp, setSelectedExp] = useState(0);

  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern',
      company: 'Innotech Solutions Pvt Ltd',
      location: 'Pune, MH',
      duration: 'Aug 2024 - Oct 2024',
      type: 'Internship',
      description: 'Analyzed large datasets and developed ML models for business insights using Python and advanced data science techniques',
      highlights: [
        '🔍 Processed and analyzed 50,000+ data points using Python and pandas',
        '⚡ Improved model accuracy by 15% through feature engineering and hyperparameter tuning',
        '📊 Created interactive dashboards reducing report generation time by 40%',
        '🤖 Implemented automated data pipeline processing 10GB+ daily data'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'SQL', 'PowerBI'],
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      metrics: {
        dataPoints: '50K+',
        accuracy: '+15%',
        timeReduction: '40%'
      }
    },
    {
      id: 2,
      title: 'AI Research Assistant',
      company: 'Zenskar Technologies',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      type: 'Research',
      description: 'Contributed to cutting-edge AI research projects and model optimization with focus on NLP and deep learning',
      highlights: [
        '🧠 Researched and implemented state-of-the-art NLP models for text analysis',
        '⚙️ Optimized neural network architectures reducing training time by 25%',
        '📝 Co-authored technical documentation for 3 research papers',
        '🔬 Conducted experiments on transformer models with 95% accuracy rates'
      ],
      skills: ['AI Research', 'NLP', 'PyTorch', 'Research', 'Deep Learning', 'Transformers'],
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      metrics: {
        papers: '3',
        accuracy: '95%',
        optimization: '25%'
      }
    },
    {
      id: 3,
      title: 'Flutter Developer',
      company: 'CodeWithHarry',
      location: 'Remote',
      duration: 'Mar 2024 - May 2024',
      type: 'Internship',
      description: 'Developed cross-platform mobile applications using Flutter and contributed to open-source projects',
      highlights: [
        '📱 Built 3 complete Flutter applications with Firebase integration',
        '🎨 Implemented responsive UI/UX designs following Material Design principles',
        '🔧 Optimized app performance resulting in 30% faster load times',
        '📚 Created comprehensive documentation and tutorials for the community'
      ],
      skills: ['Flutter', 'Dart', 'Firebase', 'Mobile Development', 'Git', 'API Integration'],
      icon: Palette,
      color: 'from-teal-500 to-blue-500',
      metrics: {
        apps: '3',
        performance: '+30%',
        community: '1K+'
      }
    },
    {
      id: 4,
      title: 'Technical Lead',
      company: 'DSAIII Club',
      location: 'SINHGAD Institute',
      duration: 'Jan 2024 - Present',
      type: 'Leadership',
      description: 'Leading technical initiatives and community building while managing development projects and workshops',
      highlights: [
        '💻 Built responsive websites and event management systems for DSAIII Club',
        '🌍 Developed NGO management system at Byteminds for social impact initiatives',
        '🛠️ Organized and conducted 15+ technical workshops and coding bootcamps',
        '👥 Mentored 50+ students in programming and career development'
      ],
      skills: ['Leadership', 'Web Development', 'Community Building', 'Project Management', 'Mentoring'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      metrics: {
        workshops: '15+',
        students: '50+',
        projects: '5+'
      }
    },
    {
      id: 5,
      title: 'Web Developer',
      company: 'Freelance Projects',
      location: 'Remote/Pune',
      duration: 'Oct 2023 - Present',
      type: 'Freelance',
      description: 'Delivered custom web solutions for small businesses and startups, focusing on modern web technologies',
      highlights: [
        '🚀 Completed 8+ client projects with 100% satisfaction rate',
        '💼 Developed e-commerce platforms and business websites',
        '⚡ Improved website loading speeds by 45% on average',
        '🎯 Increased client conversion rates by 25% through optimization'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'WordPress', 'SEO', 'E-commerce'],
      icon: Building,
      color: 'from-orange-500 to-red-500',
      metrics: {
        projects: '8+',
        satisfaction: '100%',
        conversion: '+25%'
      }
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Research': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'Leadership': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Freelance': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={staggerItem}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-700 font-medium mb-4 md:mb-6 neumorphism-inset text-sm md:text-base">
              <Briefcase className="w-3 md:w-4 h-3 md:h-4" />
              Professional Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent px-4">
              Experience & Growth
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              From data science internships to AI research and community leadership, 
              here's my journey of continuous learning and impact.
            </p>
          </motion.div>

          {/* Experience Selector */}
          <motion.div
            variants={staggerItem}
            className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start"
          >
            {/* Experience Cards Selector */}
            <div className="lg:col-span-4 space-y-3 md:space-y-4">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setSelectedExp(index)}
                    className={`w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 group hover:scale-105 ${
                      selectedExp === index
                        ? 'bg-white shadow-2xl ring-2 ring-purple-500 neumorphism-raised'
                        : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 neumorphism'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${exp.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <IconComponent className="w-5 md:w-6 h-5 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1 md:mb-2">
                          <h3 className={`font-bold text-base md:text-lg transition-colors ${
                            selectedExp === index ? 'text-purple-600' : 'text-gray-800 dark:text-white'
                          }`}>
                            {exp.title}
                          </h3>
                          <ChevronRight className={`w-4 md:w-5 h-4 md:h-5 transition-all duration-300 ${
                            selectedExp === index ? 'text-purple-500 rotate-90' : 'text-gray-400'
                          }`} />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Experience Details */}
            <div className="lg:col-span-8">
              <motion.div
                key={selectedExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl neumorphism-raised"
              >
                {(() => {
                  const exp = experiences[selectedExp];
                  const IconComponent = exp.icon;
                  return (
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-start gap-6">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} shadow-xl`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <Building className="w-4 h-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        {exp.description}
                      </p>

                      {/* Key Metrics */}
                      {exp.metrics && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                          {Object.entries(exp.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl neumorphism-inset">
                              <div className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
                                {value}
                              </div>
                              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlights */}
                      <div className="mb-6 md:mb-8">
                        <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                          <Target className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2 md:space-y-3">
                          {exp.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-gradient-to-r from-white/60 to-purple-50/60 dark:from-gray-800/60 dark:to-purple-900/20 neumorphism-inset"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1.5 md:mt-2 flex-shrink-0" />
                              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                          <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {exp.skills.map((skill, index) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 text-purple-700 dark:text-purple-300 rounded-full font-medium text-sm md:text-base neumorphism-inset hover:shadow-lg transition-shadow"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={staggerItem}
            className="text-center mt-16 md:mt-20"
          >
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 group neumorphism-raised text-sm md:text-base">
              <span>Want to collaborate?</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
