import { Box } from "@mui/material";
import EnTetePage from "../composants/EnTetePage";

const MiseEnPagePage = ({ titreDeLaPage, children }: { titreDeLaPage: string; children: React.ReactNode }) => {
	return (
		<Box width={"100%"}>
			<EnTetePage texte={titreDeLaPage} />
			<Box mt={4}>{children}</Box>
		</Box>
	);
};

export default MiseEnPagePage;
