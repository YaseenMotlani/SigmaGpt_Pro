🚀 SigmaGPT Pro

SigmaGPT Pro is a full-stack AI chat application inspired by ChatGPT.
It allows users to communicate with an advanced Large Language Model (LLM) using a clean, modern interface.

### ✨The application supports<br/>
-Secure authentication<br/>
-Persistent chat history<br/>
-Multiple conversation threads<br/>
-AI-powered responses<br/>
-Modern UI with dark/light mode<br/>

This project is specially designed for:<br/>
-🔥 Placement preparation<br/>
-💼 Portfolio showcase<br/>
-🧠 Real-world MERN stack learning<br/>
-🤖 AI integration practice<br/>

✨ Key Features:<br/>
-🤖 AI chat powered by Groq LLaMA 3.3 (70B)<br/>
-🔐 Secure JWT Authentication (Signup / Login)<br/>
-🧵 Multiple chat threads (create, switch, delete)<br/>
-💾 Persistent chat history using MongoDB<br/>
-🌙 Dark / Light mode toggle<br/>
-📱 Responsive sidebar (mobile friendly)<br/>
-🧠 Context-based state management (React Context API)<br/>
-⚡ Fast REST APIs with Express.js<br/>

🛠 Tech Stack<br/>

Frontend:<br/>
-React (Vite)<br/>
-JavaScript (ES6+)<br/>
-CSS<br/>
-Context API<br/>
-Font Awesome Icons<br/>

Backend:<br/>
-Node.js<br/>
-Express.js<br/>
-MongoDB<br/>
-Mongoose<br/>
-JWT Authentication<br/>
-bcryptjs<br/>

AI Integration:<br/>
-Groq API<br/>
-Model: llama-3.3-70b-versatile<br/>

📂 Project Structure:<br/>

SigmaGpt_Pro<br/>
│
├── Frontend<br/>
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
├── Backend<br/>
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

🔐 Authentication Flow:<br/>
-User registers or logs in<br/>
-JWT token is generated on backend<br/>
-Token is stored in localStorage<br/>
-Protected APIs are accessed using Authorization: Bearer <token><br/>

⚙️ Environment Variables:<br/>
Create a .env file inside Backend:<br/>
-GROQ_API_KEY=your_groq_api_key<br/>
-MONGODB_URL=your_mongodb_connection_string<br/>
-JWT_SECRET=your_jwt_secret<br/>

🚀 Installation & Setup:<br/>
-Node.js installed<br/>
-MongoDB running (Atlas or local)<br/>
-npm or yarn<br/>

1)Clone Repository:<br/>
-git clone https://github.com/YaseenMotlani/SigmaGpt_Pro.git<br/>
-cd SigmaGpt_Pro<br/>

2) Backend Setup:<br/>
-cd Backend<br/>
-npm install<br/>
-npm start<br/>
Backend will run on:<br/>
-http://localhost:8080<br/>

3)Frontend Setup<br/>
-cd Frontend<br/>
-npm install<br/>
-npm run dev<br/>
Frontend runs on:<br/>
http://localhost:5173<br/>

🧠 How AI Chat Works:<br/>
-User sends a message<br/>
-Message is stored in MongoDB<br/>
-Message is sent to Groq AI<br/>
-AI reply is received<br/>
-Assistant reply is stored & returned to frontend<br/>

🔮 Future Enhancements:<br/>
-🔄 Real-time streaming responses<br/>
-🌐 Deployment (Vercel + Render)<br/>
-📂 Chat export (PDF / TXT)<br/>
-🧑 User profile management<br/>
-🧠 Conversation summarization<br/>

📄 License<br/>
-Licensed under the MIT License.<br/>

👤 Author<br/>
-Yaseen Motlani<br/>
--GitHub: https://github.com/YaseenMotlani<br/>
--Live Demo: https://sigmagpt-frontend-6tzj.onrender.com<br/>


-


