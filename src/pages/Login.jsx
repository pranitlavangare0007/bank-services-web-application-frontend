import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api';
import '../styles/login.css';


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { username, password });


      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      sessionStorage.removeItem("selectedAccount");

      navigate("/select-account");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>

        <input
          className="login-input"
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          className="login-input"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="login-footer">
          New user?{" "}
          <span
            className="login-link"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>



      </div>
    </div>
  );

}
