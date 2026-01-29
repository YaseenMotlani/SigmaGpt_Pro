import './App.css'
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./Mycontext.jsx";
import { useEffect, useState } from 'react';
import {v1 as uuidv1} from "uuid"
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";



function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1)
  const [prevChats, setPrevChats] = useState([]);  //store all prev chats of curr thread
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState ([]);
  const [showSignup, setShowSignup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);


  // THEME STATE
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // AUTH
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) setUser({ token });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  
  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads,
    theme, setTheme,
    user, login, logout,
    showSidebar, setShowSidebar
  }; //passing values

  return (
    <div className='app'>
      {/* <MyContext.Provider value={providerValues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider> */}
     
      <MyContext.Provider value={providerValues}>
          {user ? (
            <>
              <Sidebar />
              <ChatWindow />
              {showSidebar && (
                <div 
                  className="overlay" 
                  onClick={() => setShowSidebar(false)} />
              )}
            </>
          ) : (
            <div className="authWrapper">
              {showSignup ? (
                <Signup onSwitch={() => setShowSignup(false)} />
              ) : (
                <Login onSwitch={() => setShowSignup(true)} />
              )}
            </div>
          )}


        </MyContext.Provider>
      </div>
  )
}

export default App
