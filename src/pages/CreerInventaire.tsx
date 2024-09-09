import {
	Box,
	Button,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage";
import { routes } from "../routes";
import { magasins } from "../donnees/magasins";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { produits } from "../donnees/produits";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useLocalStorageState, Codec } from "@toolpad/core";
import { useNotifications } from "@toolpad/core";
import { Inventaire } from "../types/inventaire";
import { obtenirDateActuelle } from "../utils/obtenirDateActuelle";

interface DonnéesFormulaire {
	magasinId: undefined | string;
	produitId: undefined | string;
	date: string;
	stock: undefined | number;
}

const INVENTAIRES_CODEC: Codec<Inventaire[]> = {
	parse: (inventairesString) => JSON.parse(inventairesString),
	stringify: (inventaires) => JSON.stringify(inventaires),
};

const CreerInventaire = () => {
	const nomDePage = routes.creerInventaire.nomDePage;
	const longueurSaisieFormulaire = { width: "100%", maxWidth: 300 };

	const notifications = useNotifications();

	// L'inventaire dans localStorage, ce hook me permet d'interagir avec le stockage local de mon navigateur
	const [inventaires, setInventaires] = useLocalStorageState<Inventaire[]>(
		"inventaires",
		localStorage.getItem("inventaires") ? JSON.parse(localStorage.getItem("inventaire")!) : [],
		{
			codec: INVENTAIRES_CODEC,
		}
	);

	const [chargement, setChargement] = useState(false);

	const [donnéesFormulaire, setDonnéesFormulaire] = useState<DonnéesFormulaire>({
		magasinId: undefined,
		produitId: undefined,
		date: obtenirDateActuelle().toDateString(),
		stock: undefined,
	});

	useEffect(() => {
		console.log("donnéesFormulaire", donnéesFormulaire);
	}, [donnéesFormulaire]);

	const gérerChangementSélecteurDeDate = (nouvelleDate: Dayjs | null) => {
		if (nouvelleDate) {
			// Heure par défaut à 00h00 chaque jour
			let nouvelleJSDate = nouvelleDate.toDate();
			nouvelleJSDate.setHours(0, 0, 0, 0);

			setDonnéesFormulaire({
				...donnéesFormulaire,
				date: nouvelleJSDate.toISOString(),
			});
		}
	};

	const gérerAutresChangementsDeSaisie = (
		e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setDonnéesFormulaire({
			...donnéesFormulaire,
			[e.target.name]: e.target.value,
		});
	};

	const gererSoumission = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setChargement(true);

		let produitDInventaireExistantAvecEntréeDeStockMagasin = inventaires?.find(
			({ produitId, date, stock }) =>
				produitId === donnéesFormulaire.produitId &&
				date === donnéesFormulaire.date &&
				Object.keys(stock).includes(donnéesFormulaire.magasinId!)
		);

		// Si l'inventaire (avec productId, date et storeId) existe déjà dans localStorage, supprimez-le et ajoutez-le à nouveau avec l'objet d'enregistrement ayant le stock mis à jour
		if (produitDInventaireExistantAvecEntréeDeStockMagasin) {
			let inventoryWithItRemoved = inventaires?.filter(
				({ date, produitId }) => !(date === donnéesFormulaire.date && produitId === donnéesFormulaire.produitId)
			);

			// Mettre à jour sa valeur de stock pour refléter le nouveau stock
			produitDInventaireExistantAvecEntréeDeStockMagasin.stock[donnéesFormulaire.magasinId!] = donnéesFormulaire.stock!;

			// Le rajouter
			inventoryWithItRemoved?.push(produitDInventaireExistantAvecEntréeDeStockMagasin);

			// Enregistrer tous les inventaires dans le localStorage
			setInventaires(inventoryWithItRemoved!);

			// Sinon, si l'inventaire (avec productId, date, mais sans storeId) ajoute le stock au record dans l'objet stock
		} else {
			let produitDInventaireExistantSansEntréeDeStockMagasin = inventaires?.find(
				({ produitId, date, stock }) =>
					produitId === donnéesFormulaire.produitId &&
					date === donnéesFormulaire.date &&
					!Object.keys(stock).includes(donnéesFormulaire.magasinId!)
			);

			if (produitDInventaireExistantSansEntréeDeStockMagasin) {
				let inventoryWithItRemoved = inventaires?.filter(
					({ date, produitId }) => !(date === donnéesFormulaire.date && produitId === donnéesFormulaire.produitId)
				);

				// Ajouter au record de stock
				produitDInventaireExistantSansEntréeDeStockMagasin.stock[donnéesFormulaire.magasinId!] =
					donnéesFormulaire.stock!;

				// Ajouter l'inventaire mis à jour
				inventoryWithItRemoved?.push(produitDInventaireExistantSansEntréeDeStockMagasin);

				// Enregistrer tous les inventaires dans le localStorage
				setInventaires(inventoryWithItRemoved!);

				// Sinon, ajoutez simplement ce nouvel objet d'inventaire directement au tableau des inventaires dans le localStorage
			} else {
				setInventaires([
					...(inventaires ?? []),
					{
						date: donnéesFormulaire.date,
						produitId: donnéesFormulaire.produitId!,
						stock: { [donnéesFormulaire.magasinId!]: donnéesFormulaire.stock! },
					},
				]);
			}
		}

		setChargement(false);

		notifications.show("Inventory has been updated", {
			severity: "success",
			autoHideDuration: 4000,
		});
	};

	return (
		<MiseEnPagePage titreDeLaPage={nomDePage}>
			<Stack component={"form"} mt={8} alignItems={"center"} spacing={3} width={"100%"} onSubmit={gererSoumission}>
				{/* <Typography>Magasin</Typography> */}
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label="Date"
						sx={longueurSaisieFormulaire}
						value={dayjs(donnéesFormulaire.date)}
						onChange={gérerChangementSélecteurDeDate}
					/>
				</LocalizationProvider>
				<FormControl sx={longueurSaisieFormulaire}>
					<InputLabel id="produit">Produits</InputLabel>
					<Select
						labelId="produit"
						name="produitId"
						value={donnéesFormulaire.produitId}
						label="Produits"
						required
						onChange={gérerAutresChangementsDeSaisie}
					>
						{produits.map(({ id, nom }) => (
							<MenuItem key={id} value={id}>
								{nom}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl sx={longueurSaisieFormulaire}>
					<InputLabel id="magasin">Magasins</InputLabel>
					<Select
						labelId="magasin"
						name="magasinId"
						value={donnéesFormulaire.magasinId}
						label="Magasins"
						required
						onChange={gérerAutresChangementsDeSaisie}
					>
						{magasins.map(({ id, nom }) => (
							<MenuItem key={id} value={id}>
								{nom}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<TextField
					required
					type="number"
					value={donnéesFormulaire.stock}
					sx={longueurSaisieFormulaire}
					onChange={gérerAutresChangementsDeSaisie}
					name="stock"
					id="outlined-basic"
					label="Quantité en stock"
				/>
				<Button type="submit" sx={longueurSaisieFormulaire} variant="contained">
					{chargement ? <CircularProgress sx={{ color: "white" }} /> : <>Ajouter l'inventaire</>}
				</Button>
			</Stack>
		</MiseEnPagePage>
	);
};

export default CreerInventaire;
