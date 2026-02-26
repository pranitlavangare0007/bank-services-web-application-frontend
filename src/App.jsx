import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { Welcome } from './pages/Welcome'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Dashboard } from "./pages/Dashboard";
import { SelectAccount } from "./pages/SelectAccount";
import { OpenAccount } from "./pages/OpenAccount";
import { PageNotFound } from "./pages/PageNotFound";
import{Layout} from './components/Layout'
import { TransactionSuccess } from "./pages/TransactionSuccess";
import { Deposit } from "./pages/Deposit";
import{Withdraw} from './pages/Withdraw'
import { ImpsTransfer } from "./pages/ImpsTransfer";
import { UpiTransfer } from "./pages/UpiTransfer";
import { AccountStatement } from "./pages/AccountStatement";
function App() {


  return (

    <BrowserRouter>

      <Routes>

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/select-account" element={<SelectAccount />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/imps-transfer" element={<ImpsTransfer />} />
          <Route path="/upi-transfer" element={<UpiTransfer />} />
          <Route path="/statement" element={<AccountStatement />} />
          <Route path="/transaction-success" element={<TransactionSuccess />} />
        </Route>

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </BrowserRouter>

  
  )
}

export default App
