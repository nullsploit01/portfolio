import { Route, Routes } from 'react-router';

import App from '@/App';
import BlogsHomePage from '@/pages/blogs';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="blogs" element={<BlogsHomePage />} />
    </Routes>
  );
};

export default RoutesConfig;
