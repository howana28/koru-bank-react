import React from 'react';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
