import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api';
import "../styles/login.css";   

export  function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role] = useState("CUSTOMER");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
      event.preventDefault()
    try {
     const response = await api.post("/register", { username, password ,name,email,address,phoneNumber,role });
     if(response.status ==200){
          alert("Registration successful");
      navigate("/login");
     }
      
    } catch(err) {
     console.log("User already exists" ,err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">
          Join the Bank platform
        </p>

        <form onSubmit={handleRegister}>

        <input
          className="login-input"
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
        />

        <input
          className="login-input"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <input
          className="login-input"
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <input
          className="login-input"
          type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          className="login-input"
          onChange={e => setAddress(e.target.value)}
          placeholder="Address"
          required
        />

          <input
          className="login-input"
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />

        <button className="login-btn" >
          Register
        </button>

        </form>

        <div className="login-footer">
          Already have an account?{" "}
          <span
            className="login-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>

      </div>
    </div>
  );
}
