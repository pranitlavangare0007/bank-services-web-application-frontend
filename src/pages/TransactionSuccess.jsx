import { useLocation, useNavigate } from "react-router-dom";
import '../styles/transactionSuccess.css'

export  function TransactionSuccess() {

  const location = useLocation();
  const navigate = useNavigate();

  const tx = location.state?.transaction;

  if (!tx) {
    return <h2>Invalid Transaction</h2>;
  }

  return (
    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">✔</div>

        <h2>Transaction Successful</h2>

        <p><strong>Account:</strong> •••• {String(tx.accountNumber).slice(-4)}</p>

        <p><strong>Type:</strong> {tx.type}</p>

        <p><strong>Channel:</strong> {tx.channel}</p>

        <p><strong>Amount:</strong> ₹ {tx.amount}</p>

        <p><strong>Updated Balance:</strong> ₹ {tx.balance}</p>

        <p><strong>Date & Time:</strong> {tx.time}</p>

        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}