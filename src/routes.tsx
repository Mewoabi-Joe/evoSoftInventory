import { ReactElement } from "react";
import Accueil from "./pages/Accueil";
import CreerInventaire from "./pages/CreerInventaire";
import Inventaire from "./pages/Inventaire";
import Magasins from "./pages/Magasins";
import Produits from "./pages/Produits";
import { NomDePage } from "./types/nomDePage";

export const routes: Record<string, { chemin: string; élément: ReactElement; nomDePage: NomDePage }> = {
	accueil: {
		chemin: "/",
		élément: <Accueil />,
		nomDePage: "Accueil",
	},
	magasins: {
		chemin: "/magasins",
		élément: <Magasins />,
		nomDePage: "Magasins",
	},
	produits: {
		chemin: "/produits",
		élément: <Produits />,
		nomDePage: "Produits",
	},
	inventaire: {
		chemin: "/inventaire",
		élément: <Inventaire />,
		nomDePage: "Inventaire",
	},
	creerInventaire: {
		chemin: "/creer-inventaire",
		élément: <CreerInventaire />,
		nomDePage: "Créer Inventaire",
	},
};
