import React from 'react'

function DonateInput(){
    return(
        <>
         <div id="Login">
            <div class="section">
                <div class="box-area">
                  <section className="vh-100" >
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                          <div className="card text-black">
                            <div className="card-body p-md-5" >
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                  <form className="mx-1 mx-md-4" onSubmit={e => submitForm(e)}>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                                      <div className="form-outline flex-fill mb-0">
                                        <label>Enter Name of the person</label>
                                        <input type="text" id="name" required name="email" className="form-control" placeholder="Enter email" />
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                      <div className="form-outline flex-fill mb-0">
                                        <input type="password" required id="form3Example4c" name="password" className="form-control" placeholder="Enter password" />
                                      </div>
                                      </div>
                                    <div className="form-check d-flex justify-content-center mb-5">
                                      <label className="form-check-label" htmlFor="form2Example3">
                                        Already have an accout? <a href="/Register">Register</a>
                                      </label>
                                    </div>
                                  </form>
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
}
export default DonateInput;
