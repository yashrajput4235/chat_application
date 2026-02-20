# 💬 Real-Time Chat Application

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A full-stack, real-time chat application built with React, Vite, Express, and Socket.io. This application allows users to join specific chat rooms and instantly exchange messages with other users in the same room.

## ✨ Features

- **Real-Time Messaging**: Lightning-fast message delivery using WebSockets (Socket.io).
- **Room-Based Chat**: Join specific rooms to chat exclusively with people in that room.
- **Smart UI/UX**:
  - Distinguishes between your messages and others' messages visually.
  - Automatically scrolls to the newest message upon receiving one.
  - Displays the timestamp and author natively within the chat bubbles.
  - Enter key support for quick message sending.
- **Modern Build Tools**: Powered by Vite for an incredibly fast development server and optimized build.

## 🛠️ Tech Stack

**Frontend:**
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Socket.io-client](https://socket.io/)
- Vanilla CSS for styling

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/yashrajput4235/chat_application.git
   cd chat_app
   ```

2. **Setup the Backend (Server)**
   ```bash
   cd Server
   npm install
   # Start the Express server on port 1000
   node server.js
   ```

3. **Setup the Frontend (Client)**
   Open a new terminal window:
   ```bash
   cd Client
   npm install
   # Start the Vite development server on port 5173
   npm run dev
   ```

## 🎮 Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. In the "Join Chat" form, enter your **Name** and a **Room ID**.
3. Open another browser tab (or send the URL to a friend) and join the **same Room ID**.
4. Start texting instantly!

## 📂 Folder Structure

```text
chat_app/
├── Client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── App.jsx         # Main App component (Join Room form)
│   │   ├── Chat.jsx        # Chat interface component
│   │   ├── index.css       # Global styling
│   │   └── main.jsx        # React entry point
│   └── package.json        
└── Server/                 # Node.js + Express Backend
    ├── server.js           # Main server file & Socket setup
    └── package.json        
```

## 🔮 Future Improvements

- Add user authentication (JWT/OAuth).
- Persistent message storage using a database (e.g., MongoDB, PostgreSQL).
- Add support for typing indicators ("User is typing...").
- Ability to send images and files.
- Online/offline status indicators.

## 📄 License

This project is licensed under the ISC License.
