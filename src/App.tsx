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
          <div className="min-h-screen">
            <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-14">
              My Skills
            </h3>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.BACKEND.map((tech) => (
                  <TechBox key={tech} icon={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default App;
