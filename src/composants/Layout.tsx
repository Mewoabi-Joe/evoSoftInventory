import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import React from "react";
import { Typography } from "@mui/material";
import { Fastfood, Home, Store } from "@mui/icons-material";
import { routes } from "../routes";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [open] = React.useState(true);
	const naviguer = useNavigate();

	const drawerWidth = 250;

	const drawerItems = [
		{
			texte: "Accueil",
			icon: <Home />,
			chemin: routes.accueil.chemin,
		},
		{
			texte: "Magasins",
			icon: <Store />,
			chemin: routes.magasins.chemin,
		},
		{
			texte: "Produits",
			icon: <Fastfood />,
			chemin: routes.produits.chemin,
		},
	];

	const DrawerList = (
		<Box sx={{ width: drawerWidth, textAlign: "center" }} role="presentation">
			<Typography variant="h6" m={5} height={"10%"} display={"flex"} alignItems={"center"}>
				Evo Soft Inventory
			</Typography>
			<Button variant="contained" sx={{ mb: 2 }} onClick={() => naviguer(routes.creerInventaire.chemin)}>
				Créer un inventaire
			</Button>
			<List>
				{drawerItems.map(({ texte, icon, chemin }) => (
					<ListItem onClick={() => naviguer(chemin)} key={texte}>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={texte} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box display={"flex"}>
			<Box width={`${drawerWidth}px`}>
				<Drawer open={open} hideBackdrop>
					{DrawerList}
				</Drawer>
			</Box>
			<Box p={3} display={"flex"} justifyContent={"center"} component={"main"} flex={1} height={"100vh"}>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
