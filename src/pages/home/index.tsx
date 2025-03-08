import SkillsSection from './skills';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import NavBar from '@/components/custom/navbar';
import { Button } from '@/components/ui/button';
import company from '@/constants/company';
import self from '@/constants/self';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex justify-center items-center flex-col text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl permanent-marker-regular text-gray-100">
            {self.NAME}
          </h1>
          <p className="kalam-regular text-xl mt-3 text-gray-400">
            {company.JOBTITLE}{' '}
            <a
              href={company.LINKEDIN}
              className="text-cyan-400 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              @{company.SHORT_NAME}
            </a>
          </p>
          <div className="mt-4">
            <Button asChild size="lg" variant="ghost">
              <a target="_blank" href={self.RESUME}>
                <Download className="mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default HomePage;
