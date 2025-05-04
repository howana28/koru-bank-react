// src/components/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import imagem2 from '../assets/imagem2.png';

export default function Login() {
  return (
    <>
      <header>
        <div>KORU BANK</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Trending</a>
          <a href="#">About Us</a>
        </nav>
      </header>

      <div className="container">
        <div className="text-content">
          <h1>KORU BANK</h1>
          <h2>POR QUE VOCÊ É</h2>
          <h3>ÚNICO</h3>
          <p>Ser diferente é o nosso maior investimento</p>
        </div>

        <div className="cpf-box">
          <input type="text" placeholder="Digite seu CPF" />
          <Link to="/chat">
            <button>→</button>
          </Link>
        </div>

        <div className="right">
          <img src={imagem2} alt="Visual" />
          <div className="rotated-title">KORU</div>
        </div>
      </div>
    </>
  );
}
