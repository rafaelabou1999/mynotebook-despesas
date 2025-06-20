
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/root/index.css';
import './styles/App.css'

import { Profile } from './pages/Profile';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
