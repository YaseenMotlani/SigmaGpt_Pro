🚀 <strong><u>SigmaGPT Pro</u></strong>

SigmaGPT Pro is a full-stack AI chat application inspired by ChatGPT.
It allows users to communicate with an advanced Large Language Model (LLM) using a clean, modern interface.

### ✨<strong><u>The application supports</u></strong><br/>
-Secure authentication<br/>
-Persistent chat history<br/>
-Multiple conversation threads<br/>
-AI-powered responses<br/>
-Modern UI with dark/light mode<br/>

<strong><u>This project is specially designed for:</u></strong><br/>
-🔥 Placement preparation<br/>
-💼 Portfolio showcase<br/>
-🧠 Real-world MERN stack learning<br/>
-🤖 AI integration practice<br/>

✨ <strong><u>Key Features:</u></strong><br/>
-🤖 AI chat powered by Groq LLaMA 3.3 (70B)<br/>
-🔐 Secure JWT Authentication (Signup / Login)<br/>
-🧵 Multiple chat threads (create, switch, delete)<br/>
-💾 Persistent chat history using MongoDB<br/>
-🌙 Dark / Light mode toggle<br/>
-📱 Responsive sidebar (mobile friendly)<br/>
-🧠 Context-based state management (React Context API)<br/>
-⚡ Fast REST APIs with Express.js<br/>

🛠 <strong><u>Tech Stack</u></strong><br/>

<b><u>Frontend:</u></b><br/>
-React (Vite)<br/>
-JavaScript (ES6+)<br/>
-CSS<br/>
-Context API<br/>
-Font Awesome Icons<br/>

<strong><u>Backend:</u></strong><br/>
-Node.js<br/>
-Express.js<br/>
-MongoDB<br/>
-Mongoose<br/>
-JWT Authentication<br/>
-bcryptjs<br/>

<strong><u>AI Integration:</u></strong><br/>
-Groq API<br/>
-Model: llama-3.3-70b-versatile<br/>

🔐 <strong><u>Authentication Flow:</u></strong><br/>
-User registers or logs in<br/>
-JWT token is generated on backend<br/>
-Token is stored in localStorage<br/>
-Protected APIs are accessed using Authorization: Bearer <token><br/>

## 📸 <strong><u>Usage Screenshots</u></strong>

<p align="center">

<table>
  <tr>
    <td align="center">
      <img src="./screenshots/1-login.png" width="350"/><br/>
      <b>Login Page</b>
    </td>
    <td align="center">
      <img src="./screenshots/2-signup.png" width="350"/><br/>
      <b>Signup Page</b>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="./screenshots/3-window.png" width="350"/><br/>
      <b>Chat Threads</b>
    </td>
    <td align="center">
      <img src="./screenshots/4-windowchat.png" width="350"/><br/>
      <b>Dark Mode</b>
    </td>
  </tr>

  <tr>
    <td align="center" colspan="2">
      <img src="./screenshots/5-logout.png" width="500"/><br/>
      <b>AI Response Generation</b>
    </td>
  </tr>
</table>

</p>

🧠 <strong><u>How AI Chat Works:</u></strong><br/>
-User sends a message<br/>
-Message is stored in MongoDB<br/>
-Message is sent to Groq AI<br/>
-AI reply is received<br/>
-Assistant reply is stored & returned to frontend<br/>

⚙️ <strong><u>Environment Variables:</u></strong><br/>
Create a .env file inside Backend:<br/>
-GROQ_API_KEY=your_groq_api_key<br/>
-MONGODB_URL=your_mongodb_connection_string<br/>
-JWT_SECRET=your_jwt_secret<br/>

🚀 <strong><u>Installation & Setup:</u></strong><br/>
-Node.js installed<br/>
-MongoDB running (Atlas or local)<br/>
-npm or yarn<br/>

<strong><u>1)Clone Repository:</u></strong><br/>
-git clone https://github.com/YaseenMotlani/SigmaGpt_Pro.git<br/>
-cd SigmaGpt_Pro<br/>

<strong><u>2)Backend Setup:</u></strong><br/>
-cd Backend<br/>
-npm install<br/>
-npm start<br/>
Backend will run on:<br/>
-http://localhost:8080<br/>

<strong><u>3)Frontend Setup</u></strong><br/>
-cd Frontend<br/>
-npm install<br/>
-npm run dev<br/>
Frontend runs on:<br/>
http://localhost:5173<br/>

🔮 <strong><u>Future Enhancements:</u></strong><br/>
-📂 Chat export (PDF / TXT)<br/>
-🧑 User profile management<br/>
-🧠 Conversation summarization<br/>

📄<strong> <u>License </u></strong><br/>
-Licensed under the MIT License.<br/>

👤 <strong><u>Author</u></strong><br/>
-<strong><u>Yaseen Motlani</u></strong><br/>
--<strong>GitHub:</strong> https://github.com/YaseenMotlani<br/>
--<strong>Live Demo:</strong> https://sigmagpt-frontend-6tzj.onrender.com<br/>


-


