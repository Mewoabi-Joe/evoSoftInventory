import { Box } from "@mui/material";
import { useState } from "react";
import ChampDeRechercheEtFiltre from "../composants/ChampDeRechercheEtFiltre";
import Liste from "../composants/Liste";
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage";
import { routes } from "../routes";
import { produits } from "../donnees/produits";

const Produits = () => {
  const [produitsAffichés, setProduitsAffichés] = useState(produits)
	const nomDePage = routes.produits.nomDePage

	return (
		<MiseEnPagePage titreDeLaPage={nomDePage}>
			<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
				<ChampDeRechercheEtFiltre page={nomDePage}  setlisteDeDonnées={setProduitsAffichés} afficherFiltre={true} />
				<Liste page={nomDePage} listeDeDonnées={produitsAffichés} />
			</Box>
		</MiseEnPagePage>
	);
}

export default Produits