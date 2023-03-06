import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import {useForm} from "react-hook-form";


export default function DLogin  (){
  const { register, formState: {errors},handleSubmit } = useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    email:"",
    password:""  
  })
  const{email,password}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{
    e.preventDefault();
    console.log(users);

    // if(email.length == "")
    // {
    //   alert("Enter email");
    // }
    // if(password.length == "")
    // {
    //   alert("Enter password");
    // }
    // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(!regex.test(email))
    // {
    //   alert("Invalid email format");
    // }

    await axios.post("http://localhost/FinalYearProject/Login.php",users)
    .then((re)=>{
      console.log(re);
      if(re.data.status =="valid")
      {
        alert("Login successful");
        navigate('/verification');
      }
      else if(re.data.status =="invalid")
      {
        alert("There is some problem");
      }
      // else
      // {
      //   alert("There is some problem"+re.data.status);
      // }
    })
    console.log(errors)
  }
  
    return(
        <>
        <div id='Login' style={{marginLeft:"225px"}} >
          <section className="vh-100" >
        <div className="container h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-lg-12 col-xl-11" >
              <div className="card text-black" >
                <div className="card-body p-md-5" >
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                      <form className="mx-1 mx-md-4" onSubmit={ handleSubmit( e => submitForm(e))}>
                        
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" name="email"  placeholder="Enter email"  value={email} {...register("email", { required:true,pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}onChange={e =>handleChange(e)}  />
                            <p style={{color:'red'}}>{errors.email?.type === "pattern" && "Email format is incorrect"}</p>
                            <p style={{color:'red'}}>{errors.email?.type === "required" && "Enter email"}</p>
                            
                          </div>
                      

                        
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="password" placeholder="Enter password" value={password} {...register("password", { required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/})} onChange={e =>handleChange(e)} />
                            <p style={{color:'red'}}>{errors.password?.type === "pattern" && "password format is incorrect"}</p>
                            <p style={{color:'red'}}>{errors.password?.type === "required" && "Enter password"}</p>
                            
                          </div>
                          
                          
                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" htmlFor="form2Example3">
                            Don't have an accout? <a href="/DRegister">Register</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Login</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        
        </>
    );
}

