import { ActionTypes } from "@/actions/action-types";
import { DEFAULT_ROUTINE } from "@/constants";
import { IExerciseEntry, IRoutine, IWorkoutEntry } from "@/interfaces";
import { Reducer } from "redux";

export interface IAppReducer {
	lastWorkoutDate: Date;
	currentRoutine: IRoutine;
}

export const DEFAULT_APP_REDUCER: IAppReducer = {
	lastWorkoutDate: new Date(),
	currentRoutine: DEFAULT_ROUTINE
};

export const appReducer: Reducer<IAppReducer, IAction> = (state = DEFAULT_APP_REDUCER, action) => {
	switch (action.type) {
		case ActionTypes.APP.CREATE_WORKOUT: {
			const workout: IWorkoutEntry = { ...action.payload };
			return {
				...state,
				currentRoutine: {
					...state.currentRoutine,
					workouts: [workout, ...state.currentRoutine.workouts]
				}
			};
		}
		case ActionTypes.APP.CREATE_EXERCISE: {
			const exercise: IExerciseEntry = { ...action.payload };
			const workoutIndex: number = action.meta;

			// if (
			// 	state.currentRoutine.workouts[workoutIndex] === null ||
			// 	state.currentRoutine.workouts[workoutIndex] === undefined
			// ) {
			// 	// TODO: log an error that workoutIndex is RIP
			// 	return state;
			// }

			const workouts = [...state.currentRoutine.workouts];
			workouts[workoutIndex] = {
				...workouts[workoutIndex],
				exercises: [...workouts[workoutIndex].exercises, exercise]
			};
			return {
				...state,
				currentRoutine: {
					...state.currentRoutine,
					workouts
				}
			};
		}
		default:
			return state;
	}
};
