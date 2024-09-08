import { Box } from "@mui/material";
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage";
import ChampDeRechercheEtFiltre from "../composants/ChampDeRechercheEtFiltre";
import Liste from "../composants/Liste";
import { useState } from "react";
import { routes } from "../routes";
import { magasins } from "../donnees/magasins";

const Magasins = () => {

	const [magasinsAffichés, setMagasinsAffichés] = useState(magasins)
	const nomDePage = routes.magasins.nomDePage

	return (
		<MiseEnPagePage titreDeLaPage={nomDePage}>
			<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
				<ChampDeRechercheEtFiltre page={nomDePage}  setlisteDeDonnées={setMagasinsAffichés} />
				<Liste page={nomDePage} listeDeDonnées={magasinsAffichés} />
			</Box>
		</MiseEnPagePage>
	);
};

export default Magasins;
