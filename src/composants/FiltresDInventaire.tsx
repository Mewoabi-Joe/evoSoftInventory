import { Box, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { produits } from "../donnees/produits";
import { useNotifications } from "@toolpad/core";

interface EtatFiltreInventaire {
	produitId: string;
	dataInferieure: undefined | Date;
	dateSuperieure: undefined | Date;
}

const FiltresDInventaire = ({
	produitEnFocus,
	lesDates,
	datesOriginal,
	setLesDates,
	setProduitEnFocus,
}: {
	produitEnFocus: string;
	lesDates: Date[];
	setLesDates: Dispatch<SetStateAction<Date[]>>;
	datesOriginal: Date[];
	setProduitEnFocus: Dispatch<SetStateAction<string>>;
}) => {
	const notifications = useNotifications();
	const [etatFiltreDInventaire, setEtatFiltreDInventaire] = useState<EtatFiltreInventaire>({
		produitId: produitEnFocus,
		dataInferieure: lesDates[0],
		dateSuperieure: lesDates[lesDates.length - 1],
	});

	console.log("lesDates", lesDates);

	useEffect(() => {
		setEtatFiltreDInventaire({
			produitId: produitEnFocus,
			dataInferieure: lesDates[0],
			dateSuperieure: lesDates[lesDates.length - 1],
		});
	}, [lesDates]);

	// console.log("lesDates", lesDates);
	// console.log("etatFiltreDInventaire", etatFiltreDInventaire);

	const gérerChangementDateInferieure = (nouvelleDate: Dayjs | null) => {
		if (nouvelleDate) {
			if (
				nouvelleDate.toDate().getTime() >= datesOriginal[0].getTime() &&
				nouvelleDate.toDate().getTime() <= etatFiltreDInventaire.dateSuperieure!.getTime()
			) {
				// Heure par défaut à 00h00 chaque jour
				let nouvelleJSDate = nouvelleDate.toDate();
				nouvelleJSDate.setHours(12, 0, 0, 0);

				setEtatFiltreDInventaire({
					...etatFiltreDInventaire,
					dataInferieure: nouvelleJSDate,
				});

				//splice pour supprimer les dates qui sont inférieures à la date inférieure

				const lesDatesTemp = [...datesOriginal];

				const index = lesDatesTemp.findIndex((date) => date.toISOString() === nouvelleJSDate.toISOString());

				console.log("index", index);

				const splicedDates = lesDatesTemp.splice(index, lesDatesTemp.length);

				setLesDates(splicedDates);
			} else {
				notifications.show("La date inférieure doit être comprise entre la première et la date superieur", {
					severity: "error",
					autoHideDuration: 4000,
				});
			}
		}
	};

	const gérerChangementDateSuperieure = (nouvelleDate: Dayjs | null) => {
		if (nouvelleDate) {
			if (
				nouvelleDate.toDate().getTime() >= etatFiltreDInventaire.dataInferieure!.getTime() &&
				nouvelleDate.toDate().getTime() <= datesOriginal[datesOriginal.length - 1].getTime()
			) {
				// Heure par défaut à 00h00 chaque jour
				let nouvelleJSDate = nouvelleDate.toDate();
				nouvelleJSDate.setHours(12, 0, 0, 0);

				setEtatFiltreDInventaire({
					...etatFiltreDInventaire,
					dateSuperieure: nouvelleJSDate,
				});

				//splice pour supprimer les dates qui sont supérieures à la date supérieure

				const index = datesOriginal.findIndex((date) => date.toISOString() === nouvelleJSDate.toISOString());

				const lesDatesTemp = [...datesOriginal];

				const splicedDates = lesDatesTemp.splice(0, index + 1);

				setLesDates(splicedDates);
			} else {
				notifications.show("La date superieure doit être comprise entre la date inférieure et la dernière date", {
					severity: "error",
					autoHideDuration: 4000,
				});
			}
		}
	};

	const gérerChangementsDuSelect = (e: SelectChangeEvent<string>) => {
		setEtatFiltreDInventaire({
			...etatFiltreDInventaire,
			[e.target.name]: e.target.value,
		});

		setProduitEnFocus(e.target.value);
	};

	return (
		<Box>
			<Stack direction={"row"} alignItems={"center"} spacing={2}>
				<FormControl sx={{ maxWidth: 250, width: 250 }}>
					<InputLabel id="produit">Produits</InputLabel>
					<Select
						labelId="produit"
						name="produitId"
						value={etatFiltreDInventaire.produitId}
						label="Produits"
						required
						onChange={gérerChangementsDuSelect}
					>
						{produits.map(({ id, nom }) => (
							<MenuItem key={id} value={id}>
								{nom}
							</MenuItem>
						))}
					</Select>
				</FormControl>{" "}
				<Stack direction={"row"} alignItems={"center"}>
					<DatePicker
						label="Date inférieure"
						sx={{ width: 165 }}
						name="dataInferieure"
						value={dayjs(etatFiltreDInventaire.dataInferieure)}
						onChange={gérerChangementDateInferieure}
					/>
					<DatePicker
						label="Date supérieure"
						sx={{ width: 165 }}
						name="dateSuperieure"
						value={dayjs(etatFiltreDInventaire.dateSuperieure)}
						onChange={gérerChangementDateSuperieure}
					/>
				</Stack>
			</Stack>
			<Divider />
		</Box>
	);
};
export default FiltresDInventaire;
