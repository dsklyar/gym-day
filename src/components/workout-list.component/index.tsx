import { IWorkoutEntry } from "@/interfaces";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { WorkoutEntryComponent } from "../workout-entry.component";

interface IProps {
	data: IWorkoutEntry[];
}

export const WorkoutListComponent: React.FC<IProps> = ({ data }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<WorkoutEntryComponent name={item.name} exerciseCount={item.exercises.length} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {}
});
