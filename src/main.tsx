import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NotificationsProvider } from '@toolpad/core/useNotifications';

const theme = createTheme({
	typography: {
		fontFamily: "Roboto, Arial, sans-serif",
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<NotificationsProvider>
				<CssBaseline />
				<App />
			</NotificationsProvider>;
		</ThemeProvider>
	</StrictMode>
);
