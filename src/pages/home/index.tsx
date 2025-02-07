import './App.css';
import { Download } from 'lucide-react';

import AnimatedContent from '@/components/animated/animated-content';
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
        <div className="min-h-screen text-white px-4 sm:px-6">
          <div className="max-w-5xl mx-auto py-12">
            <h3 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight mb-10">
              My Skills
            </h3>

            {/* Backend Skills */}
            <AnimatedContent
              distance={150}
              direction="horizontal"
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <section className="flex flex-col md:flex-row items-start gap-x-6 sm:gap-x-10">
                <h4 className="text-2xl font-semibold w-full md:w-1/4 mb-4 md:mb-0">
                  Backend Skills
                </h4>
                <div className="w-full md:w-3/4 flex justify-center md:justify-start">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                    {skills.BACKEND.map((tech) => (
                      <TechBox key={tech.name} icon={tech.icon} name={tech.name} />
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedContent>

            <AnimatedContent
              distance={150}
              direction="horizontal"
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              {/* Frontend Skills */}
              <section className="flex flex-col md:flex-row items-start gap-x-6 sm:gap-x-10 mt-12">
                <h4 className="text-2xl font-semibold w-full md:w-1/4 mb-4 md:mb-0">
                  Frontend Skills
                </h4>
                <div className="w-full md:w-3/4 flex justify-center md:justify-start">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                    {skills.FRONTEND.map((skill) => (
                      <TechBox key={skill.name} icon={skill.icon} name={skill.name} />
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedContent>

            <AnimatedContent
              distance={150}
              direction="horizontal"
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              {/* DevOps Skills */}
              <section className="flex flex-col md:flex-row items-start gap-x-6 sm:gap-x-10 mt-12">
                <h4 className="text-2xl font-semibold w-full md:w-1/4 mb-4 md:mb-0">
                  DevOps Skills
                </h4>
                <div className="w-full md:w-3/4 flex justify-center md:justify-start">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                    {skills.DEVOPS.map((skill) => (
                      <TechBox key={skill.name} icon={skill.icon} name={skill.name} />
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
