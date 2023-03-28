import React from 'react';
import './Dregister.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useForm} from "react-hook-form";


function DRegister(){
  const { register, formState: {errors},handleSubmit } = useForm();
  const navigate = useNavigate();

  const [Dnm, setDnm] = useState([]);
  const [dno,setDno] = useState([]);
  const [deml,setDeml] = useState([]);
  const [dpass,setPass] = useState([]);
  const [daadhaar,setaadhaar] = useState([]);

  const handleChange = (e) =>{
    
    const target = e.target;
    const name = target.name;
    if (name === 'Dname') {
      setDnm(e.target.value);
    }
    if (name === 'Dnumber') {
      setDno(e.target.value);
    }
    if (name === 'Demail') {
      setDeml(e.target.value);
    }
    if (name === 'Dpass') {
      setPass(e.target.value);
    }
    if (name === 'Daadhar') {
      setaadhaar(e.target.files[0]);
    }
  }
  const submitForm = async(e) =>{
   
    const fd = new FormData();
    fd.append('Dname',Dnm);
    fd.append('Dnumber',dno);
    fd.append('Demail',deml);
    fd.append('Dpass',dpass);
    fd.append('Daadhar',daadhaar);

    console.log('Aadhaar'+daadhaar);

    await axios.post("http://localhost/FinalYearProject/DRegister.php",fd)
    .then((rs)=>{
      console.log(rs);
      if(rs.data.status =="valid")
      {
        alert("Data added successfully");
        navigate('/DLogin');
      }
      else if(rs.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else if(rs.data.status =="exist")
      {
        alert("Account already exist");
      }
      else
      {
        alert("There is some problem"+rs.data.status);
      }
    })
  }

    return(
        <>
        <div id='Login' style={{marginLeft:"225px"}}>
        <section className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{background:'#e9ecef',boxShadow:' 0px 10px 10px rgba(0, 0, 0, 0.5)', borderRadius:'20px',marginTop:'30px',marginBottom:'30px', animation: "popup 0.3s ease"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4" onSubmit={ handleSubmit( e => submitForm(e))}>
                          <div className="form-outline flex-fill mb-0">
                           
                            <input type="text" name='Dname' className="form-control"  placeholder="Enter Name"  {...register("Dname", { required:true})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.Dname?.type === "required" && "*Enter name"}</p>
                            <p style={{color:'red'}}>{errors.name?.type === "pattern" && "invalid name format"}</p>

                          </div>

                          <div className="form-outline flex-fill mb-0">
                            <input type="tel" name='Dnumber' className="form-control" placeholder="Enter Mobile Number"  {...register("Dnumber", { required:true})} onChange={e =>handleChange(e)}  />
                            <p style={{color:'red',fontSize:'13px'}}>{errors.Dnumber?.type === "required" && "*Please Enter mobile number"}</p>
                          </div>

                          <div className="form-outline flex-fill mb-0">
                            
                            <input type="email" name='Demail' className="form-control"  placeholder="Enter email" {...register("Demail", { required:true})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.Demail?.type === "required" && "*Enter email"}</p>
                            <p style={{color:'red'}}>{errors.name?.type === "pattern" && "invalid email format"}</p>

                          </div>

                          <div className="form-outline flex-fill mb-0">
                            <input type="password"  name='Dpass' className="form-control"  placeholder="Enter password"  {...register("Dpass", { required:true})} onChange={e =>handleChange(e)} />
                            <p style={{color:'red',fontSize:'13px'}}>{errors.Dpass?.type === "required" && "*Enter password"}</p>
                          </div>

                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name='cpass' className="form-control"  placeholder="Confirm password" {...register("cpass", { required:true})} />
                            <p style={{color:'red',fontSize:'13px'}}>{errors.cpass?.type === "required" && "Please confirm your password"}</p>
                          </div>

                          <div className="form-outline flex-fill mb-0">
                          <label for="Daadhar" className="form-label">Upload Aadharcard</label>
                            <input  type="file" name='Daadhar' className="form-control"  {...register("Daadhar", { required:true})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.Daadhar?.type === "required" && "Enter Addharcard "}</p>
                          </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" htmlFor="form2Example3">
                            Already have an accout? <a href="/DLogin">Login</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" style={{backgroundSize:'cover', borderRadius:'20px',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} className="img-fluid" alt="Sample image" />
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
export default DRegister;