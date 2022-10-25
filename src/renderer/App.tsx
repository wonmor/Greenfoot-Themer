import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Hello from './pages/Hello';
import Select from './pages/Select';
import Preview from './pages/Preview';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/select" element={<Select />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
}
