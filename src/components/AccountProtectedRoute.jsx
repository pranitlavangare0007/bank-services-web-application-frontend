import { Navigate } from "react-router-dom";

export function AccountProtectedRoute({ children }) {

    const token = localStorage.getItem("token");
    const selectedAccount = sessionStorage.getItem("selectedAccount");

   
    if(!token){
        return <Navigate to="/login" replace />;
    }

   
    if(!selectedAccount){
        return <Navigate to="/select-account" replace />;
    }

    return children;
}