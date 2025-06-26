import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/root/index.css';
import './styles/App.css';

import { Despesas } from './pages/Despesas';
import { Homepage } from './pages/Homepage';

import { ThemeProvider } from '../theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Despesas />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
