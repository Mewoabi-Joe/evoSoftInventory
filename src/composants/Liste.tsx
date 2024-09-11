import { List } from "@mui/material";
import ElementListe from "./ElementListe";
import { Produit } from "../types/produit";
import { Magasin } from "../types/magasin";
import { NomDePage } from "../types/nomDePage";
import {useNavigate} from 'react-router-dom'
import { routes } from "../routes";

const Liste = ({ listeDeDonnées, page }: { listeDeDonnées: Produit[] | Magasin[]; page: NomDePage }) => {

	const naviguer = useNavigate()

	const afficherLesÉlémentsDeListe = () => {
		switch (page) {
			case "Magasins":
				const listeMagasins = listeDeDonnées as Magasin[];
				return listeMagasins.map(({ id, adresse, nom }) => (
					<ElementListe key={id} textePrimaire={nom} texteSecondaire={adresse} texteDeFin={id} />
				));
            case 'Produits': 
                const listeProduits = listeDeDonnées as Produit[];
				return listeProduits.map(({ id, prix, nom }) => (
					<ElementListe onClick={() => naviguer(routes.inventaire.chemin, {state: {produitId: id}})} key={id} textePrimaire={nom} texteSecondaire={prix} texteDeFin={id} />
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
