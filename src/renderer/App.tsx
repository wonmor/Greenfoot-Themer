import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Hello from './pages/Hello';
import Select from './pages/Select';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </Router>
    </>
  );
}

// TO DO: CONTINUE ADDING THE TAILWIND CSS CONFIGS...
// LINK: https://thoughtbot.com/blog/adding-tailwind-to-electron
