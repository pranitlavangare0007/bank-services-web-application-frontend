import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../api';


export function ImpsTransfer() {
    const [amount, setAmount] = useState(0);
    const [mpin, setMpin] = useState("");
    const [accountNumberReceiver, setAccountNumberReceiver] = useState("")
    const [channel] = useState("IMPS")
    const location = useLocation();
    const navigate = useNavigate();

    const accNum =
        location.state?.accountNumber ||
        localStorage.getItem("accountNumber");



    async function handelWithdraw(event) {
        event.preventDefault();
        try {
            const response = await api.patch(`/accounts/${accNum}/transfer`, { mpin, amount, channel,accountNumberReceiver })

            navigate("/transaction-success", { state: { transaction: response.data } })



        } catch (err) {
            alert("Withdraw Failed")
            console.log(err)
            navigate("/dashboard", { replace: true });
        }
    };



    return (
        <div>

            <form onSubmit={handelWithdraw}>

                <input
                    className=""
                    type="text"
                    onChange={e => setAccountNumberReceiver(e.target.value)}
                    placeholder="Enter Account Number of Reciver"
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