import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import TechBox from '@/components/custom/tech-box';
import skills from '@/constants/skills';

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Triggers when 20% is visible

  return (
    <div ref={ref} className="min-h-screen text-white px-6 sm:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="scroll-m-20 border-b border-gray-600/50 pb-4 text-3xl font-semibold tracking-wide mb-10 text-center text-gray-200 font-nunito">
          What I Work With
        </h3>

        {isInView && (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {skills.map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <TechBox icon={tech.icon} name={tech.name} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
