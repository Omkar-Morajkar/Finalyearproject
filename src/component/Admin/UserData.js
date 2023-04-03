import React from 'react'
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import {useForm} from "react-hook-form";

function UserData(){
    
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

      await axios.post(`http://localhost/FinalYearProject/Status.php?id=${id}`,fd)
    .then((stat)=>{
      console.log(stat);
      if(stat.data.status == "valid")
      {
        alert("Data updated successfully");
        navigate('/Login');
      }
      else if(stat.data.status == "invalid")
      {
        alert("Failed to update");
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
        axios.get(`http://localhost/FinalYearProject/dInputUserData.php?id=${id}`).then(function(rese) {
            console.log(rese.data);
            setdinput(rese.data);
        });
    }
    return(
      
        <>
        <div id="Login" className='avp' style={{marginLeft:"225px"}}>
            {dinput.map((inputs,key) =>(
                <div key={key} className='divTable' style={{boxShadow:'inset 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
                  <div className="row justify-content-center">
                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                   
                    <div className='vPer'>
                     Name:
                      <hr/>
                    </div>
                    
                    <div className='vPer'>
                      Title: 
                      <hr/>
                    </div>

                    <div className='vPer'>
                    Description :
                    <hr/>
                    </div> 

                    <div className='vPer'>
                    Amount:
                    <hr/>
                    </div>
                    
                   </div>

                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"  key={key}>
                    {/* <div className='vPerson'> */}
                    <input type='text' value={inputs.name}/>
                    {/* </div> */}

                    {/* <div className='vPerson'> */}
                    <input type='text' value={inputs.title}/>
                    {/* </div> */}

                    {/* <div className='vPerson'> */}
                    <input type='text' value={inputs.discription}/>
                    {/* </div> */}

                    {/* <div className='vPerson'> */}
                    <input type='number' value={inputs.amount}/>
                    {/* </div> */}

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit( e => submitForm(e))}>
                      <select id="verify" name='verify' style={{width:'100%',height:'60px'}} {...register("verify", {required: true})} onChange={e =>handleChange(e)}>
                        <option value="" selected disabled>Select status</option>
                        <option value="verified">Verified</option>
                        <option value="not-verified">Not-Verified</option>
                      </select>  
                      <p style={{color:'red',fontSize:'13px'}}>{errors.verify?.type === "required" && "*Select above option "}</p>
                        <button type="submit" href="/">Submit</button>
                    </form>
                  </div>
                </div>
              
                <label>Patient photo</label><br/><br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src={`http://localhost/FinalYearProject/uploads/`+inputs.image}alt="images"className="card-media" style={{width:"500px",height:'300px',boxShadow:' 0px 10px 10px rgba( 0, 0, 0, 0.5)',borderRadius:'20px'}}/>
                </div>
              </div>
        ))}
       
        <br/>
        </div>
        </>
    )
}
export default UserData;