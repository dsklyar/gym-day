import { AppContainer } from "@/navigators";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./src/store";

export default function App() {
	return (
		<Provider store={configureStore()}>
			<AppContainer />
		</Provider>
	);
}
