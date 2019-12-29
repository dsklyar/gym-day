// import actions from "@/actions";
import { MenuBarComponent } from "@/components/menu-bar.component";
import { WorkoutListComponent } from "@/components/workout-list.component";
import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import { IWorkoutEntry } from "@/interfaces";
import { SCREEN_ROUTES } from "@/navigators";
import { useTypedSelector } from "@/reducers";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
// import { useDispatch } from "react-redux";

export const LandingScreen: React.FC = () => {
	const navigation = useNavigation();
	// const dispatch = useDispatch();
	const data = useTypedSelector<IWorkoutEntry[]>(
		(state) => state.app.currentRoutine.workouts
	);
	const createNewWorkout = useCallback((): void => {
		navigation.push(SCREEN_ROUTES.AddWorkout);
	}, [navigation]);

	useEffect(() => {
		return () => {
			// clean up
		};
	});

	return (
		<View style={styles.container}>
			<View style={styles.grip}>
				<Text>March 20th, Leg Day</Text>
			</View>
			<View style={styles.list}>
				<WorkoutListComponent data={data} />
			</View>
			<MenuBarComponent onClick={createNewWorkout} />
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
