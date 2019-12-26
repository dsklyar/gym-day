import { Dimensions, StatusBar } from "react-native";

// Apparently this does seem to work on Android always, but on iOS, initially undefined is indeed returned
const statusBarHeight = StatusBar.currentHeight;

// The 'window' is different from 'screen'
// The 'window' accounts for dims minus the "soft manu bar"
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);

const usableHeight = windowHeight - statusBarHeight;
export { windowWidth, windowHeight, usableHeight, statusBarHeight };