import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import "../Style.css";
import SideDrawer from "./SideDrawer";
import { useEffect, useState } from "react";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [headerShow, setHeaderShow] = useState(false);

	const toggleMenu = (value) => {
		setOpenMenu(value);
		console.log(openMenu);
	};

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHeaderShow(true);
		} else {
			setHeaderShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);
	return (
		<>
			<AppBar
				position="fixed"
				style={{
					backgroundColor: headerShow ? "#2f2f2f" : "transparent",
					padding: "10px 0px",
					boxShadow: "none",
				}}>
				<Toolbar>
					<div className="header_logo">
						<div className="font_righteous header_logo_venue">Event</div>
						<div className="header_logo_title">Some Event</div>
					</div>
					<IconButton
						arial-label="Menu"
						color="inherit"
                        style={{fontSize:'30px'}}
						onClick={() => toggleMenu(true)}>
						<MenuIcon></MenuIcon>
					</IconButton>
					<SideDrawer
						open={openMenu}
						onClose={(value) => toggleMenu(value)}></SideDrawer>
				</Toolbar>
			</AppBar>
		</>
	);
};
export default Header;
