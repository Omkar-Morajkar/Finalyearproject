import React from 'react';
import Footer from './Footer';
import './Billing.css';
import cardLogo from '../Logo/card.png';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

const Billing = () =>{
    const navigate = useNavigate();
  const [users, setUsers] = useState({
    name:"",
    amount:"",
    address:"",
    city:"",
    state:"",
    cname:"",
    cnumber:"",
    emonth:"",
    eyear:"",
    cvv:""
  })
  const{name,amount,address,city,state,cname,cnumber,emonth,eyear,cvv}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{
    e.preventDefault();
    console.log(users);

    await axios.post("http://localhost/FinalYearProject/billing.php",users)
    .then((rs)=>{
      console.log(rs);
      if(rs.data.status =="valid")
      {
        alert("payment successfull");
        navigate('/Donate');
      }
      else if(rs.data.status =="invalid")
      {
        alert("payment failed");
      }
      else
      {
        alert("There is some problem"+rs.data.status);
      }
    })
  }
    return(
    <>
    <div id='Login' >
        <div className="col-75" >
            <div className="Bcontainer" >
            <form action="/action_page.php" onSubmit={e => submitForm(e)}>
                <div className="row">
                <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                    <input type="text" id="fname" name="name" placeholder="John M. Doe"  value={name} onChange={e =>handleChange(e)} />
                    <label htmlFor="amount"><i class="fa fa-inr" />Enter Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Amount"  value={amount} onChange={e =>handleChange(e)}/>
                    <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"  value={address} onChange={e =>handleChange(e)}/>
                    <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                    <input type="text" id="city" name="city" placeholder="New York"  value={city} onChange={e =>handleChange(e)}/>
                    <div className="row">
                        <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" placeholder="state"  value={state} onChange={e =>handleChange(e)}/>
                        </div>
                    </div>
                </div>
                <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="cards">Enter Card Details</label>
                    <img src={cardLogo} alt="card"/><br/><br/>
                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cname" placeholder="John More Doe"  value={cname} onChange={e =>handleChange(e)}/>
                    <label htmlFor="ccnum">card number</label>
                    <input type="number" id="ccnum" name="cnumber" placeholder="1111-2222-3333-4444"  value={cnumber} onChange={e =>handleChange(e)}/>
                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="number" id="expmonth" name="emonth" placeholder="September"  value={emonth} onChange={e =>handleChange(e)}/>
                    <div className="row">
                    <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="number" id="expyear" name="eyear" placeholder={2018}  value={eyear} onChange={e =>handleChange(e)}/>
                    </div>
                    <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id="cvv" name="cvv" placeholder={352}  value={cvv} onChange={e =>handleChange(e)}/>
                    </div>
                    </div>
                </div>
                </div>
                <input type="submit" name="submit" value="add user"/>
            </form>
            </div>
        </div>
        <Footer/>
        </div>
        

    </>
    );
}
export default Billing;