import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

const CustCard = () => {
  const now = 50;
  const [dinput, setdinput] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 
    function getUsers() {
        axios.get('http://localhost/finalYearProject/dInputView.php').then(function(rese) {
            console.log(rese.data);
            setdinput(rese.data);
        });
    }
  return (
    <>
            <section className="main-card--cointainer">
            {dinput.map(inputs =>(
                  <div className="col-lg-12 col-xl-11" >
                    <div className="card text-black" style={{borderRadius: '25px', }}>
                      <div className="card-body p-md-5" >
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <div className="card-body">
                                  <h3 className="card-title">{inputs.title}</h3>
                                  <span className="card-author subtle">Name:{inputs.name}</span><br/>
                                  <span className="card-description subtle">
                                    {inputs.discription}
                                  </span>
                                  <br/><br/>
                                  <ProgressBar now={now} label={`${now}%`} />
                                  <br/>
                                  <Link to='/billing'><button className="card-tag subtle" >Donate</button></Link>
                                </div>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src={`http://localhost/FinalYearProject/uploads/`+inputs.image}alt="images"className="card-media" style={{width:"500px",height:'300px',borderRadius:'20px'}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        ))}
        <br/>
      </section>
      <br/>
    </>
  );
};
export default CustCard;
