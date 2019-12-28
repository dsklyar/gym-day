import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { LandingPage } from "./src/pages/landing";
import { configureStore } from "./src/store";

export default function App() {
	return (
		<Provider store={configureStore()}>
			<LandingPage />
		</Provider>
	);
}
