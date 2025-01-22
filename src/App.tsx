import './App.css';
import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import company from '@/constants/company';
import self from '@/constants/self';

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
