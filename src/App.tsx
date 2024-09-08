import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import MiseEnPageApplication from "./miseEnPages/MiseEnPageApplication";

function App() {
	return (
		<BrowserRouter>
			<MiseEnPageApplication>
				<Routes>
					{Object.values(routes).map(({ chemin, élément }, index) => (
						<Route key={index} path={chemin} element={élément} />
					))}
				</Routes>
			</MiseEnPageApplication>
		</BrowserRouter>
	);
}

export default App;
