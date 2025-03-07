import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import NavBar from '@/components/custom/navbar';
import TechBox from '@/components/custom/tech-box';
import { Button } from '@/components/ui/button';
import company from '@/constants/company';
import self from '@/constants/self';
import skills from '@/constants/skills';

const HomePage = () => {
  return (
    <div className="mx-8">
      <NavBar />
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl permanent-marker-regular">
          {self.NAME}
        </h1>
        <p className="kalam-regular text-xl mt-3">
          {company.JOBTITLE}{' '}
          <a href="https://www.linkedin.com/company/bushel-technologies-private-limited/">
            @{company.SHORT_NAME}
          </a>
        </p>
        <Button asChild size="lg" variant="ghost">
          <a target="_blank" href={self.RESUME}>
            <Download />
            Resume
          </a>
        </Button>
      </div>
      <div>
        <div className="min-h-screen text-white px-6 sm:px-12 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="scroll-m-20 border-b pb-6 text-3xl font-semibold tracking-tight mb-12 text-center">
              Technologies & Tools
            </h3>
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
              {skills.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <TechBox icon={tech.icon} name={tech.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
