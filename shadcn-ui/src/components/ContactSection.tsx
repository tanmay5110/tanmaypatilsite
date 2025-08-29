import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { staggerContainer, staggerItem, inputFocusVariants } from '@/lib/animations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@example.com',
      href: 'mailto:alex.chen@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[var(--neuro-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
                Let's Connect
              </h3>
              <p className="text-[var(--neuro-text-secondary)] mb-8 leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. 
                Feel free to reach out through any of the channels below.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    variants={staggerItem}
                    href={info.href}
                    whileHover={{ scale: 1.02 }}
                    className="neuro-card p-6 flex items-center space-x-4 block hover:glow-effect transition-all duration-300"
                  >
                    <div className="neuro-button p-3">
                      <Icon className="w-6 h-6 text-[var(--neuro-accent)]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neuro-text-primary)]">
                        {info.label}
                      </div>
                      <div className="text-[var(--neuro-text-secondary)]">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="pt-8">
              <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="neuro-button p-4 hover:glow-effect transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-[var(--neuro-accent)]" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <motion.div variants={staggerItem} className="neuro-card p-8">
              <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-6">
                Send a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 neuro-inset rounded-lg"
                >
                  <p className="text-[var(--neuro-success)] font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={staggerItem}>
                    <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                      Name *
                    </label>
                    <motion.input
                      variants={inputFocusVariants}
                      whileFocus="focus"
                      initial="rest"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[var(--neuro-error)]">
                        {errors.name.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                      Email *
                    </label>
                    <motion.input
                      variants={inputFocusVariants}
                      whileFocus="focus"
                      initial="rest"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[var(--neuro-error)]">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                    Subject *
                  </label>
                  <motion.input
                    variants={inputFocusVariants}
                    whileFocus="focus"
                    initial="rest"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-[var(--neuro-error)]">
                      {errors.subject.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-medium text-[var(--neuro-text-primary)] mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    variants={inputFocusVariants}
                    whileFocus="focus"
                    initial="rest"
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 neuro-inset rounded-lg bg-transparent text-[var(--neuro-text-primary)] focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-[var(--neuro-error)]">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full neuro-button px-6 py-4 text-lg font-medium text-[var(--neuro-text-primary)] flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'glow-effect'
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-[var(--neuro-accent)] border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;