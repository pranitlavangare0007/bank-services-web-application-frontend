import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";

export function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="welcome-page">

      {/* NAVBAR */}
      <header className="welcome-header">
        <div className="logo" onClick={() => navigate("/")}>PayPulse</div>

        <div className="header-actions">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-text">
          <h1>
            Banking that feels <span>simple</span>
          </h1>

          <p>
            Open accounts, transfer money instantly via UPI & IMPS,
            track transactions and download statements — all from one secure platform.
          </p>

          <button
            className="get-started"
            onClick={() => navigate("/login")}
          >
            Open your account
          </button>
        </div>

        <div className="hero-card">
          <div className="card-ui">
            <p className="card-title">Available Balance</p>
            <h2>₹ 12,450.00</h2>
            <p className="upi">pranit@paypulse</p>
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <h3>Instant Transfers</h3>
          <p>Send and receive money instantly using UPI & IMPS.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>JWT authentication + MPIN verification keeps your money safe.</p>
        </div>

        <div className="feature-card">
          <h3>Smart Statements</h3>
          <p>View last transactions and download PDF bank statements anytime.</p>
        </div>

      </section>

      <footer className="welcome-footer">
        © {new Date().getFullYear()} PayPulse. Secure Digital Banking.
      </footer>

    </div>
  );
}