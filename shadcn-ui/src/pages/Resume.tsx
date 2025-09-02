import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import siteConfig from '@/lib/siteConfig';

const ResumePage: React.FC = () => {
  const handleDownload = () => {
    // Open Google Drive download link in new tab
    window.open(siteConfig.resume, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-[var(--neuro-bg-secondary)]">
      <div className="max-w-lg mx-auto neuro-card p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Download Resume</h1>
          <p className="text-[var(--neuro-text-secondary)] mb-8">
            Get a copy of my latest resume with all my experience, skills, and achievements.
          </p>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="neuro-button px-8 py-4 text-lg font-medium text-[var(--neuro-text-primary)] glow-effect flex items-center space-x-3 mx-auto"
          >
            <Download className="w-6 h-6" />
            <span>Download Resume</span>
          </motion.button>

          <p className="text-sm text-[var(--neuro-text-secondary)] mt-6">
            Click to download the resume from Google Drive. It will open in a new tab.<br/>
            Having trouble? Email me at <a className="underline gradient-text" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ResumePage;
