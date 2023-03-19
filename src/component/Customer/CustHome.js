import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../Images/home1.jpg';
import img2 from '../Images/home2.jpg';
import img3 from '../Images/home3.jpg';
import logo1 from '../Logo/our-mission-icon.png';
import logo2 from '../Logo/make-donation-icon.png';
import logo3 from '../Logo/help-icon.png';
import logo4 from '../Logo/programs-icon.png'

const CustHome = ()=>{
    
    return(
    <>
		<div id="mainHome" style={{margintop:'60px'}}>
		<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
			<h1 class="carousel-title bounceInDown animated slow">Because they need your help</h1>
            <h4 class="carousel-subtitle bounceInUp animated slow ">Do not let them down</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Together we can save thier lives</h1>
          <h4>So lets do it!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Your kindness and generosity can transform lives. </h1>
          <h3>Donate now.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		</div>
        
		<div class="section-home about-us fadeIn animated">

<div class="container">
	<div class="row">

		<div class="col-md-3 col-sm-6">
			<div class="about-us-col"  style={{boxShadow:'inset 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
				<div class="col-icon-wrapper">
				  <img src={logo1} alt=""/>
				</div>
				<h3 class="col-title">our mission</h3>
				<div class="col-details">
				  <p>To know more details about fundpeti.com,
					click more</p> 
				</div>
				<a href="#" class="btn btn-primary"> Read more </a>
			</div>
		</div>

		<div class="col-md-3 col-sm-6" >
			<div class="about-us-col" style={{boxShadow:'inset 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
				<div class="col-icon-wrapper">
				  <img src={logo2} alt=""/>
				</div>
				<h3 class="col-title">Make donations</h3>
				<div class="col-details">
				  <p>Alone we can do so little ;together we can do so much So lets donate together</p>
				</div>
				<a href="#" class="btn btn-primary"> Read more </a>
			</div> 
		</div>


		<div class="col-md-3 col-sm-6">
			<div class="about-us-col"  style={{boxShadow:' inset 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
				<div class="col-icon-wrapper">
					<img src={logo3} alt=""/>
				</div>
				<h3 class="col-title">Help & support</h3>
				<div class="col-details">
					<p>For queries related to donations,
						Please contact us to discuss your needs</p>  
				</div>
				<a href="#" class="btn btn-primary"> Read more </a>
			</div>
		</div>


		<div class="col-md-3 col-sm-6"  >
			<div class="about-us-col" style={{boxShadow:' inset 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
				<div class="col-icon-wrapper">
					<img src={logo4} alt=""/>
				</div>
				<h3 class="col-title">our programs</h3>
				<div class="col-details">
				  <p>Donations</p>	  
				</div>
				<a href="#" class="btn btn-primary"> Read more </a>		
		  </div>		  
		</div>
			
	</div>
</div>

</div>

    </>
    );
}
export default CustHome;