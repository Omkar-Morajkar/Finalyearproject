import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./component/Customer/Register";
import Login from "./component/Customer/Login";
import Ahome from "./component/Admin/Ahome";
import Home from "./component/Customer/Home";
import Contact from "./component/Customer/Contact";
import DLogin from "./component/Customer/DLogin";
import DRegister from "./component/Customer/DRegister";
import Custcause from "./component/Customer/Custcause";
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


function App() {
  return(
    <BrowserRouter>
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Ahome" element={<Ahome/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/DLogin" element={<DLogin/>}/>
            <Route path="DRegister" element={<DRegister/>}/>
            <Route path="/Custcause" element={<Custcause/>}/>
            <Route path="/Donate" element={<Donate/>}/>
            <Route path="/Billing" element={<Billing/>}/>
            <Route path="/ListUsers" element={<ListUser/>}/>
            <Route path="/Verification" element={<Verification/>}/>
            <Route path="/Input" element={<DonateInput/>}/>
            <Route path="/Donator" element={<Donator/>}/>
            <Route path="/averify" element={<Verify/>}/>
            <Route path="/pverify/:id" element={<VerifyPerson/>}/>
            <Route path="/ALogin" element={<ALogin/>}/>
        </Routes>
    </BrowserRouter>
);
}

export default App;
