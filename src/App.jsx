import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { Welcome } from './pages/Welcome'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import { Dashboard } from "./pages/Dashboard";
import { SelectAccount } from "./pages/SelectAccount";
import { OpenAccount } from "./pages/OpenAccount";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  

  return (
  
   <BrowserRouter>
<Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/select-account" element={<SelectAccount />}/>
      <Route path="/open-account" element={<OpenAccount />} />
      <Route path="/" element={<Navigate to="/login" />} />
       <Route path="*" element={<PageNotFound />} />
      </Routes>
   </BrowserRouter>
  
  
  )
}

export default App
