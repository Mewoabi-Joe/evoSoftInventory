import { List } from "@mui/material";
import ElementListe from "./ElementListe";
import { Produit } from "../types/produit";
import { Magasin } from "../types/magasin";
import { NomDePage } from "../types/nomDePage";

const Liste = ({ listeDeDonnées, page }: { listeDeDonnées: Produit[] | Magasin[]; page: NomDePage }) => {
	const afficherLesÉlémentsDeListe = () => {
		switch (page) {
			case "Magasins":
				const listeMagasins = listeDeDonnées as Magasin[];
				return listeMagasins.map(({ id, adresse, nom }) => (
					<ElementListe key={id} textePrimaire={nom} texteSecondaire={adresse} />
				));
            case 'Produits': 
                const listeProduits = listeDeDonnées as Produit[];
				return listeProduits.map(({ id, prix, nom }) => (
					<ElementListe key={id} textePrimaire={nom} texteSecondaire={prix} />
				));
		}
	};

	return (
		<List sx={{ px: 2, width: "90%", maxWidth: "700px", maxHeight: "75vh", overflowY: "scroll", "& > *": { mb: 1 } }}>
			{afficherLesÉlémentsDeListe()}
		</List>
	);
};

export default Liste;
