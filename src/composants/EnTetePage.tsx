import { Box, Divider, Typography } from "@mui/material";

const EnTetePage = ({ texte }: { texte: string }) => {
	return (
		<Box position={'sticky'} top={'20px'} >
			<Typography fontWeight={'bold'} gutterBottom textAlign={'center'} component={"h2"} variant="h5">
				{texte}
			</Typography>
			<Divider  />
		</Box>
	);
};

export default EnTetePage;
