import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, link: 'https://github.com/YOUR_GITHUB' },
  { icon: FaLinkedin, link: 'https://linkedin.com/in/YOUR_LINKEDIN' },
  { icon: FaTwitter, link: 'https://twitter.com/YOUR_TWITTER' },
];

const Footer = () => {
  return (
    <footer className="text-gray-400 pb-6 flex flex-col items-center justify-center">
      <div className="flex gap-6 mb-4">
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
            <Icon size={28} />
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-sm"
      >
        © {new Date().getFullYear()} Harshal D. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
