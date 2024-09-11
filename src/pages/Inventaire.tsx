import { Box } from "@mui/material";
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage";
import { routes } from "../routes";
import FiltresDInventaire from "../composants/FiltresDInventaire";
import { LineChart } from "@mui/x-charts";
import { useLocalStorageState } from "@toolpad/core";
import { INVENTAIRES_CODEC } from "../utils/codecLocalStorageInventaire";
import { Inventaire as InventoryI } from "../types/inventaire";
import { useEffect, useState } from "react";
import { InventaireSimple } from "../types/InventaireSimple";
import { magasins } from "../donnees/magasins";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { produits } from "../donnees/produits";

const Inventaire = () => {
	const location = useLocation();
	const nomDePage = routes.inventaire.nomDePage;
	const [produitEnFocus, setProduitEnFocus] = useState<string>(location.state?.produitId ?? produits[0].id);
	const [stockEtDatesPourLeProduitDeFocusDansUnMagasin, setStockEtDatesPourLeProduitDeFocusDansUnMagasin] = useState<
		Record<string, InventaireSimple[]>
	>({});

	const [inventaires, setInventaires] = useLocalStorageState<InventoryI[]>(
		"inventaires",
		localStorage.getItem("inventaires") ? JSON.parse(localStorage.getItem("inventaire")!) : [],
		{
			codec: INVENTAIRES_CODEC,
		}
	);
	const [datesOriginal, setDatesOriginal] = useState<Date[]>([]);
	const [lesDates, setLesDates] = useState<Date[]>([]);

	useEffect(() => {
		const tableauxDeDatesEnOrdre = Array.from(new Set(inventaires?.map(({ date }) => date)))
			.map((date) => new Date(date))
			.sort((a, b) => a.getTime() - b.getTime());

		// Entre la première et la dernière date, il peut y avoir des dates manquantes, ajoutez-les au tableau
		const premiereDate = tableauxDeDatesEnOrdre[0];
		const derniereDate = tableauxDeDatesEnOrdre[tableauxDeDatesEnOrdre.length - 1];
		const toutesLesDates = [];
		let dateActuelle = premiereDate;
		while (dateActuelle <= derniereDate) {
			toutesLesDates.push(dateActuelle);
			dateActuelle = new Date(dateActuelle);
			dateActuelle.setDate(dateActuelle.getDate() + 1);
		}

		const toutesLesDatesEntrePremiereEtDerniereDate = toutesLesDates;

		setLesDates(toutesLesDatesEntrePremiereEtDerniereDate);
		setDatesOriginal(toutesLesDatesEntrePremiereEtDerniereDate);
	}, [inventaires]);

	useEffect(() => {
		const inventaireDuProduitDeFocus = inventaires?.filter(({ produitId }) => produitId === produitEnFocus);

		let stockEtDatesPourLeProduitDeFocusDansUnMagasinTemporaire: Record<string, InventaireSimple[]> = {};

		magasins.forEach(({ id: magasinId }) => {
			stockEtDatesPourLeProduitDeFocusDansUnMagasinTemporaire[magasinId] = [];
			lesDates?.forEach((date) => {
				stockEtDatesPourLeProduitDeFocusDansUnMagasinTemporaire[magasinId].push({
					produitId: produitEnFocus,
					magasinId,
					date,
					stock: inventaireDuProduitDeFocus?.find(
						({ date: otherDate, produitId, stock }) =>
							date.toISOString() === otherDate && Object.keys(stock).includes(magasinId)
					)?.stock[magasinId],
				});
			});
		});
	
		setStockEtDatesPourLeProduitDeFocusDansUnMagasin(stockEtDatesPourLeProduitDeFocusDansUnMagasinTemporaire);
	}, [lesDates]);

	

	return (
		<MiseEnPagePage titreDeLaPage={nomDePage}>
			<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
				<FiltresDInventaire
					produitEnFocus={produitEnFocus}
					setProduitEnFocus={setProduitEnFocus}
					lesDates={lesDates}
					datesOriginal={datesOriginal}
					setLesDates={setLesDates}
				/>
				{Object.keys(stockEtDatesPourLeProduitDeFocusDansUnMagasin).length &&
					lesDates.length === Object.values(stockEtDatesPourLeProduitDeFocusDansUnMagasin)[0].length && (
						<LineChart
							xAxis={[
								{
									data: lesDates,
									label: "jour",
									scaleType: "time",
									valueFormatter: (value) => dayjs(value).format("DD-MM-YYYY"),
									min: lesDates[0],
									max: lesDates[lesDates.length - 1],
								},
							]}
							series={magasins.map(({ id }) => ({
								data: stockEtDatesPourLeProduitDeFocusDansUnMagasin[id].map(({ stock }) => {
									if (stock) {
										return stock;
									} else if (stock === 0) {
										return 0;
									} else {
										return null;
									}
								}),
								label: `Stock produit ${produitEnFocus} dans magasin ${id}`,
								valueFormatter: (value) => (value == null ? "null" : value.toString()),
							}))}
							width={700}
							height={450}
						/>
					)}
			</Box>
		</MiseEnPagePage>
	);
};

export default Inventaire;
