import { IExerciseEntry } from "@/interfaces";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { ExerciseEntryComponent } from "../exercise-entry.component";

interface IProps {
	data: IExerciseEntry[];
}

export const ExerciseListComponent: React.FC<IProps> = ({ data }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item, index }) =>
					<ExerciseEntryComponent key={`exrc-${index}`} name={item.name} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {}
});
