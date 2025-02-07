import './index.css';
import RoutesConfig from './lib/routes.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </StrictMode>,
);
