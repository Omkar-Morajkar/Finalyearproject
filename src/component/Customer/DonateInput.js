import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function DonateInput(){
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    pname:"",
    title:"",
    pImage:"",
    discrip:""
  })
  const{pname,title,pImage,discrip}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{
    e.preventDefault();
    console.log(users);

    await axios.post("http://localhost/FinalYearProject/dInput.php",users)
    .then((rspo)=>{
      console.log(rspo);
      if(rspo.data.status =="valid")
      {
        alert("Login successful");
        navigate('/Donate');
      }
      else if(rspo.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else
      {
        alert("There is some problem"+rspo.data.status);
      }
    })
  }
    return(
        <>
         <div id='Login'>
          <title>Volunteer Sign up form</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select, textarea, label, p { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1 {\n      position: absolute;\n      margin: 0;\n      font-size: 40px;\n      color: #fff;\n      z-index: 2;\n      line-height: 83px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px  #669999; \n      }\n      .banner {\n      position: relative;\n      height: 300px;  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: \"\";\n      background-color: rgba(0, 0, 0, 0.3); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type=\"date\"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #669999;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #669999;\n      color: #669999;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type=\"date\"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      .item i, input[type=\"date\"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      font-size: 20px;\n      color:  #a3c2c2;\n      }\n      .item i {\n      right: 1%;\n      top: 30px;\n      z-index: 1;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #669999;\n      }\n      label.radio:after {\n      content: \"\";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #669999;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #669999;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #a3c2c2;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    " }} />
          <div className="testbox" style={{marginLeft:'200px',marginRight:'200px',marginTop:"50px",marginBottom:"50px"}}>
            <form onSubmit={e => submitForm(e)}>
              <div className="colums">
                <div className="item">
                  <label htmlFor="name">Name<span>*</span></label>
                  <input id="name" type="text" name="pname" required placeholder='Enter name of the patient' value={pname} onChange={e =>handleChange(e)}/>  
                </div>
                <div className="item">
                  <label htmlFor="eaddress">Title<span>*</span></label>
                  <input id="title" type="text" name="title" required placeholder='Enter Title' value={title} onChange={e =>handleChange(e)}/>
                </div>
                <div className="item">
                  <label >Image<span>*</span></label>
                  <input type="file" id="image" name="pImage" placeholder='Select patient photo' value={pImage} onChange={e =>handleChange(e)}/>
                </div>
              </div>
              <div className="week">
              </div>
              <div className="item">
                <label htmlFor="visit">Enter discription</label>
                <textarea id="visit" rows={3} name="discrip" style={{boxshadow:'2px 2px 5px rgba(0, 0, 0, 0.5)'}} value={discrip} onChange={e =>handleChange(e)}/>
                
              </div>
             
              <div className="btn-block">
                <button type="submit" name="submit" value="add user"  href="/">Submit</button>
              </div>
            </form>
          </div>
        </div>

        </>
    );
}
export default DonateInput;
