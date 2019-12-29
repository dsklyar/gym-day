import { AddWorkoutScreen } from "@/screens/add-workout";
import { HomeScreen } from "@/screens/home";
import { LandingScreen } from "@/screens/landing";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export enum SCREEN_ROUTES {
	Landing = "Landing",
	Home = "Home",
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
		// NOTE: Route shorthand
		[SCREEN_ROUTES.Home]: HomeScreen,
		AddWorkout: AddWorkoutScreen
	},
	{
		// NOTE: Config
		initialRouteName: "Landing",
		// NOTE: Remove NavBar by default
		defaultNavigationOptions: {
			header: null
		}
	}
);

export const AppContainer = createAppContainer(AppNavigator);
