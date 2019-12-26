import { View, Image, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ExerciseEntryComponent } from "../exercise-entry.component";
import { IExerciseEntry } from "@/interfaces";

interface IProps {
	data: IExerciseEntry[];
}

export const ExerciseListComponent: React.FC<IProps> = ({ data }) => {
	const [items, setData] = useState<IExerciseEntry[]>(data);
	return (
		<View style={styles.container}>
			<FlatList data={items} renderItem={({ item }) => <ExerciseEntryComponent name={item.name} />} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	}
});