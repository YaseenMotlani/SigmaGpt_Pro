🚀 SigmaGPT Pro

SigmaGPT Pro is a full-stack AI chat application inspired by ChatGPT.
It allows users to communicate with an advanced Large Language Model (LLM) using a clean, modern interface.

The application supports
-Secure authentication
-Persistent chat history
-Multiple conversation threads
-AI-powered responses
-Modern UI with dark/light mode

This project is specially designed for:
-🔥 Placement preparation
-💼 Portfolio showcase
-🧠 Real-world MERN stack learning
-🤖 AI integration practice

✨ Key Features:
-🤖 AI chat powered by Groq LLaMA 3.3 (70B)
-🔐 Secure JWT Authentication (Signup / Login)
-🧵 Multiple chat threads (create, switch, delete)
-💾 Persistent chat history using MongoDB
-🌙 Dark / Light mode toggle
-📱 Responsive sidebar (mobile friendly)
-🧠 Context-based state management (React Context API)
-⚡ Fast REST APIs with Express.js

🛠 Tech Stack

Frontend:
-React (Vite)
-JavaScript (ES6+)
-CSS
-Context API
-Font Awesome Icons

Backend:
-Node.js
-Express.js
-MongoDB
-Mongoose
-JWT Authentication
-bcryptjs

AI Integration:
-Groq API
-Model: llama-3.3-70b-versatile

📂 Project Structure:

SigmaGpt_Pro
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── context
│   │   │   └── MyContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── Backend
│   ├── models
│   │   ├── User.js
│   │   └── Threads.js
│   ├── routes
│   │   ├── auth.js
│   │   └── test.js
│   ├── middleware
│   │   └── auth.js
│   ├── utils
│   │   └── openai.js
│   └── server.js
│
├── .env
├── README.md
└── LICENSE

🔐 Authentication Flow:
-User registers or logs in
-JWT token is generated on backend
-Token is stored in localStorage
-Protected APIs are accessed using Authorization: Bearer <token>

⚙️ Environment Variables:
Create a .env file inside Backend:
-GROQ_API_KEY=your_groq_api_key
-MONGODB_URL=your_mongodb_connection_string
-JWT_SECRET=your_jwt_secret

🚀 Installation & Setup:
-Node.js installed
-MongoDB running (Atlas or local)
-npm or yarn

1)1️Clone Repository:
-git clone https://github.com/YaseenMotlani/SigmaGpt_Pro.git
-cd SigmaGpt_Pro

2) Backend Setup:
-cd Backend
-npm install
-npm start
Backend will run on:
-http://localhost:8080

3)Frontend Setup
-cd Frontend
-npm install
-npm run dev
Frontend runs on:
http://localhost:5173

🧠 How AI Chat Works:
-User sends a message
-Message is stored in MongoDB
-Message is sent to Groq AI
-AI reply is received
-Assistant reply is stored & returned to frontend

🔮 Future Enhancements:
-🔄 Real-time streaming responses
-🌐 Deployment (Vercel + Render)
-📂 Chat export (PDF / TXT)
-🧑 User profile management
-🧠 Conversation summarization

📄 License
-Licensed under the MIT License.

👤 Author
-Yaseen Motlani
--GitHub: https://github.com/YaseenMotlani
--Live Demo: https://sigmagpt-frontend-6tzj.onrender.com


-


