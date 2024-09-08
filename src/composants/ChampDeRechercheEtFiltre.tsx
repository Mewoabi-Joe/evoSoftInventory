import { Box, Divider } from "@mui/material";
import ChampDeRecherche from "./ChampDeRecherche";
import Filtre from "./Filtre";
import { NomDePage } from "../types/nomDePage";
import { Magasin } from "../types/magasin";
import { Dispatch, SetStateAction } from "react";
import { Produit } from "../types/produit";

const ChampDeRechercheEtFiltre = ({page, setlisteDeDonnées}: {
	page: NomDePage;
	setlisteDeDonnées: Dispatch<SetStateAction<Magasin[]>> | Dispatch<SetStateAction<Produit[]>> ;
}) => {
	return (
		<Box position={"sticky"} top={"80px"}>
			<Box display={"flex"} alignItems={"center"} gap={2} mb={3}>
				<ChampDeRecherche page={page}  setlisteDeDonnées={setlisteDeDonnées} /> <Filtre page={page}  setlisteDeDonnées={setlisteDeDonnées}  />
			</Box>
			<Divider />
		</Box>
	);
};

export default ChampDeRechercheEtFiltre;
