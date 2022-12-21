import react from "react"

function Navbar() {
    return( 
        <>
        <link rel="stylesheet" href="index.css"></link>
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fundpeti</a>
    <ul className="nav ">
      <li className="nav-item">
        <a className="nav-link active" href="#"><h5>About Us</h5></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#"><h5>Features</h5></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#"><h5>Donation</h5></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#"><h5>Causes</h5></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#"><h5>Blog</h5></a>
      </li>
    </ul>

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
      <nav class="navbar navbar-dark bg-dark">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-light" type="button">Login</button>
    <button class="btn btn-dark" type="button">Register</button>
  </form>
</nav>
    </div>
  </div>
</nav>


        </>
    );
}

export default Navbar;

