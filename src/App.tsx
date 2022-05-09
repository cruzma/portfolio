import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Navbar } from './componentts/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </div>
  );
}

export default App;
