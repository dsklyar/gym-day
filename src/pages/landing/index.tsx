import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { statusBarHeight, windowWidth, usableHeight } from "../../dimensions";
import { ExerciseListComponent } from "../../components/exercise-list.component";
import { ExerciseEntryData } from "../../tempData";


export default function LandingPage() {

	return (
		<View style={styles.container}>
			<View style={styles.grip}>
				<Text>March 20th, Leg Day</Text>
			</View>
			<View style={styles.list}>
				<ExerciseListComponent data={ExerciseEntryData} />
			</View>
			<View style={styles.toolbar}>
				<Text>March 20th, Leg Day</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: usableHeight,
		width: windowWidth,
		marginTop: statusBarHeight
	},
	grip: {
		flex: 3,
		backgroundColor: "red"
	},
	toolbar: {
		flex: 1,
		backgroundColor: "orange"
	},
	list: {
		flex: 8
	}
});
