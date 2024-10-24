// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import DetailPage from "./page/DetailPage/DetailPage";
import UseEffect from "./page/UseEffect/UseEffect";
import Header from "./component/Header";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/detail" element={<DetailPage />} />
					<Route path="/use-effect" element={<UseEffect />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
