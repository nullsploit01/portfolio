import { motion } from 'framer-motion';
import { useState } from 'react';

type ExperienceType = {
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

const ExperienceCard: React.FC<{ exp: ExperienceType; index: number }> = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(false);

  const responsibilitiesToShow = expanded ? exp.responsibilities : exp.responsibilities.slice(0, 2);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateX: 2,
        rotateY: 2,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
      }}
      onClick={() => setExpanded(!expanded)}
      className="cursor-pointer bg-gradient-to-r from-[#1a1a1a] to-[#222222] border-l-4 border-cyan-500 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-2xl font-bold text-gray-100 mb-1">{exp.role}</h3>

      <div className="flex justify-between items-center">
        <p className="text-gray-400">
          {exp.company} · {exp.location}
        </p>
        <p className="text-sm text-gray-500">{exp.duration}</p>
      </div>

      <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
        {responsibilitiesToShow.map((task, i) => (
          <li key={i} className="leading-relaxed">
            {task}
          </li>
        ))}
        {!expanded && exp.responsibilities.length > 2 && (
          <li className="text-gray-500 italic">...Read more</li>
        )}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
