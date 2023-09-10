import React from "react";
import Carrousel from "./Carrousel";
import CountDown from "../CountDown";
import F1Logo from "../F1Logo";

const CarrouselContainer = () => {
	return (
		<div className="featured_container">
			<Carrousel />
			<div className="event_name">
				{/* add some dope logo? */}
				<div className="wrapper">
					<F1Logo />{" "}
                    </div>
			</div>
			<CountDown></CountDown>
		</div>
        
	);
};
export default CarrouselContainer;
