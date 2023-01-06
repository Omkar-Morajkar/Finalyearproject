import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar";
import Register from "./component/Customer/Register";
import Login from "./component/Customer/Login";
import Ahome from "./component/Admin/Ahome";
import Home from "./component/Customer/Home";
<<<<<<< HEAD
import Contact from "./component/Customer/Contact";
import DLogin from "./component/Customer/DLogin";
import DRegister from "./component/Customer/DRegister";
=======
import Custcause from "./component/Customer/Custcause";
>>>>>>> 593bd3be80472d29003f999bc7d2f16192783ea1

function App() {
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Ahome" element={<Ahome/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/DLogin" element={<DLogin/>}/>
            <Route path="DRegister" element={<DRegister/>}/>
            <Route path="/Custcause" element={<Custcause/>}/>
        </Routes>
    </BrowserRouter>
);
}

export default App;
