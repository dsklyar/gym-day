import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { LandingPage } from "./src/pages/landing";
import { store } from "./src/store";

export default function App() {
	return (
		<Provider store={store}>
			<LandingPage />
		</Provider>
	);
}
