import { AddExerciseScreen } from "@/screens/add-exercise";
import { AddWorkoutScreen } from "@/screens/add-workout";
import { HomeScreen } from "@/screens/home";
import { LandingScreen } from "@/screens/landing";
import { WorkoutScreen } from "@/screens/workout";
import { Animated, Easing } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export enum SCREEN_ROUTES {
	Landing = "Landing",
	Home = "Home",
	Workout = "WorkoutScreen",
	AddWorkout = "AddWorkout",
	AddExercise = "AddExercise",
	Profile = "Profile",
	Settigns = "Settings"
}

const AppNavigator = createStackNavigator(
	{
		[SCREEN_ROUTES.Landing]: {
			screen: LandingScreen
		},
		[SCREEN_ROUTES.Workout]: {
			screen: WorkoutScreen
		},
		// NOTE: Route shorthand
		[SCREEN_ROUTES.Home]: HomeScreen,
		AddWorkout: AddWorkoutScreen,
		AddExercise: AddExerciseScreen
	},
	{
		// NOTE: Config
		initialRouteName: "Landing",
		// NOTE: Remove NavBar by default
		defaultNavigationOptions: {
			header: null
		},
		// NOTE: Magical transition config
		// Hnstly wtf is this crap!
		transitionConfig: () => ({
			transitionSpec: {
				timing: Animated.timing,
				easing: Easing.step0,
				duration: 0
			},
			// tslint:disable-next-line: no-empty
			screenInterpolator: () => {}
		})
	}
);

export const AppContainer = createAppContainer(AppNavigator);
