import { IRoutine } from "@/interfaces";

export const DEFAULT_ROUTINE: IRoutine = {
	name: "default",
	workouts: [
		{
			name: "chest",
			exercises: [
				{
					name: "barbell bench press",
					history: []
				}
			]
		}
	]
};