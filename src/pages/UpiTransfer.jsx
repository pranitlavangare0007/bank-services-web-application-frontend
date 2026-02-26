import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../api';


export function UpiTransfer() {
    const [amount, setAmount] = useState(0);
    const [mpin, setMpin] = useState("");
    const [upiId, setUpiId] = useState("")
    const [channel] = useState("UPI")
  
    const navigate = useNavigate();

   const accNum =
    sessionStorage.getItem("selectedAccount");



    async function handelUpiTransfer(event) {
        event.preventDefault();
        try {
            const response = await api.patch(`/accounts/${accNum}/transfer`, { mpin, amount, channel,upiId })

            navigate("/transaction-success", { state: { transaction: response.data } })



        } catch (err) {
            alert("Withdraw Failed")
            console.log(err)
            navigate("/dashboard", { replace: true });
        }
    };



    return (
        <div>

            <form onSubmit={handelUpiTransfer}>

                <input
                    className=""
                    type="text"
                    onChange={e => setUpiId(e.target.value)}
                    placeholder="Enter upiId of Reciver"
                    required
                />

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
                    Send
                </button>

            </form>
        </div>
    );
}