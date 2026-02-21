import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api';


export function OpenAccount(){
    const[accountType,setAccountType]=useState('SAVINGS');
    const[accountPurpose,setAccountPurpose]=useState('PERSONAL');
    const[mpin,setMpin]=useState('');
    const navigate=useNavigate();

    const handleOpenAccount = async(event)=>{
        event.preventDefault();

        try{
            await api.post("/accounts",{mpin,accountType,accountPurpose});
             alert("Account created successfully!");
      navigate("/select-account");
        }
        catch(err){
            console.log(err)
             alert("Account creation failed");
        }
    }

    

    return(
        <div>
            <form onSubmit={handleOpenAccount}>

      <h2>Open Bank Account</h2>

     
      <label>Account Type</label>
      <select
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="SAVINGS">Savings Account</option>
        <option value="CURRENT">Current Account</option>
      </select>

       <label>Account Purpose</label>
      <select
        value={accountPurpose}
        onChange={(e) => setAccountPurpose(e.target.value)}
      >
        <option value="SALARY">SALARY Account</option>
        <option value="PERSONAL">PERSONAL Account</option>
         <option value="BUSINESS">BUSINESS Account</option>
           <option value="INVESTMENT">INVESTMENT Account</option>
      </select>

       <input
          className=""
          type="password"
          onChange={e => setMpin(e.target.value)}
          placeholder="set 6 digit MPIN"
          required
        />


      <button type="submit">Create Account</button>
    </form>
        </div>
    );
}