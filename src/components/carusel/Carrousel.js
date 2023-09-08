import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import one from "../../img/one.png";
import two from "../../img/two.jpg";
import three from "../../img/three.jpg";

const Carrousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
	};

	// window.innerHeight <- div przyjmie wysokosc ekrany

	return (
		<div className="featured_container">
			<div
				className="carrousel_wrapper"
				style={{ height: `${window.innerHeight}px` }}>
				<Slider {...settings}>
					<div>
						<div
							className="carrousel_image"
							style={{
								backgroundImage: `url(${one})`,
								height: `${window.innerHeight}px`,
							}}></div>
					</div>
					<div>
						<div
							className="carrousel_image"
							style={{
								backgroundImage: `url(${two})`,
								height: `${window.innerHeight}px`,
							}}></div>
					</div>
					<div>
						<div
							className="carrousel_image"
							style={{
								backgroundImage: `url(${three})`,
								height: `${window.innerHeight}px`,
							}}></div>
					</div>
				</Slider>
			</div>
		</div>
	);
};
export default Carrousel;
