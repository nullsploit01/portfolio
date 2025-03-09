import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import self from '@/constants/self';

const socials = [
  { icon: FaGithub, link: self.GITHUB },
  { icon: FaLinkedin, link: self.LINKEDIN },
  { icon: FaTwitter, link: self.X },
  { icon: FaEnvelope, link: `mailto:${self.EMAIL}` },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <footer ref={ref} className="text-gray-400 py-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full flex flex-col items-center"
      >
        <div className="flex gap-6 mb-4 items-center justify-center">
          {socials.map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <Icon size={28} className="inline-block" />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-sm text-center w-full"
        >
          © {new Date().getFullYear()} Harshal D. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
