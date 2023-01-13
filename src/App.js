import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar";
import { ProgressBar, Button } from 'react-bootstrap';
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
import Progressbar from "./component/Customer/Progressbar";
import Billing from "./component/Customer/Billing";


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
        </Routes>
    </BrowserRouter>
);
}

export default App;
