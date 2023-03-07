import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(
        <>
         <div id='Login'>
            <div className="card">
  <div className="containerr">
    <div className="contentt">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt" />
          <div className="topic">Address</div>
          <div className="text-one">Mapusa, Boshan building</div>
          <div className="text-two">floor-3,Mapusa-Goa</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt" />
          <div className="topic">Phone</div>
          <div className="text-one">+0832-2472981</div>
          <div className="text-two">+0832-2472421</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope" />
          <div className="topic">Email </div>
          <div className="text-one">Fund_peti29@gmail.com</div>
          <div className="text-two">ContactFund_Peti96@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>
          If you have any sort of queries related to account,terms and conditions or any sort of queries do contact us without hesitation on the provided email,or you can drop a message below
        </p>
        <form action="#">
          <div className="inputbox">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="inputbox">
            
            <input type="text" placeholder="Enter your email" />
          </div>

         <textarea id="msgtext" class="textmsg"rows={4}  cols={50} placeholder="enter your message here"/>



          <div className="inputbox message-box"></div>
          <div className="button">
            <input type="button" defaultValue="Send Now" />
          </div>
          
        </form>
      </div>
    </div>
  </div>
  </div>
</div>
        </>
    );
}
export default Contact;