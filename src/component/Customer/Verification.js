import React from "react";

function Verification() {
  return (
    <>
    <div id="Login">
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Verification
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Name:</label>
                            <input
                              type="text"
                              required
                              name="name"
                              className="form-control"
                              placeholder="Enter Patient Name"
                            />
                          </div>
                        </div>
                        <div className="radio">
                        <label>Gender:</label>
                        <br />
                        <label>
                            <input
                            type="radio"
                            value="Male"
                            // checked={this.state.selectedOption === "Male"}
                            // onChange={this.onValueChange}
                            />
                            Male
                        </label>
                        </div>
                         <br />
                        <div className="radio">
                        <label>
                            <input
                            type="radio"
                            value="Female"
                            // checked={this.state.selectedOption === "Female"}
                            // onChange={this.onValueChange}
                            />
                            Female
                        </label>
                        </div>
                         <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Date of Birth</label>
                            <input
                              type="date"
                              required
                              name="date"
                              className="form-control"
                              placeholder="Enter Patient DOB"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Relationship to Patient:</label>
                            <input
                              type="text"
                              required
                              name="relation"
                              className="form-control"
                              placeholder="Enter Relationship"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Mobile No:</label>
                            <input
                              type="tel"
                              id="mobileNo"
                              required
                              name="mobile"
                              className="form-control"
                              placeholder="Enter Patient Mobile Number"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>E-mail:</label>
                            <input
                              type="email"
                              id="form3Example3c"
                              required
                              name="email"
                              className="form-control"
                              placeholder="Enter Patient email"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Aadhar No:</label><input
                              type="text"
                              id="form3Example4c"
                              required
                              name="aadhar"
                              className="form-control"
                              placeholder="Enter Patient Aadhar Card No:"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Address:</label>
                            <input
                              type="text"
                              id="form3Example4c"
                              required
                              name="address"
                              className="form-control"
                              placeholder="Enter Patient Address"
                            />
                            <input
                              type="text"
                              id="form3Example4c"
                              required
                              name="address"
                              className="form-control"
                              placeholder="Second line for address"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Occupation:</label>
                            <input
                              type="text"
                              required
                              name="occupation"
                              className="form-control"
                              placeholder="Enter Patient occupation"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Bank Details:</label>
                            <input
                              type="text"
                              id="form3Example4cd"
                              required
                              className="form-control"
                              placeholder="Enter Patient Bank Acc"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Amount:</label>
                            <input
                              type="text"
                              id="form3Example4cd"
                              required
                              className="form-control"
                              placeholder="Enter Amount needed"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Amount:</label>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Red"
                                    // checked={this.state.selectedOption === "Male"}
                                    // onChange={this.onValueChange}
                                    />
                                    Urgent
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Orange"
                                    // checked={this.state.selectedOption === "Female"}
                                    // onChange={this.onValueChange}
                                    />
                                    In a month 
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Yellow"
                                    // checked={this.state.selectedOption === "Other"}
                                    // onChange={this.onValueChange}
                                    />
                                    In a year
                                </label>
                                </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            
                            <label>Medical Reconds:</label>
                            <input
                              name="foo"
                              type="file"
                              className="form-control"
                              required
                              accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                             placeholder="Add Patient's Medical History"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label>Background Story:</label>
                            <input
                              name="foo"
                              type="file"
                              className="form-control"
                              required
                              accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                              placeholder="Add the reason behind the Patient's ailment"
                            />
                          </div>
                        </div>

                     
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <a href="/verify">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            name="submit"
                            value="start verification"
                          >
                            Verify
                          </button></a>
                        </div>
                      </form>
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
export default Verification;
