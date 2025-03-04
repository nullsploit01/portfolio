import { Route, Routes } from 'react-router';

import HomePage from '@/pages/home';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* <Route path="blogs" element={<BlogsHomePage />} /> */}
    </Routes>
  );
};

export default RoutesConfig;
