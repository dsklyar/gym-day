import { IWorkoutEntry } from "@/interfaces";
import { SCREEN_ROUTES } from "@/navigators";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { WorkoutEntryComponent } from "../workout-entry.component";

interface IProps {
	data: IWorkoutEntry[];
}

export const WorkoutListComponent: React.FC<IProps> = ({ data }) => {
	const navigate = useNavigation();
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item, index }) => (
					<TouchableHighlight
						key={`workout-${index}`}
						onPress={() => navigate.navigate(SCREEN_ROUTES.Workout, { index })}>
						<WorkoutEntryComponent name={item.name} exerciseCount={item.exercises.length} />	
					</TouchableHighlight>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {}
});
