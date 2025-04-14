```markdown
# 🗨️ Fala aê! – Chat em tempo real com WebSocket

Este é um projeto de **chat em tempo real** desenvolvido com foco em simplicidade, aprendizado e comunicação via **WebSockets**, utilizando:

- ✅ Backend com Node.js e WebSocket (`ws`)
- ✅ Frontend com HTML, CSS e JavaScript puro
- ✅ Sem dependência de banco de dados ou frameworks front
- ✅ Interface leve e intuitiva
- ✅ Deploy local via `nodemon`

---

## 🎥 Demonstração

[![Assista ao vídeo demonstrativo](https://img.youtube.com/vi/2ORtAf0B1hk/hqdefault.jpg)](https://youtu.be/2ORtAf0B1hk?si=UTDp4dhQwieufOQ5)

> 🔗 Clique aqui para assistir: [https://youtu.be/2ORtAf0B1hk](https://youtu.be/2ORtAf0B1hk?si=UTDp4dhQwieufOQ5)

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- WebSocket (`ws`)
- dotenv
- HTML5 / CSS3
- JavaScript Vanilla

---

## 🚀 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/fala-ae.git
   cd fala-ae
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte variável:
   ```
   PORT=8080
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Abra o arquivo `index.html` no navegador (duplo clique ou use uma extensão de servidor local como o Live Server).

---

## 🧠 Como funciona?

### 🧩 Backend (`server.js`)

- Cria um servidor WebSocket na porta definida no `.env`
- Recebe mensagens dos clientes e **retransmite para todos os conectados**
- Usa `ws` para comunicação em tempo real
- Nenhum dado é persistido

### 🎨 Frontend (`index.html` + `script.js`)

- Tela de **login simples** com nome do usuário
- Conexão com o WebSocket assim que o usuário entra
- As mensagens são enviadas e recebidas em **formato JSON**
- Cada usuário tem um `id`, `nome` e uma `cor` aleatória
- A interface diferencia **suas mensagens** das dos **outros usuários**
- As mensagens novas forçam a rolagem automática para o final da tela

---

## 📂 Estrutura de Pastas

```
.
├── .env
├── package.json
├── src/
│   └── server.js
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
```

---

## 🧪 Possíveis melhorias

- [ ] Histórico com `localStorage`
- [ ] Horário nas mensagens
- [ ] Salas de bate-papo
- [ ] Autenticação simples
- [ ] Tema escuro/claro
- [ ] Suporte a emojis ou imagens

---

## 📘 Licença

Este projeto está sob a licença ISC. Sinta-se livre para estudar, modificar e compartilhar.

---

## ✍️ Autor

Feito com 💙 para fins didáticos.

> Projeto baseado em estudos de WebSocket com Node.js e Vanilla JS.
```

