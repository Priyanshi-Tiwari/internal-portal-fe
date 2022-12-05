import './App.css';
import Login from "./components/login/Login";
import Dashboard from './components/dashboard/Dashboard';
import AccountManager from './components/accountmanager/AccountManager';
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className='App'>

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
