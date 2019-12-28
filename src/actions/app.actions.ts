import { IExerciseEntry, IWorkoutEntry } from "@/interfaces";
import { createAction } from "typesafe-actions";
import { ActionTypes } from "./action-types";

export const createExerciseAction = createAction(ActionTypes.APP.CREATE_EXERCISE)<IExerciseEntry>();

export const removeExerciseAction = createAction(ActionTypes.APP.REMOVE_EXERCISE)<IExerciseEntry>();

export const createWorkoutAction = createAction(ActionTypes.APP.CREATE_WORKOUT)<IWorkoutEntry>();

export const removeWorkoutAction = createAction(ActionTypes.APP.REMOVE_WORKOUT)<IWorkoutEntry>();
