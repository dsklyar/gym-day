import { ExerciseListComponent } from "@/components/exercise-list.component";
import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import { IExerciseEntry } from "@/interfaces";
import { useTypedSelector } from "@/reducers";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const LandingPage: React.FC = () => {
	const data = useTypedSelector<IExerciseEntry[]>(
		(state) => state.app.currentRoutine.workouts[0].exercises
	);
	return (
		<View style={styles.container}>
			<View style={styles.grip}>
				<Text>March 20th, Leg Day</Text>
			</View>
			<View style={styles.list}>
				<ExerciseListComponent data={data} />
			</View>
			<View style={styles.toolbar}>
				<Text>March 20th, Leg Day</Text>
			</View>
		</View>
	);
};

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
