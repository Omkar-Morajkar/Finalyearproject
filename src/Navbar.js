import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';
function Navbar() {


	// State for Active index
	const [activeIndex, setActiveIndex] = React.useState(0);

	// State for Animation
	const [animating, setAnimating] = React.useState(false);

	// Sample items for Carousel
	const items = [
		{
			caption: 'Sample Caption One',src:
      'https://img.favpng.com/4/12/5/mountain-desktop-wallpaper-4k-resolution-png-favpng-6ptkc4nPsWqUmYtTxEr1d5QSB.jpg',
			altText: 'Slide One'
		},
		{
			caption: 'Sample Caption Two',src:
      'https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=600',
			altText: 'Slide Two'
		}
	];

	// Items array length
	const itemLength = items.length - 1

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ?
			itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ?
			0 : activeIndex + 1;+
		setActiveIndex(nextIndex);
	}

	// Carousel Item Data
	const carouselItemData = items.map((item) => {
		return (
			<CarouselItem
				key={item.src}
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}
			>
				<img src={item.src} alt={item.altText} />
			</CarouselItem>
		);
	});

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
            <ul className="nav ">
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
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

