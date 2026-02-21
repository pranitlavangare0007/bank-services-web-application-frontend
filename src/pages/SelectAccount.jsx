import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api';
import './selectAccount.css';


export function SelectAccount() {

    const [accounts, setAccounts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

   useEffect(() => {

  const fetchAccount = async () => {
    try {
      const response = await api.get("/accounts");

      const accs = response.data;
      setAccounts(accs);
      setLoaded(true);

      
      if ( loaded && accs.length === 0) {
        navigate("/open-account", { replace: true });
      }

    } catch (err) {

      
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      } else {
        console.log(err);
      }
    }
  };

  fetchAccount();

}, [navigate,loaded]);


    return (<>
      
         <div className="account-container">
    <h2>Select Your Account</h2>

    {accounts.map(acc => (
      <div
        key={acc.accountNumber}
        className="account-card"
        onClick={() => {
          navigate("/dashboard" ,{state:{ accountNumber: acc.accountNumber }});
        }}
      >
        <h3>{acc.accountType} Account</h3>

        <p>
          Account: •••• {acc.accountNumber.slice(-4)}
        </p>

        <p className="balance">
          Balance: ₹{acc.balance}
        </p>
      </div>
    ))}
  </div>
 
  </>

    );
}