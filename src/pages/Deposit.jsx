import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../api';


export function Deposit() {
  const [amount, setAmount] = useState(0);
  const [mpin, setMpin] = useState("");
  const [channel] = useState("CASH")

  const navigate = useNavigate();

  const accNum =
    sessionStorage.getItem("selectedAccount");



  async function handelDeposit(event) {
    event.preventDefault();
    try {
      const response = await api.patch(`/accounts/${accNum}/deposit`, { mpin, amount, channel })

      navigate("/transaction-success", { state: { transaction: response.data } })
     


    } catch (err) {
      alert("Deposit Failed")
      console.log(err)
      navigate("/dashboard", { replace: true });
    }
  };


 
  return (
    <div>

      <form onSubmit={handelDeposit}>


        <input
          className=""
          type="number"
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter Amount"
          required
        />

        <input
          className=""
          type="password"
          onChange={e => setMpin(e.target.value)}
          placeholder="MPIN"
          required
        />

        <button className="" >
          Deposit
        </button>

      </form>
    </div>
  );
}