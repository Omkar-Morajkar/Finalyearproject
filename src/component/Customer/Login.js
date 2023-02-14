import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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

    if(email.length == "")
    {
      alert("Enter email");
    }
    if(password.length == "")
    {
      alert("Enter password");
    }
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(email))
    {
      alert("Invalid email format");
    }

    await axios.post("http://localhost/FinalYearProject/Login.php",users)
    .then((resp)=>{
      console.log(resp);
      if(resp.data.status =="valid")
      {
        alert("Login successful");
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
        <div id="Login" style={{marginLeft:"225px"}}>
            <div class="section">
                <div class="box-area">
                  <section className="vh-100" >
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11" style={{boxshadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
                          <div className="card text-black">
                            <div className="card-body p-md-5" >
                              <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                  <form className="mx-1 mx-md-4" onSubmit={e => submitForm(e)}>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                                      <div className="form-outline flex-fill mb-0">
                                        <input type="text" id="name" required name="email" className="form-control1" placeholder="Enter email" value={email} onChange={e =>handleChange(e)} />
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                      <div className="form-outline flex-fill mb-0">
                                        <input type="password" required id="form3Example4c" name="password" className="form-control" placeholder="Enter password" value={password} onChange={e =>handleChange(e)}/>
                                      </div>
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
                                  <img src="https://th.bing.com/th/id/OIP.kUQnGpBrdnNL5bzRIedO-gHaE8?pid=ImgDet&rs=1" className="img-fluid" style={{backgroundSize:'cover', borderRadius:'20px'}} alt="Sample image" />
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
    </>
  );
};

export default Login;