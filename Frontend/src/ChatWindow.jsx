import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./Mycontext.jsx";
import { useContext, useState, useEffect } from "react";
import {RingLoader} from "react-spinners";

function ChatWindow() {
    const {prompt, setPrompt, reply, setReply, currThreadId, prevChats, setPrevChats, setNewChat, user, setShowSidebar } = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] =useState(false);


    const getReply = async () => {
        if (!user) return alert("Please login first");

        setLoading(true);
        setNewChat(false);

        const options = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                Authorization: `Bearer ${user.token}`   // ✅ TOKEN
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try{
            const response = await fetch("http://localhost:8080/api/chat", options);

            if (response.status === 401) {
                alert("Session expired. Please login again.");
                return;
            }

            const res = await response.json();
            console.log(res);
            setReply(res.reply)
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    // Append new chat to prevChats
    useEffect(() => {
        if (prompt && reply) {
            setPrevChats(prevChats => [
            ...prevChats,
            {
                role: "user",
                content: prompt
            },
            {
                role: "assistant",
                content: reply
            }
        ]);
    }

  setPrompt("");
}, [reply]);


const handleProfileClick = () => {
    setIsOpen(!isOpen);
}

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

    return (
        <div className="chatWindow">
            <div className="navbar">
                <span className="menuIcon" onClick={() => setShowSidebar(true)}>
                    <i className="fa-solid fa-bars"></i>
                </span>

                <span>SigmaGPT</span>

                <div className="userIconDiv" onClick={handleProfileClick}>
                    <span className="userIcon">
                    <i className="fa-solid fa-user"></i>
                    </span>
                </div>
            </div>


            {/* Drop Down */}
            {
                isOpen &&
                <div className="dropDown">
                    <div className="dropDownItem"><i className="fa-solid fa-cloud-arrow-up"></i>Upgrade Plan</div> 
                    <div className="dropDownItem"><i className="fa-solid fa-gear"></i>Settings</div>
                    <div className="dropDownItem" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out
                    </div>

                </div>
            }

            {/* Allchat display in window */}
            <Chat></Chat>

            <RingLoader color="#fff" loading={loading}>

            </RingLoader>
            
            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything" 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter'? getReply() : ''}
                    >
                        
                    </input>
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    SigmaGpt can make mistakes. Check important info. See cookie Preferences.
                </p>
            </div>

        </div>
    )
}

export default ChatWindow;