import { UnitTypeEnum } from "../enums";

export interface IExerciseEntry {
	name: string;
	history: IExerciseEntryRecord[];
}

export interface IExerciseEntryRecord {
	date: Date;
	amount: number | null;
	type: UnitTypeEnum;
	repetition: number;
}

export interface IWorkoutEntry {
	name: string;
	exercises: IExerciseEntry[];
}

export interface IRoutine {
	name: string;
	workouts: IWorkoutEntry[];
}