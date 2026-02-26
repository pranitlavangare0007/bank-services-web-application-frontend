import "./footer.css";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-section">
          <h2 className="footer-logo">PayPulse</h2>
          <p className="footer-desc">
            Secure digital banking platform providing UPI & IMPS transfers,
            balance enquiry and transaction tracking in a safe environment.
          </p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/imps-transfer">IMPS Transfer</Link>
           <Link to="/upi-transfer">UPI Transfer</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/profile">Profile</Link>
        </div>

       
        <div className="footer-section">
          <h3>Services</h3>
          <p>UPI Payments</p>
          <p>IMPS Transfer</p>
          <p>Balance Enquiry</p>
          <p>Account Security</p>
        </div>

        
        <div className="footer-section">
          <h3>Security</h3>
          <p>🔒 256-bit Encrypted</p>
          <p>JWT Authentication</p>
          <p>Secure API Communication</p>
          <p>User Data Protection</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} PayPulse. All Rights Reserved.
      </div>
    </footer>
  );
}

