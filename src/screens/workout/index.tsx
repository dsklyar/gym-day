import { ExerciseListComponent } from "@/components/exercise-list.component";
import { MenuBarComponent } from "@/components/menu-bar.component";
import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import { IExerciseEntry } from "@/interfaces";
import { SCREEN_ROUTES } from "@/navigators";
import { useTypedSelector } from "@/reducers";
import React, { useCallback, useEffect } from "react";
import { useNavigation } from "react-navigation-hooks";
import styled from "styled-components/native";

interface IProps {
	workoutIndex: number;
}

export const WorkoutScreen: React.FC<IProps> = ({ workoutIndex }) => {
	const navigation = useNavigation();
	const exercises = useTypedSelector<IExerciseEntry[]>((state) =>
		state.app.currentRoutine.workouts[workoutIndex].exercises);

	const createNewExercise = useCallback(() => {
		navigation.navigate(SCREEN_ROUTES.AddExercise);
	}, [navigation]);

	return (
		<Container>
			<Grip>
				<Text>Hello</Text>
			</Grip>
			<List>
				<ExerciseListComponent data={exercises}/>
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
	background-color: red;
`;

const Text = styled.Text`
`;

const List = styled.View`
	flex: 8;
`;