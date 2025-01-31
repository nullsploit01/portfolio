import './App.css';
import TechBox from './components/custom/tech-box';
import skills from './constants/skills';
import { Download } from 'lucide-react';

import AnimatedContent from '@/components/animated/animated-content';
import { Button } from '@/components/ui/button';
import company from '@/constants/company';
import self from '@/constants/self';

const App = () => {
  return (
    <div className="mx-8">
      <div className="flex min-h-screen justify-center items-center flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
          {self.NAME}
        </h1>
        <p>
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
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="min-h-screen text-white px-6">
            <div className="max-w-5xl mx-auto py-12">
              <h3 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight mb-10">
                My Skills
              </h3>

              {/* Backend Skills */}
              <section className="flex flex-col md:flex-row items-start">
                <h4 className="text-2xl font-semibold w-full md:w-1/4">Backend Skills</h4>
                <div className="w-full md:w-2/3 flex justify-center md:justify-start">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                    {skills.BACKEND.map((tech) => (
                      <TechBox key={tech.name} icon={tech.icon} name={tech.name} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Frontend Skills */}
              <section className="flex flex-col md:flex-row items-start mt-12">
                <h4 className="text-2xl font-semibold w-full md:w-1/4">Frontend Skills</h4>
                <div className="w-full md:w-2/3 flex justify-center md:justify-start">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                    {skills.FRONTEND.map((skill) => (
                      <TechBox key={skill.name} icon={skill.icon} name={skill.name} />
                    ))}
                  </div>
                </div>
              </section>

              {/* DevOps Skills */}
              <section className="flex flex-col md:flex-row items-start mt-12">
                <h4 className="text-2xl font-semibold w-full md:w-1/4">DevOps Skills</h4>
                <div className="w-full md:w-2/3 flex justify-center md:justify-start">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                    {skills.DEVOPS.map((skill) => (
                      <TechBox key={skill.name} icon={skill.icon} name={skill.name} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default App;
