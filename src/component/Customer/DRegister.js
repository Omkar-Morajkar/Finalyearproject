import React from 'react';
import './Dregister.css';

function DRegister(){
    return(
        <>
        <div id='Login'>
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
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" required name="name" className="form-control" placeholder="Enter Name" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input type="tel" id="mobileNo"required name="mobile" className="form-control" placeholder="Enter Mobile Number"  />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" required name="email" className="form-control" placeholder="Enter email" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c"  required name="password" className="form-control" placeholder="Enter password"  />
                          </div>
                        </div>
                       

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example4cd" required className="form-control" placeholder="Confirm password" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input name="foo" type="file" className="form-control" required accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input name="foo" type="file" className="form-control" required accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" placeholder="fee structure"/>
                          </div>
                        </div>



                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" htmlFor="form2Example3">
                            Already have an accout? <a href="/Login">Login</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://www.sec.gov/files/crowdfunding-v5b-2016.jpg" className="img-fluid" alt="Sample image" />
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