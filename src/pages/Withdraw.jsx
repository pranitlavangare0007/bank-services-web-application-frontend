import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../api';


export function Withdraw() {
  const [amount, setAmount] = useState(0);
  const [mpin, setMpin] = useState("");
  const [channel] = useState("CASH")

  const navigate = useNavigate();

  const accNum =
    sessionStorage.getItem("selectedAccount");



  async function handelWithdraw(event) {
    event.preventDefault();
    try {
      const response = await api.patch(`/accounts/${accNum}/withdraw`, { mpin, amount, channel })

      navigate("/transaction-success", { state: { transaction: response.data } })
     


    } catch (err) {
       console.log("Withdraw Failed" ,err)
    
    }
  };


 
  return (
    <div>

      <form onSubmit={handelWithdraw}>


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
          Withdraw
        </button>

      </form>
    </div>
  );
}