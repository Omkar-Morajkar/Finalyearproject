import React from 'react'
import {
	CarouselControl,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap';

const CustHome = ()=>{
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
			0 : activeIndex + 1;
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
        <div className='carousel' style={{display: 'block', width: 1500, padding: 30}}>
			<Carousel previous={previousButton} next={nextButton}
				activeIndex={activeIndex}>
				<CarouselIndicators items={items}
					activeIndex={activeIndex}
					onClickHandler={(newIndex) => {
						if (animating) return;
						setActiveIndex(newIndex);
					}} />
				{carouselItemData}
				<CarouselControl directionText="Prev"
					direction="prev" onClickHandler={previousButton} />
				<CarouselControl directionText="Next"
					direction="next" onClickHandler={nextButton} />
			</Carousel>
		</div >
    </>
    );
}
export default CustHome;