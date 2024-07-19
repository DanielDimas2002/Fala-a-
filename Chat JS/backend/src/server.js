// Importa a classe WebSocketServer do módulo 'ws'
const { WebSocketServer } = require("ws");

// Importa o módulo 'dotenv' para carregar variáveis de ambiente do arquivo .env
const dotenv = require("dotenv");

// Carrega as variáveis de ambiente do arquivo .env para `process.env`
dotenv.config();

// Cria uma nova instância do WebSocketServer
// O servidor WebSocket será iniciado na porta especificada na variável de ambiente PORT ou, se não estiver definida, na porta 8080
const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

// Adiciona um evento para lidar com novas conexões de clientes
wss.on("connection", (ws) => {
    // Adiciona um evento para lidar com erros em uma conexão WebSocket
    ws.on("error", console.error);

    ws.send("Mensagem enviada pelo server!")

    // Adiciona um evento para lidar com mensagens recebidas dos clientes
    ws.on("message", (data) => {
        // Itera sobre todos os clientes conectados e envia a mensagem recebida para cada um deles
        // Converte a mensagem para string antes de enviar
        wss.clients.forEach((client) => client.send(data.toString()));
        console.log(data.toString())
    });

    // Loga uma mensagem quando um cliente se conecta
    console.log("Cliente conectado!");
});
