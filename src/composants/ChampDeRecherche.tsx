import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Magasin } from "../types/magasin";
import { NomDePage } from "../types/nomDePage";
import { Produit } from "../types/produit";
import { magasins } from "../donnees/magasins";
import { produits } from "../donnees/produits";

const ChampDeRecherche = ({
	page,
	setlisteDeDonnées,
}: {
	page: NomDePage;
	setlisteDeDonnées: Dispatch<SetStateAction<Magasin[]>> | Dispatch<SetStateAction<Produit[]>>;
}) => {
	const handleSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const texteDeRecherche = e.target.value;

		console.log({ texteDeRecherche });

		if (texteDeRecherche.length > 3) {
			switch (page) {
				case "Magasins":
					const listeFiltréeDesMagasins = magasins.filter(
						({ adresse, nom }) => nom.includes(texteDeRecherche) || adresse.includes(texteDeRecherche)
					);

					(setlisteDeDonnées as Dispatch<SetStateAction<Magasin[]>>)(listeFiltréeDesMagasins);
					break;
				case "Produits":
					const listeFiltréeDesProduits = produits.filter(({ prix, nom }) => nom.includes(texteDeRecherche));

					(setlisteDeDonnées as Dispatch<SetStateAction<Produit[]>>)(listeFiltréeDesProduits);
					break;
			}
		} else {
			if (page === "Magasins") {
				(setlisteDeDonnées as Dispatch<SetStateAction<Magasin[]>>)(magasins);
			} else {
				(setlisteDeDonnées as Dispatch<SetStateAction<Produit[]>>)(produits);
			}
		}
	};
	return (
		<TextField
			onChange={(e) => handleSearch(e)}
			size="small"
			sx={{ maxWidth: "250px" }}
			id="input-with-icon-textfield"
			placeholder="rechercher un magasin"
			slotProps={{
				input: {
					endAdornment: (
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					),
				},
			}}
			variant="outlined"
		/>
	);
};

export default ChampDeRecherche;
