import './App.css';
import Login from "./components/pages/login/Login";
import Dashboard from './components/pages/dashboard/Dashboard';
import AccountManager from './components/pages/accountmanager/AccountManager';
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className='App' style={  {backgroundColor: "#f8fafb"}}>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/client-accounts" element={<Dashboard />} />
        <Route path="/account-manager" element={<AccountManager />} />

        <Route exact path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
