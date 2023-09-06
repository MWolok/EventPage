import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import "../Style.css";
import SideDrawer from "./SideDrawer";
import { useState } from "react";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = (value) => {
		setOpenMenu(value);
		console.log(openMenu);
	};

	return (
		<>
			<AppBar
				position="fixed"
				style={{ backgroundColor: "#2f2f2f", padding: "10px 0px" }}>
				<Toolbar>
					<div className="header_logo">
						<div className="font_righteous header_logo_venue">Event</div>
						<div className="header_logo_title">Some Event</div>
					</div>
					<IconButton
						arial-label="Menu"
						color="inherit"
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
