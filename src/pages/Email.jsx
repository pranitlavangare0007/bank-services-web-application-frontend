

import { useState } from "react";
import api from '../../api';

export function Email(){

  const [email] = useState("pranitlavangare0007@gmail.com")

  async function handelDeposit(event) {
    event.preventDefault();
    try {
      const response = await api.post(`/send-otp/${email}`)

    console.log(response)
     

    } catch (err) 
    {
        console.log( err)
    }
  };


 
 return (
  <div className="deposit-page">

    <div className="deposit-container">

      <div className="deposit-header">
        <h2>Deposit Money</h2>
        <p>Add funds securely to your account</p>
      </div>

      

      <form className="deposit-form" onSubmit={handelDeposit}>

        <div className="form-group">
          <label>email</label>
          <div className="amount-input">
            
            
          </div>
        </div>

       

        <button className="deposit-btn">
          Confirm Deposit
        </button>

      </form>

    </div>
  </div>
);
}