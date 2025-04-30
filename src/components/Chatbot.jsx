// src/components/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';
import avatar from '../assets/koruavatar.png';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const boxRef = useRef();

  // flag para garantir que a saudação role só uma vez
  const didGreet = useRef(false);

  // auto-scroll
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);

  // saudação inicial — só será adicionada na primeira montagem
  useEffect(() => {
    if (!didGreet.current) {
      addBot("Olá! Que bom ter você aqui 😊\nComo posso te chamar?");
      didGreet.current = true;
    }
  }, []);

  function addBot(text) {
    setMessages(m => [...m, { sender: 'bot', text }]);
  }
  function addUser(text) {
    setMessages(m => [...m, { sender: 'user', text }]);
  }

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const msg = input.trim();
    addUser(msg);
    setInput('');

    setTimeout(() => {
      if (step === 0) {
        setUserName(msg);
        addBot(`Prazer, ${msg}! Como podemos te ajudar?\n1. Já sou cliente\n2. Quero virar cliente\n3. Sair do chat`);
        setStep(1);
      } else {
        const lower = msg.toLowerCase();
        if (msg === '3' || lower.includes('sair')) {
          addBot('Você saiu do atendimento. Até logo 👋');
          setTimeout(() => navigate('/'), 1200);
          return;
        }
        if (msg === '1' || lower.includes('já sou') || lower.includes('cliente')) {
          addBot('Ótimo! Diga o que deseja:\n- Consultar saldo\n- Transferir\n- Falar com atendente');
        } else if (msg === '2' || lower.includes('virar') || lower.includes('quero')) {
          addBot('Legal! Por favor, informe seu nome completo, e-mail e telefone.');
        } else {
          addBot('Desculpe, não entendi. Pode repetir?');
        }
      }
    }, 800);
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={avatar} alt="Koru" className="avatar" />
        <h2>KORU</h2>
        <button onClick={() => navigate('/')} className="exit-btn">✕</button>
      </div>

      <div className="chat-box" ref={boxRef}>
        {messages.map((m, i) => (
          <div key={i} className={`chat-message ${m.sender}`}>
            {m.sender === 'bot' && <img src={avatar} alt="" className="avatar" />}
            <div className="message-bubble">{m.text}</div>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          autoFocus
        />
        <button type="submit">➤</button>
      </form>
    </div>
  );
}
