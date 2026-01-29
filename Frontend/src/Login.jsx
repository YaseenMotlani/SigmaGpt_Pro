import { useContext, useState } from "react";
import { MyContext } from "./Mycontext";
import "./Auth.css";

function Login({ onSwitch }) {
  const { login } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await  fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      login(data.token);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="authBox">
      <h2>Welcome back</h2>

      <input placeholder="Email address" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <span onClick={onSwitch}>Sign up</span>
      </p>
    </div>
  );
}

export default Login;
