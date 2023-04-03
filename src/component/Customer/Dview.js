import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

const Dview = () => {
  const [dinput, setdinput] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 

    const id = localStorage.getItem('userId');
    function getUsers() {
        axios.get(`http://localhost/finalYearProject/dInputView.php?id=${id}`).then(function(rese) {
            console.log(rese.data);
            setdinput(rese.data);
        });
    }
  return (
    <>
    <div id='Login' style={{marginLeft:'225px'}}>
            <section className="main-card--cointainer">
            {dinput.map((inputs,key) =>(
                  <div key={key} className="col-lg-12 col-xl-11" >
                    <br/><br/>
                    <div className="card text-black" style={{background:'#e9ecef',boxShadow:' 0px 10px 10px rgba(0, 0, 0, 0.5)',borderRadius: '25px' }}>
                      <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <div className="card-body">
                                  <h3 className="card-title">{inputs.title}</h3>
                                  <span className="card-author subtle">Name:{inputs.name}</span><br/>
                                  <span className="card-description subtle">Amount required : {inputs.amount}</span><br/><br/>
                                  <span className="card-description subtle">Amount Collected : {inputs.acollected}</span><br/><br/>
                                  <span className="card-description subtle">
                                    {inputs.discription}
                                  </span>
                                  <br/><br/>
                                  <ProgressBar now={inputs.percentage} label={`${inputs.percentage}%`} />
                                  <br/>
                                  {inputs.amount <= inputs.acollected && (
                          <Link to={`/verification/{}`}>
                            <button className="btn btn-primary">Apply for donation</button>
                          </Link>
                        )}
                                </div>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src={`http://localhost/FinalYearProject/uploads/`+inputs.image}alt="images"className="card-media" style={{width:"500px",height:'300px',boxShadow:' 0px 10px 10px rgba( 0, 0, 0, 0.5)',borderRadius:'20px'}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        ))}
      </section>
      <br/>
      </div>
    </>
  );
};
export default Dview;
