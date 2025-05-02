import React from 'react';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // mantém só uma vez
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
