import React from "react";
import { useState } from "react";
import axios from 'axios';


const Register = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [Cpassword, setCpassword] = useState('');

  const handleSubmit = () =>{
    if(name.length === 0)
    {
      alert("Name cannot be empty!");
    }
    else if(mobile.length ===0)
    {
      alert("Enter mobile number");
    }
    else if(email.length === 0)
    {
      alert("Enter email");
    }
    else if(password.length === 0)
    {
      alert("Enter password");
    }
    else if(Cpassword.length === 0)
    {
      alert("Enter confirm password");
    }
    else{
      const url = "http://localhost/reactProject/Insert.php";

      let fData = new FormData();
      fData.append('name',name);
      fData.append('mobile',mobile);
      fData.append('email',email);
      fData.append('password',password);

      axios.post(url, fData)
      .then(response=> alert(response.data))
      .catch(error=> alert(error));
    }
  }

  return(
    <>
      <section className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="name" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="tel" id="mobileNo" className="form-control" placeholder="Enter Mobile Number" pattern="[0-9]{5}-[0-9]{5}" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" className="form-control" placeholder="Confirm password" value={Cpassword} onChange={(e) => setCpassword(e.target.value)}/>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" htmlFor="form2Example3">
                            Already have an accout? <a href="/Login">Login</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" value="SEND" onClick={handleSubmit}>Register</button>
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
    </>
  );
  
};

export default Register;