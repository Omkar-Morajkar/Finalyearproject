import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import {React} from 'react';
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
import UserData from "./component/Admin/UserData";
import ThankYou from "./component/Customer/ThankYou";
import Asidebar from "./component/Admin/Asidebar";


function App() {
    const isAdmin = localStorage.getItem('adminlogin') == 'true';

    const sidebar = isAdmin ? <Asidebar/> : <Sidebar/>;
  return(
    <BrowserRouter>
        {sidebar}
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
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
            <Route path="/UserData/:id" element={<UserData/>}/>
            <Route path="/Thankyou" element={<ThankYou/>}/>

        </Routes>
    </BrowserRouter>
);
}

export default App;
