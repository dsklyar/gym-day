import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface IProps {
	name: string;
	exerciseCount: number;
}

export const WorkoutEntryComponent: React.FC<IProps> = ({ name, exerciseCount }) => {
	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<Text>{name}</Text>
				<Text>{exerciseCount}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 2,
		borderColor: "#ddd",
		borderBottomWidth: 0,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 2.5,
		marginBottom: 2.5,
		flexDirection: "row"
	},
	display: {}
});
