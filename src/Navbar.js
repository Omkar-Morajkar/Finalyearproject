import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return( 
        <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul className="nav justify-content-center" >
            <li className="nav-item">
                 <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Donation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Causes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link active" href="/Login">Login</a>
              </li>
			        <li className="nav-item">
                 <a className="nav-link active" href="/Register">Register</a>
              </li>
            </ul>
          </div>
        </nav>

      
        </>
    );
}
export default Navbar;

