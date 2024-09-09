import { Box } from "@mui/material"
import ChampDeRechercheEtFiltre from "../composants/ChampDeRechercheEtFiltre"
import Liste from "../composants/Liste"
import MiseEnPagePage from "../miseEnPages/MiseEnPagePage"
import { routes } from "../routes"

const Inventaire = () => {

	const nomDePage = routes.inventaire.nomDePage


  return (
    <MiseEnPagePage titreDeLaPage={nomDePage}>
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
      {/* <ChampDeRechercheEtFiltre page={nomDePage}  setlisteDeDonnées={setMagasinsAffichés} />
      <Liste page={nomDePage} listeDeDonnées={magasinsAffichés} /> */}
    </Box>
  </MiseEnPagePage>
  )
}

export default Inventaire