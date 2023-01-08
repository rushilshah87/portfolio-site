import React from "react";
import reactDom from "react-dom/client";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from "./src/App"

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);