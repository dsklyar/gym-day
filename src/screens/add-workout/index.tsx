import actions from "@/actions";
import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";


export const AddWorkoutScreen: React.FC = () => {
	const dispatch = useDispatch();
	const [workoutName, onChangeText] = useState<string>("");
	const createNewWorkout = useCallback((): void => {
		dispatch(actions.App.createWorkoutAction({ name: workoutName, exercises: [] }));
	}, [dispatch, workoutName]);

	// TODO: Create a check if input is empty!
	return (
		<Container>
			<GripContainer />
			<DisplayContainer>
				<WorkoutNameTextInput
					value={workoutName}
					onChangeText={(text: string) => onChangeText(text)} 
					placeholder={"New Workout"} />
			</DisplayContainer>
			<Confirm title={"Confirm"} onPress={createNewWorkout} />
		</Container>
	);
};

const Confirm = styled.Button`
`;

const WorkoutNameTextInput = styled.TextInput`
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