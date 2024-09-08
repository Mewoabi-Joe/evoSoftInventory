import { Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const CarteAccueil = ({titre, nombre, chemin}: {titre: string; nombre: number; chemin: string}) => {

  const naviguer = useNavigate()


  return (
    <Card raised sx={{width: '250px', height: '200px'}} onClick = {() => naviguer(chemin) }>
      <CardContent sx={{height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'space-around', alignItems:'center', '&:hover': {cursor: 'pointer', backgroundColor: '#eee' }}}>
        <Typography component={'p'} variant="h5">{titre}</Typography>
        <Typography component={'p'} variant="h3">{nombre}</Typography>
      </CardContent>
    </Card>
  )
}

export default CarteAccueil