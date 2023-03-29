import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./component/Customer/Register";
import Login from "./component/Customer/Login";
import Home from "./component/Customer/Home";
import Contact from "./component/Customer/Contact";
import DLogin from "./component/Customer/DLogin";
import DRegister from "./component/Customer/DRegister";
import Sidebar from "./component/Sidebar";
import Donate from "./component/Customer/Donate";
import Billing from "./component/Customer/Billing";
import ListUser from "./component/Admin/ListUser";
import Verification from "./component/Customer/Verification";
import DonateInput from "./component/Customer/DonateInput";
import Donator from "./component/Admin/Donator";
import Verify from "./component/Admin/Verify";
import VerifyPerson from "./component/Admin/VerifyPerson";
import ALogin from "./component/Admin/ALogin";
import Terms from "./component/Customer/Terms";
import Support from "./component/Customer/Support";
import ThankYou from "./component/Customer/ThankYou";
import Asidebar from "./component/Admin/Asidebar";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
      // check if the user is logged in
      const admin = localStorage.getItem('adminlogin');
      if (admin) {
        setIsLoggedIn(true);
      }
    }, []);
  
    function handleLogout() {
      // clear localStorage and log the user out
      localStorage.clear();
      setIsLoggedIn(false);
    }

  return(
    <BrowserRouter>
       {isLoggedIn ? <Asidebar handleLogout={handleLogout} /> : <Sidebar />}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/DLogin" element={<DLogin/>}/>
            <Route path="DRegister" element={<DRegister/>}/>
            <Route path="/Donate/" element={<Donate/>}/>
            <Route path="/Billing/:id" element={<Billing/>}/>
            <Route path="/ListUsers" element={<ListUser/>}/>
            <Route path="/Verification/:id" element={<Verification/>}/>
            <Route path="/Input/:id" element={<DonateInput/>}/>
            <Route path="/Donator" element={<Donator/>}/>
            <Route path="/averify" element={<Verify/>}/>
            <Route path="/pverify/:id" element={<VerifyPerson/>}/>
            <Route path="/ALogin" element={<ALogin/>}/>
            <Route path="/Terms" element={<Terms/>}/>
            <Route path="/Support" element={<Support/>}/>
            <Route path="/thankYou" element={<ThankYou/>}/>
        </Routes>
    </BrowserRouter>
);
}

export default App;
