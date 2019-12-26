import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

interface IProps {
	name: string;
	img?: string;
	last?: string;
}

export const ExerciseEntryComponent: React.FC<IProps> = ({ name, img, last }) => {
	const icon = require("../../icons/dumbbell.png");
	const lastRecord: number = 200;
	const unitUsed: string = "lbs"; // Should be a Enum
	return (
		<View style={styles.container}>
			<Image source={icon} style={styles.image} />
			<View style={styles.display}>
				<Text>{name}</Text>
				<View style={styles.lastRecord}>
					<Text>Last Recorded:</Text>
					<Text> {lastRecord} </Text>
					<Text>{unitUsed}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
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
	image: {
		height: 50,
		width: 50,
		margin: 5
	},
	lastRecord: {
		flexDirection: "row"
	},
	display: {
	}
});