import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function VerifyPerson(){
    
    const [dinput, setdinput] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getUsers();
    }, []); 

    
    function getUsers() {
        axios.get(`http://localhost/FinalYearProject/verify.php/user/${id}/edit`).then(function(rese) {
            console.log(rese.data);
            setdinput(rese.data);
        });
    }
    return(
        <>
           <section className="main-card--cointainer">
            {dinput.map(inputs =>(
                  <div className="col-lg-12 col-xl-11" >
                    <div className="card text-black" style={{borderRadius: '25px', }}>
                      <div className="card-body p-md-5" >
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <div className="card-body">
                                  <span className="card-description subtle">
                                    {inputs.name}
                                    {inputs.gender}
                                    {inputs.dob}
                                    {inputs.relation}
                                    {inputs.mno}
                                    {inputs.email}
                                    {inputs.aadhaar}
                                    {inputs.address}
                                    {inputs.occupation}
                                    {inputs.bank}
                                    {inputs.amount}
                                    {inputs.stage}
                                    {inputs.mrecord}
                                    {inputs.bstory}

                                  </span>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        ))}
        <br/>
        </section>
        </>
    )
}
export default VerifyPerson;