import { Drawer, List, ListItem } from "@mui/material";
const links = [
	{ where: "featured", value: "To top" },
	{ where: "VenuInfo", value: "Venu" },
	{ where: "Highlights", value: "HIghlights" },
	{ where: "pricing", value: "Pricing" },
	{ where: "location", value: "Location" },
];
const SideDrawer = (props) => {
	const itemsRender = (item) => {
		return (
			<ListItem button onClick={() => {}} key={item.where}>
				{item.value}
			</ListItem>
		);
	};

	return (
		<>
			<Drawer
				anchor="right"
				open={props.open}
				onClose={() => props.onClose(false)}>
				<List component="nav">{links.map((item) => itemsRender(item))}</List>
			</Drawer>
		</>
	);
};
export default SideDrawer;
