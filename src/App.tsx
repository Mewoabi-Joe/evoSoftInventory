import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./composants/Layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{Object.values(routes).map(({ chemin, élément }, index) => (
						<Route key={index} path={chemin} element={élément} />
					))}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
