import { useState, useContext } from "react";
import { MyContext } from "./Mycontext.jsx";
import "./Auth.css";

function Signup({ onSwitch }) {
  const { login } = useContext(MyContext); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://sigmagpt-backend-z8s9.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      // ✅ AUTO LOGIN (IMPORTANT)
      localStorage.setItem("token", data.token);
      login(data.token); // 🔥 direct ChatWindow

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="authBox">
      <h2>Create your AI account</h2>

      <input placeholder="Full name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email address" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Creating..." : "Sign Up"}
      </button>

      <p>
        Already have an account? <span onClick={onSwitch}>Login</span>
      </p>
    </div>
  );
}

export default Signup;
