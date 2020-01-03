import { ExerciseListComponent } from "@/components/exercise-list.component";
import { MenuBarComponent } from "@/components/menu-bar.component";
import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import { IExerciseEntry } from "@/interfaces";
import { SCREEN_ROUTES } from "@/navigators";
import { useTypedSelector } from "@/reducers";
import React, { useCallback, useEffect } from "react";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import styled from "styled-components/native";

export const WorkoutScreen: React.FC = () => {
	const navigation = useNavigation();
	const index = useNavigationParam("index");

	const exercises = useTypedSelector<IExerciseEntry[]>((state) =>
		state.app.currentRoutine.workouts[index].exercises);
	const workoutName = useTypedSelector<string>((state) =>
		state.app.currentRoutine.workouts[index].name);

	const createNewExercise = useCallback(() => {
		navigation.navigate(SCREEN_ROUTES.AddExercise, { workoutIndex: index });
	}, [navigation, index]);

	// TODO: Do a check if index exists!
	if (index === null || index === undefined) {
		// TODO: Do an error logging if inde isnt there
		// tslint:disable-next-line: no-console
		console.warn("Index is missing inside WorkoutScreen");
	}

	return (
		<Container>
			<Grip>
				<Text>{workoutName}</Text>
			</Grip>
			<List>
				<ExerciseListComponent data={exercises} />
			</List>
			<MenuBarComponent onClick={createNewExercise} />
		</Container>
	);
};

const Container = styled.View`
	width: ${windowWidth};
	height: ${usableHeight};
	margin-top: ${statusBarHeight};
`;

const Grip = styled.View`
	flex: 3;
	background-color: lightcoral;
`;

const Text = styled.Text`
`;

const List = styled.View`
	flex: 8;
`;