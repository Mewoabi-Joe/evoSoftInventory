import { Card, CardContent, Stack, Typography } from "@mui/material";

const ElementListe = ({textePrimaire, texteSecondaire, texteDeFin, plusDeTexte}:{textePrimaire: string; texteSecondaire: string |number; plusDeTexte?:string; texteDeFin?: string;}) => {
	return (
		
    <Card raised elevation={4} sx={{px: 1, py: 0, maxWidth: '100%', '&:hover': {backgroundColor: '#eee', cursor: 'pointer'}}}>
    <CardContent  sx={{display: 'flex', direction: 'row', alignItems: 'center' }}>
        <Stack>
          <Typography gutterBottom>{textePrimaire}</Typography>
          <Typography gutterBottom variant="caption">{texteSecondaire}</Typography>
          {plusDeTexte && <Typography variant="caption">{plusDeTexte}</Typography>}
        </Stack>
        {texteDeFin && <Typography ml={'auto'}>1 produit</Typography>}
    </CardContent>
  </Card>
	);
};

export default ElementListe;
