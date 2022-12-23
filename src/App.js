import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Ahome from "./component/Ahome";

function App() {
  return(
    <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Navbar/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Ahome" element={<Ahome/>}/>
        </Routes>
    </BrowserRouter>
);
}

export default App;
