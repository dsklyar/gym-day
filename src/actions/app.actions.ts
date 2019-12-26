import { createAction } from "typesafe-actions";
import { ActionTypes } from "./action-types";
import { IExerciseEntry, IWorkoutEntry } from "@/interfaces";

export const createExerciseAction = createAction(
	ActionTypes.APP.CREATE_EXERCISE,
	(resolve) => (payload: IExerciseEntry) => resolve(payload)
);

export const removeExerciseAction = createAction(
	ActionTypes.APP.REMOVE_EXERCISE,
	(resolve) => (payload: IExerciseEntry) => resolve(payload)
);

export const createWorkoutAction = createAction(
	ActionTypes.APP.CREATE_WORKOUT,
	(resolve) => (payload: IWorkoutEntry) => resolve(payload)
);

export const removeWorkoutAction = createAction(
	ActionTypes.APP.REMOVE_WORKOUT,
	(resolve) => (payload: IWorkoutEntry) => resolve(payload)
);