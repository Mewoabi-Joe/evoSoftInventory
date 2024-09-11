import { Box } from "@mui/material";
import EnTetePage from "../composants/EnTetePage";
import CarteAccueil from "../composants/CarteAccueil";
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage";
import { magasins } from "../donnees/magasins";
import { produits } from "../donnees/produits";
import { routes } from "../routes";
import { useTranslation } from "react-i18next";
import ExportCSV from "../composants/ExporterCSV";

const Accueil = () => {
	const { t } = useTranslation();

	const inventoryData = [
		{ id: "1", name: "Product A", price: 10.0 },
		{ id: "2", name: "Product B", price: 15.5 },
	];

	return (
		<MiseEnPagePage titreDeLaPage={t("homePage.pageTitle")}>
			<Box display={"flex"} justifyContent={"center"} gap={4}>
				<CarteAccueil
					titre={t("homePage.cardTitles.stores")}
					nombre={magasins.length}
					chemin={routes.magasins.chemin}
				/>
				<CarteAccueil
					titre={t("homePage.cardTitles.products")}
					nombre={produits.length}
					chemin={routes.produits.chemin}
				/>
			</Box>
		</MiseEnPagePage>
	);
};

export default Accueil;
