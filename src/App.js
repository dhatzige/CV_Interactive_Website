import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import YourThoughtsPage from './components/YourThoughtsPage';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/your-thoughts" element={<YourThoughtsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 