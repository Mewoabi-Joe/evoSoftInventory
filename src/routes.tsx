import Accueil from "./pages/Accueil";
import CreerInventaire from "./pages/CreerInventaire";
import Inventaire from "./pages/Inventaire";
import Magasins from "./pages/Magasins";
import Produits from "./pages/Produits";

const lesChemins = {

}

export const routes = {
    accueil: {
        chemin: '/',
        élément: <Accueil />
    },
    magasins: {
        chemin: '/magasins',
        élément: <Magasins />
    },
    produits: {
        chemin: '/produits',
        élément: <Produits />
    },
    inventaire: {
        chemin: '/inventaire',
        élément: <Inventaire />
    },
    creerInventaire: {
        chemin: '/creer-inventaire',
        élément: <CreerInventaire />
    },
}