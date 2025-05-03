import React from 'react';
import './Login.css'; // mantenha se houver estilos personalizados

console.log("Login renderizado");

function Login() {
  return (
    <div className="login-container">
      <h1>Bem-vindo ao Koru Bank</h1>
      <p>Digite seu CPF para continuar:</p>
      <input type="text" placeholder="000.000.000-00" />
      <button>Entrar</button>
    </div>
  );
}

export default Login;
