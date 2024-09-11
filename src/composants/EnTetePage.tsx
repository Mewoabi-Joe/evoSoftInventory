import { Box, Button, Divider, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

const EnTetePage = ({ texte }: { texte: string }) => {

	const {i18n, t } = useTranslation();


	const changeLanguage = () => {
		//check the language and switch to the other
		let lng = i18n.language;

		i18n.changeLanguage(lng === 'en' ? 'fr' : 'en');
	  };

	return (
		<Box position={'sticky'} top={'20px'} >
			<Box display={'flex'} justifyContent={'center'}><Typography ml={'auto'} fontWeight={'bold'} gutterBottom textAlign={'center'} component={"h2"} variant="h5">
				{texte}
			</Typography>
				<Button
				sx={{ml: 'auto'}}
					variant="outlined"
					startIcon={<LanguageIcon />}
					onClick={changeLanguage}
				>
					{t('changeLanguage')}
				</Button>
			</Box>
			<Divider sx={{my: 2}} />
		</Box>
	);
};

export default EnTetePage;
