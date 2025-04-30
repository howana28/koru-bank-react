// SLIDER DE IMAGENS
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.slider-image');
  let current = 0;

  images.forEach((img, index) => {
    img.style.opacity = index === 0 ? '1' : '0';
    img.style.transition = 'opacity 1s ease-in-out';
    img.style.position = 'absolute';
    img.style.top = '265.9px';
    img.style.left = '0';
    img.style.zIndex = '1';
  });

  setInterval(() => {
    images[current].style.opacity = '0';
    current = (current + 1) % images.length;
    images[current].style.opacity = '1';
  }, 5000);
});

// CHATBOT COM AVATAR
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById('chat-box');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');

  let userName = null;

  // Mensagem de boas-vindas do bot
  setTimeout(() => {
    addBotMessage("Olá! Que bom ter você aqui com a gente 😊<br>Como posso te chamar?");
  }, 500);

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = userInput.value.trim();
    if (message === '') return;

    addUserMessage(message);
    userInput.value = '';

    setTimeout(() => {
      if (!userName) {
        userName = message;
        addBotMessage(`Prazer, ${userName}! Como podemos te ajudar?<br><br>1. Já sou cliente<br>2. Quero virar cliente<br>3. Sair do chat`);
      } else {
        if (message === "3" || message.toLowerCase().includes("sair")) {
          addBotMessage("Você saiu do atendimento. Até logo 👋");
          setTimeout(() => {
            window.location.href = window.location.origin + "/login.html";
          }, 1500);
          return;
        }
    
        if (message.includes("1") || message.toLowerCase().includes("cliente")) {
          addBotMessage("Ótimo! Me diga como posso te ajudar:<br>- Consultar saldo<br>- Fazer uma transferência<br>- Falar com atendente");
        } else if (message.includes("2") || message.toLowerCase().includes("virar")) {
          addBotMessage("Legal! Vamos começar com algumas informações básicas. Me diga seu nome completo, e-mail e telefone.");
        } else {
          addBotMessage("Entendi! Me conte mais para que eu possa te ajudar.");
        }
      }
    }, 800);
    
  });

  function addUserMessage(text) {
    const message = document.createElement('div');
    message.classList.add('chat-message', 'user');
    message.innerHTML = `<div class="message-bubble">${text}</div>`;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function addBotMessage(text) {
    const message = document.createElement('div');
    message.classList.add('chat-message', 'bot');
    message.innerHTML = `
      <img src="/static/koruavatar.png" alt="Avatar do Koru" class="avatar" />
      <div class="message-bubble">${text}</div>
    `;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
