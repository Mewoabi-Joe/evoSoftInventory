import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import React from "react";
import { Typography } from "@mui/material";
import { Fastfood, Home, ShopTwo, Store } from "@mui/icons-material";
import { routes } from "../routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const MiseEnPageApplication = ({ children }: { children: React.ReactNode }) => {
    const [open] = React.useState(true);
    const naviguer = useNavigate();
    const { t } = useTranslation();

    const drawerWidth = 250;

    const drawerItems = [
        {
            texte: t("drawerItems.home"),
            icon: <Home />,
            chemin: routes.accueil.chemin,
        },
        {
            texte: t("drawerItems.stores"),
            icon: <Store />,
            chemin: routes.magasins.chemin,
        },
        {
            texte: t("drawerItems.products"),
            icon: <Fastfood />,
            chemin: routes.produits.chemin,
        },
        {
            texte: t("drawerItems.inventory"),
            icon: <ShopTwo />,
            chemin: routes.inventaire.chemin,
        },
    ];

    const DrawerList = (
        <Box sx={{ width: drawerWidth, textAlign: "center" }} role="presentation">
            <Typography component={'h1'} variant="h6" m={5} height={"10%"} display={"flex"} alignItems={"center"}>
                {t("appTitle")}
            </Typography>
            <Button variant="contained" sx={{ mb: 2 }} onClick={() => naviguer(routes.creerInventaire.chemin)}>
                {t("createInventory")}
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
        <Box display={"flex"} borderRight={'2px solid black'}>
            <Box width={`${drawerWidth}px`}>
                <Drawer variant="permanent" open={open} >
                    {DrawerList}
                </Drawer>
            </Box>
            <Box p={3} display={"flex"} justifyContent={"center"}  flex={1}  height={"100vh"}>
                {children}
            </Box>
        </Box>
    );
};

export default MiseEnPageApplication;