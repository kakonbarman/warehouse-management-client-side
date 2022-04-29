import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../Images/slide-1.jpg";
import slide2 from "../../../Images/slide-2.jpg";
import slide3 from "../../../Images/slide-3.jpg";
import slide4 from "../../../Images/slide-4.jpg";

const Slider = () => {
	return (
		<section>
			<Carousel>
				<div>
					<img src={slide1} alt="" />
					<p className="legend">
						<span className="text-3xl">Frish Food Collection</span>
					</p>
				</div>
				<div>
					<img src={slide2} alt="" />
					<p className="legend">
						<span className="text-3xl">Stoke Available Fruits</span>
					</p>
				</div>
				<div>
					<img src={slide3} alt="" />
					<p className="legend">
						<span className="text-3xl">Chep Price For Any Fruits</span>
					</p>
				</div>
				<div>
					<img src={slide4} alt="" />
					<p className="legend">
						<span className="text-3xl">Good fruit at low prices</span>
					</p>
				</div>
			</Carousel>
		</section>
	);
};

export default Slider;