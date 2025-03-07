import SkillsSection from './skills';
import { Download } from 'lucide-react';

import NavBar from '@/components/custom/navbar';
import { Button } from '@/components/ui/button';
import company from '@/constants/company';
import self from '@/constants/self';

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
        <SkillsSection />
      </div>
    </div>
  );
};

export default HomePage;
