import { Box, Button, Paper, Popper, Slider, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, { Dispatch, SetStateAction } from "react";
import { Magasin } from "../types/magasin";
import { NomDePage } from "../types/nomDePage";
import { Produit } from "../types/produit";
import { produits } from "../donnees/produits";

const Filtre = ({
	page,
	setlisteDeDonnées,
}: {
	page: NomDePage;
	setlisteDeDonnées: Dispatch<SetStateAction<Magasin[]>> | Dispatch<SetStateAction<Produit[]>>;
}) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const minDistance = 200;
	const [plageDePrix, setPlageDePrix] = React.useState<number[]>([0, 1000]);

	const gérerClic = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const gérerChangementPlage = (event: Event, newValue: number | number[], activeThumb: number) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setPlageDePrix([Math.min(newValue[0], plageDePrix[1] - minDistance), plageDePrix[1]]);
		} else {
			setPlageDePrix([plageDePrix[0], Math.max(newValue[1], plageDePrix[0] + minDistance)]);
		}

		switch (page) {
			case "Produits":
				const listeFiltréeDesProduits = produits.filter(({ prix }) => prix >= plageDePrix[0] && prix <= plageDePrix[1]);

				(setlisteDeDonnées as Dispatch<SetStateAction<Produit[]>>)(listeFiltréeDesProduits);
				break;
		}

		console.log("plageDePrix", plageDePrix);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<Box>
			<Button onClick={gérerClic} variant="outlined" endIcon={<FilterListIcon />}>
				Filtrer
			</Button>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<Paper elevation={5} sx={{ p: 3, width: 250 }}>
					{page === "Produits" ? (
						<>
							<Typography gutterBottom textAlign={"center"}>
								Plage de prix
							</Typography>
							<Slider
								min={0}
								max={1000}
								value={plageDePrix}
								onChange={gérerChangementPlage}
								valueLabelDisplay="on"
								disableSwap
							/>
						</>
					) : (
						<></>
					)}
				</Paper>
			</Popper>
		</Box>
	);
};

export default Filtre;
