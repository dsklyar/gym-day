import actions from "@/actions";
import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import React, { useCallback, useContext, useState } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";


export const AddExerciseScreen: React.FC = () => {
	const dispatch = useDispatch();
	const workoutIndex = useNavigationParam("workoutIndex");


	const [exerciseName, onChangeText] = useState<string>("");

	const createNewExercise = useCallback((): void => {
		dispatch(actions.App.createExerciseAction({ name: exerciseName, history: [] }, workoutIndex));
	}, [dispatch, exerciseName, workoutIndex]);

	if (workoutIndex === null || workoutIndex === undefined) {
		// tslint:disable-next-line: no-console
		console.warn("workoutIndex is null or undefined!", workoutIndex);
	}

	// TODO: Create a check if input is empty!
	return (
		<Container>
			<GripContainer />
			<DisplayContainer>
				<ExerciseNameTextInput
					value={exerciseName}
					onChangeText={(text: string) => onChangeText(text)}
					placeholder={"New Exercise"} />
			</DisplayContainer>
			<Confirm title={"Confirm"} onPress={createNewExercise} />
		</Container>
	);
};

const Confirm = styled.Button`
`;

const ExerciseNameTextInput = styled.TextInput`
	height: 40px;
	border-width: 1px;
	border-color: grey;
`;

const GripContainer = styled.View`
	flex: 1;
	background-color: orange;
`;

const DisplayContainer = styled.View`
	flex: 3;
`;

const Container = styled.View`
	height: ${usableHeight};
	width: ${windowWidth};
	margin-top: ${statusBarHeight};
`;