import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { staggerContainer, staggerItem, cardHoverVariants } from '@/lib/animations';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform with real-time inventory management and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Intuitive task management application with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with advanced animations and interactive elements showcasing creative work.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with interactive maps and detailed forecasts for multiple locations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Full-featured social media application with real-time messaging and content sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['React Native', 'GraphQL', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with interactive charts and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[var(--neuro-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and creative approaches to complex challenges.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <motion.div
                variants={cardHoverVariants}
                className="neuro-card overflow-hidden h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="neuro-button p-3 bg-white/20 backdrop-blur-sm"
                      aria-label="View live project"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="neuro-button p-3 bg-white/20 backdrop-blur-sm"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="neuro-button p-3 bg-white/20 backdrop-blur-sm"
                      aria-label="External link"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="neuro-button px-3 py-1 text-xs font-semibold gradient-text">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--neuro-text-primary)] mb-3 group-hover:text-[var(--neuro-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--neuro-text-secondary)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="neuro-inset px-3 py-1 text-xs font-medium text-[var(--neuro-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={staggerItem}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neuro-button px-8 py-4 text-lg font-medium text-[var(--neuro-text-primary)] glow-effect"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;