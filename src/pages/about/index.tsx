import Experience from './experience';
import { motion } from 'framer-motion';

import NavBar from '@/components/custom/navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <section className="max-w-4xl mx-auto px-6 sm:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-100 mb-4">About Me</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hi, I'm a software engineer and coding instructor passionate about simplifying complex
            technologies. I love creating systems that improve efficiency and teaching practical
            coding skills in Python, JavaScript, and Data Science.
          </p>
        </motion.div>
        <div className="mt-16">
          <Experience />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
