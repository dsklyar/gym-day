import { combineReducers } from "redux";
import { IAppReducer, DEFAULT_APP_REDUCER, appReducer } from "./app.reducer";

export interface IRootState {
	app: IAppReducer;
}

export const DEFAULT_ROOT_STATE: IRootState = {
	app: DEFAULT_APP_REDUCER
};

// export const rootReducer = (history: History) => {
export const rootReducer = () => {
	return combineReducers({
		app: appReducer,
	});
};