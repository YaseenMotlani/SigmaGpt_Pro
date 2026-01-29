import "./Chat.css";
import { useContext , useState, useEffect} from "react";
import { MyContext } from "./Mycontext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

// react-markdown
// rehype-highlight

function Chat() {
    const {newChat, prevChats, reply} = useContext(MyContext);
    const [latestReply, setLatestReply] = useState(null);

      // latestreply seprate => typing effect create
    useEffect(() => {
        if(reply === null) {
            setLatestReply(null);
            return;
        }

      if (!prevChats?.length || !reply) return;

      const content = reply.split(" "); //individual words

      let idx = 0;
      const interval = setInterval(() => {
        setLatestReply(content.slice(0, idx+1).join(" "));

        idx++;
        if(idx >= content.length) clearInterval(interval);
      }, 40);

      return () => clearInterval(interval);

    }, [prevChats, reply])



    return (
        <>
        {newChat && <h1>Start a New Chat!</h1>}
        <div className="chats">
            {/* This Is Dynamic */}
            {
                prevChats?.slice(0, -1).map((chat, idx) =>
                    <div className={chat.role === "user"? "userDiv" : "gptDiv"} key={idx}>
                        {
                            chat.role === "user"?
                            <p className="userMessage">{chat.content}</p> :
                            <ReactMarkdown rehypePlugins={rehypeHighlight}>{chat.content}</ReactMarkdown>
                        }
                    </div>
                )
            }

            {/*  */}
            {
                prevChats.length > 0 && latestReply !== null &&
                <div className="gptDiv" key={"typing"}>
                    <ReactMarkdown rehypePlugins={rehypeHighlight}>{latestReply}</ReactMarkdown>
                </div>
            }
            {
                prevChats.length > 0 && latestReply === null &&
                <div className="gptDiv" key={"non-typing"}>
                    <ReactMarkdown rehypePlugins={rehypeHighlight}>{prevChats[prevChats.length-1].content}</ReactMarkdown>
                </div>
            }

            
            {/* This Is Static Data */}
            {/* <div className="userDiv">
                <p className="userMessage"> User Message</p>
            </div>
            <div className="gptDiv">
                <p className="gptMessage">GPT Generated Message</p>
            </div> */}

        </div>
        </>

    )
}

export default Chat;