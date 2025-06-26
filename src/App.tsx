import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/root/index.css';
import './styles/App.css';

import { Profile } from './pages/Profile';
import { Homepage } from './pages/Homepage';

import { ThemeProvider } from '../theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
