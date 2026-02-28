import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api';
import "../styles/registration.css";   

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
  <div className="register-page">

    <div className="register-container">

      <div className="register-header">
        <h1>Open Your PayPulse Account</h1>
        <p>Create a secure digital banking profile</p>
      </div>

      <form className="register-form" onSubmit={handleRegister}>

        {/* ACCOUNT CREDENTIALS */}
        <div className="form-section">
          <h3>Login Credentials</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="form-section">
          <h3>Personal Information</h3>

          <div className="form-grid">
            <div className="form-group full">
              <label>Full Name</label>
              <input
                type="text"
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                onChange={e => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-group full">
              <label>Residential Address</label>
              <input
                type="text"
                onChange={e => setAddress(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <button className="register-btn">Create Bank Account</button>

        <p className="register-footer">
          Already registered?
          <span onClick={() => navigate("/login")}>
            Login here
          </span>
        </p>

      </form>
    </div>
  </div>
);
}
