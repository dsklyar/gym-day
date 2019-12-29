import { AddWorkoutScreen } from "@/screens/add-workout";
import { HomeScreen } from "@/screens/home";
import { LandingScreen } from "@/screens/landing";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
	Landing: {
		screen: LandingScreen,
	},
	// NOTE: Route shorthand
	Home: HomeScreen,
	AddWorkout: AddWorkoutScreen
}, {
	// NOTE: Config
	initialRouteName: "Landing",
	// NOTE: Remove NavBar by default
	defaultNavigationOptions: {
		header: null
	}
});

export const AppContainer = createAppContainer(AppNavigator);