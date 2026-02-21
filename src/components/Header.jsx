import { useNavigate } from "react-router-dom";
import './header.css'

export  function Header() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("accountNumber");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header className="header">
      
      
      <div className="logo" onClick={() => navigate("/dashboard")}>
       payPulse
      </div>

     
      <div className="nav-right">

        <span className="welcome">
          Welcome, <b>{username || "User"}</b>
        </span>

        <button
          className="nav-btn"
          onClick={() => navigate("/select-account")}
        >
          Switch Account
        </button>

        <button
          className="nav-btn"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </header>
  );
}