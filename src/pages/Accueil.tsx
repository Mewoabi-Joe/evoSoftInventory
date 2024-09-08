import { Box } from "@mui/material";
import EnTetePage from "../composants/EnTetePage";
import CarteAccueil from "../composants/CarteAccueil";
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage";
import { magasins } from "../donnees/magasins";
import { produits } from "../donnees/produits";
import { routes } from "../routes";

const Accueil = () => {
	return (
		<MiseEnPagePage titreDeLaPage="Accueil">
			<Box display={'flex'} justifyContent={'center'} gap={4}>
				<CarteAccueil titre="Magasins" nombre={magasins.length} chemin={routes.magasins.chemin} />
				<CarteAccueil titre="Produits" nombre={produits.length} chemin={routes.produits.chemin}/>
			</Box>
		</MiseEnPagePage>
	);
};

export default Accueil;
