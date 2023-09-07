import "../Style.css";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
	return (
		<>
			<footer className="bck_red">
				<Fade triggerOnce delay={500}>
					<div className="font_righteous footer_logo_venue"> The Event</div>
					<div className="footer_copyright">
						Your Events 20223 all rights reserved
					</div>
				</Fade>
			</footer>
		</>
	);
};
export default Footer;
