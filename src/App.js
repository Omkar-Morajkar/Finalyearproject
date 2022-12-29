import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Ahome from "./component/Ahome";
import Home from "./Home";

function App() {
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Ahome" element={<Ahome/>}/>
        </Routes>
    </BrowserRouter>
);
}

export default App;
