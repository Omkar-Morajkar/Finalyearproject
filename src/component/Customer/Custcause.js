import React from "react";


const Custcause = () => {
    return (
       <>
       <div id="Login">
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
                        <a href="/Dreason">
                          <button type="button" style = {{backgroundColor: 'red', width: '250px'}} className="btn btn-primary btn-md" value="stage">Stage1</button>
                        </a>
                        </div>
                        <p>Select this stage if you are in sever needs of funds <p>e.g within a week.</p></p>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <a href="/Dreason">
                          <button type="button" style = {{backgroundColor: 'orange', width: '250px'}} className="btn btn-primary btn-md" value="stage">Stage2</button>
                        </a>
                        </div>
                        <p>Select this stage if you need of funds within medium time <p>e.g within a month.</p></p>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <a href="/Dreason">
                          <button type="button" style = {{backgroundColor: 'green', width: '250px'}} className="btn btn-primary btn-md" value="stage">Stage3</button>
                        </a>
                        </div>
                        <p>Select this stage if you need of funds within moderate time <p>e.g within a year.</p></p>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" value="SEND">Next</button>
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
    )
}
export default Custcause;