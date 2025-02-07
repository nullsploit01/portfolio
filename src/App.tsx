import './App.css';
import RoutesConfig from './lib/routes';
import { BrowserRouter } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
};

export default App;
