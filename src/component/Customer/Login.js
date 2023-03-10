import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";

const Login = () => {
  
  const { register, formState: {errors},handleSubmit } = useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    email:"",
    password:""  
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const{email,password}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{
    console.log(users);

    await axios.post("http://localhost/FinalYearProject/Login.php",users)
    .then((resp)=>{
      console.log(resp);
      if(resp.data.status =="valid")
      {
        alert("Login successful");
        setIsLoggedIn(true);
        localStorage.setItem('login', 'true');
        navigate('/Donate');
      }
      else if(resp.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else
      {
        alert("There is some problem"+resp.data.status);
      }
    })
  }
    return (
        <>

        {isLoggedIn ? (
            navigate('/Donate')
        ) : (

        <div id="Login" style={{marginLeft:"225px"}}>
            <div class="section">
                <div class="box-area">
                  <section className="vh-100" >
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11" >
                          <div className="card text-black" style={{background:'#e9ecef',boxShadow:' 0px 10px 10px rgba(0, 0, 0, 0.5)', borderRadius:'20px'}}>
                            <div className="card-body p-md-5" >
                              <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit( e => submitForm(e))}>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="text"  className="form-control" placeholder="Enter email" value={email} {...register("email", { required:true})} onChange={e =>handleChange(e)} />
                                      <p style={{color:'red',fontSize:'13px'}}>{errors.email?.type === "required" && "*Enter email"}</p>

                                    </div>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="password"  className="form-control" placeholder="Enter password" value={password} {...register("password", { required:true,})} onChange={e =>handleChange(e)}/>
                                      <p style={{color:'red',fontSize:'13px'}}>{errors.password?.type === "required" && "*Enter password"}</p>
                                      
                                    </div>
                                    <div className="form-check d-flex justify-content-center mb-5">
                                      <label className="form-check-label" htmlFor="form2Example3">
                                        Already have an accout? <a href="/Register">Register</a>
                                      </label> 
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Login</button>
                                    </div>
                                  </form>
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                  <img src="https://th.bing.com/th/id/OIP.kUQnGpBrdnNL5bzRIedO-gHaE8?pid=ImgDet&rs=1" className="img-fluid" style={{backgroundSize:'cover', borderRadius:'20px',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} alt="Sample image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>    
            </div>     
        </div>

)}
    </>
  );
};

export default Login;