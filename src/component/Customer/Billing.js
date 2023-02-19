import React from 'react';
import Footer from './Footer';
import './Billing.css';
import cardLogo from '../Logo/card.png';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import {useForm} from "react-hook-form";

const Billing = () =>{
  const { register, formState: {errors},handleSubmit } = useForm();
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
            <form action="/action_page.php" onSubmit={handleSubmit( e => submitForm(e))}>
                <div className="row">
                <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" name="name" placeholder="John M. Doe"  value={name} {...register("name", {required: true})} onChange={e =>handleChange(e)} />
                    <p style={{color:'red',fontSize:'13px'}}>{errors.name?.type === "required" && "*Enter name"}</p>

                    <label htmlFor="amount">Enter Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Amount"  value={amount} {...register("amount", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.amount?.type === "required" && "*Enter Amount"}</p>

                    <label htmlFor="adr"> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"  value={address} {...register("address", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.address?.type === "required" && "*Enter Address"}</p>
                    
                    <label htmlFor="city"> City</label>
                    <input type="text" id="city" name="city" placeholder="New York"  value={city} {...register("city", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.city?.type === "required" && "*Enter city"}</p>
                    
                    <div className="row">
                        <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" placeholder="state"  value={state} {...register("state", {required: true})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.state?.type === "required" && "*Enter state"}</p>
                        </div>
                    </div>
                </div>
                <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="cards">Enter Card Details</label>
                    <img src={cardLogo} alt="card"/><br/><br/><br/>

                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cname" placeholder="John More Doe"  value={cname} {...register("cname", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.cname?.type === "required" && "*Enter name on the card"}</p>
                    
                    <label htmlFor="ccnum">card number</label>
                    <input type="number" id="ccnum" name="cnumber" placeholder="1111-2222-3333-4444"  value={cnumber} {...register("cnumber", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.cnumber?.type === "required" && "*Enter card number"}</p>
                    
                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="number" id="expmonth" name="emonth" placeholder="September"  value={emonth} {...register("emonth", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.emonth?.type === "required" && "*Enter month"}</p>
                    
                    <div className="row">
                    <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="number" id="expyear" name="eyear" placeholder={2018}  value={eyear} {...register("eyear", {required: true})} onChange={e =>handleChange(e)}/>
                        <p style={{color:'red',fontSize:'13px'}}>{errors.eyear?.type === "required" && "*Enter year"}</p>
                    </div>
                    <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id="cvv" name="cvv" placeholder={352}  value={cvv} {...register("cvv", {required: true})} onChange={e =>handleChange(e)}/>
                        <p style={{color:'red',fontSize:'13px'}}>{errors.cvv?.type === "required" && "*Enter cvv"}</p>
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