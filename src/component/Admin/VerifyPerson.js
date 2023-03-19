import React from 'react'
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams,useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";

function VerifyPerson(){
  const navigate = useNavigate();
    const [dinput, setdinput] = useState([]);

    const [ver, setVer] = useState([]);

    const { register, formState: {errors},handleSubmit } = useForm();

    const { id } = useParams();

    const handleChange = (e) =>{
      const target = e.target;
      const name = target.name;
      if (name === 'verify') {
        setVer(e.target.value);
      }
    }
    const submitForm = async(e) =>{
      const fd = new FormData();
      fd.append('verify',ver);

      await axios.post(`http://localhost/finalYearProject/ver.php?id=${id}`,fd)
    .then((rss)=>{
      console.log(rss);
      if(rss.data.status =="valid")
      {
        alert("Data added successfully");
        navigate('/Login');
      }
      else if(rss.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else if(rss.data.status =="exist"){
        alert("Account already exist");
      }
      else
      {
        alert("There is some problem");
      }
    })
    }

    useEffect(() => {
        getUsers();
    }, []); 

    
    function getUsers() {
        axios.get(`http://localhost/FinalYearProject/VerifyPerson.php?id=${id}`).then(function(rese) {
            console.log(rese.data);
            setdinput(rese.data);
        });
    }
    return(
      
        <>
        <div id="Login" className='avp'>
            {dinput.map((inputs,key) =>(
                <div key={key} className='divTable'>
                  <div className="row justify-content-center">
                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                   
                    <div className='vPer'>
                      ID : 
                      <hr/>
                    </div>
                    
                    <div className='vPer'>
                      Name: 
                      <hr/>
                    </div>

                    <div className='vPer'>
                    Gender:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Date of Birth:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Relation : 
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Mobile number:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Email:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Aadhaar:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Address: 
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Occupation:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Bank: 
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Amount:
                    <hr/>
                    </div>

                    <div className='vPer'>
                    Money required duration:
                    <hr/>
                    </div>
                    
                   </div>

                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"  key={key}>
                    <div className='vPerson'>
                    {inputs.id}
                    </div>
                    <div className='vPerson'>
                    {inputs.name}
                    </div>

                    <div className='vPerson'>
                    {inputs.gender}
                    </div>

                    <div className='vPerson'>
                    {inputs.dob}
                    </div>

                    <div className='vPerson'>
                    {inputs.relation}
                    </div>

                    <div className='vPerson'>
                    {inputs.mno}
                    </div>

                    <div className='vPerson'>
                    {inputs.email}
                    </div>

                    <div className='vPerson'>
                    {inputs.aadhaar}
                    </div>

                    <div className='vPerson'>
                    {inputs.address}
                    </div>

                    <div className='vPerson'>
                     {inputs.occupation}
                    </div>

                    <div className='vPerson'>
                     {inputs.bank}
                    </div>

                    <div className='vPerson'>
                     {inputs.amount}
                    </div>

                    <div className='vPerson'>
                     {inputs.stage}
                    </div>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit( e => submitForm(e))}>
                      <select id="verify" name='verify' style={{width:'100%',height:'60px'}} {...register("verify", {required: true})} onChange={e =>handleChange(e)}>
                        <option value="verified">Verified</option>
                        <option value="not-verified">Not-Verified</option>
                      </select>  
                      <p style={{color:'red',fontSize:'13px'}}>{errors.verify?.type === "required" && "*Select above option "}</p>
                        <button type="submit" href="/">Submit</button>
                    </form>
                  </div>
                </div>
                    Medical Records:
                    <iframe src={`http://localhost/FinalYearProject/verification/`+inputs.mrecord} width="100%" height="600px" /> <br/>
                    Background Story:
                    <iframe src={`http://localhost/FinalYearProject/verification/`+inputs.bstory} width="100%" height="600px" /> <br/>
              </div>
              
        ))}
       
        <br/>
        </div>
        </>
    )
}
export default VerifyPerson;