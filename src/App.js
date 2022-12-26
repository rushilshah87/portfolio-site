import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";
import Home from "../components/Home"
import "../styles/style.scss"

function App() {
	return (
		<Routes>
			<Route exact path="/" element={Landing()} />
			<Route path="/home" element={Home()} />
		</Routes>
	);

};

export default App