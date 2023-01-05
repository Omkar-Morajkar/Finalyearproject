import React from "react";

const Custcause = () => {
    return (
       <>
        <section className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px', }}>
                <div className="card-body p-md-5" >
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Causes</p>
                      <p className="text-center h6 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please select the stage of funds needed.</p>
                      <form className="mx-1 mx-md-4">
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" style = {{backgroundColor: 'red'}} className="btn btn-primary btn-md" value="stage">Stage1</button>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" style = {{backgroundColor: 'orange'}} className="btn btn-primary btn-md" value="stage">Stage2</button>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" style = {{backgroundColor: 'green'}} className="btn btn-primary btn-md" value="stage">Stage3</button>
                        </div>
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" value="SEND">Submit</button>
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
       </>
    )
}
export default Custcause;