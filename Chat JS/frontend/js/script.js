// Seleciona elementos do DOM
const login = document.querySelector(".login");
const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__input");
const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat__form");
const chatInput = document.querySelector(".chat__input");
const chatMessage = chat.querySelector(".chat__messages");

// Array de cores disponíveis
const colors = ["cadetblue", "darkgoldenrod", "cornflowerblue", "darkkhaki", "hotpink", "gold"];

// Objeto que representa o usuário
const user = { id: "", name: "", color: "" };

// Função para criar elementos de mensagem do próprio usuário
const createMessageSelfElement = (content) => {
    const div = document.createElement("div");
    div.classList.add("message--self");
    div.innerHTML = content;
    return div;
};

// Função para criar elementos de mensagem de outro usuário
const createMessageOtherElement = (content, sender, senderColor) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    div.classList.add("message--other");
    span.classList.add("message--sender");
    span.style.color = senderColor;
    div.appendChild(span);
    span.innerHTML = sender;
    div.innerHTML += content;
    return div;
};

// Função para obter uma cor aleatória
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

let websocket;

// Função para rolar a tela até a mensagem mais recente
const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

// Processa mensagens recebidas via WebSocket
const processMessage = ({ data }) => {
    const { userId, userName, userColor, content } = JSON.parse(data);
    const messageElement = userId === user.id 
        ? createMessageSelfElement(content)
        : createMessageOtherElement(content, userName, userColor);
    chatMessage.appendChild(messageElement);

    scrollScreen();  // Corrigido: chamada da função com parênteses
};

// Lida com o login do usuário
const handleLogin = (event) => {
    event.preventDefault();
    user.name = loginInput.value;
    user.id = crypto.randomUUID();
    user.color = getRandomColor();
    login.style.display = "none";
    chat.style.display = "flex";

    websocket = new WebSocket("ws://localhost:8080");
    websocket.onopen = () => websocket.send(`Usuário: ${user.name} entrou no chat!`);
    websocket.onmessage = processMessage;
};

// Envia mensagens via WebSocket
const sendMessage = (event) => {
    event.preventDefault();
    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    };
    websocket.send(JSON.stringify(message));
    chatInput.value = "";
};

// Adiciona ouvintes de eventos
loginForm.addEventListener("submit", handleLogin);
chatForm.addEventListener("submit", sendMessage);
