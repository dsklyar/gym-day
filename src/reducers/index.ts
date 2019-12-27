import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { appReducer, DEFAULT_APP_REDUCER, IAppReducer } from "./app.reducer";

export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export interface IRootState {
	app: IAppReducer;
}

export const DEFAULT_ROOT_STATE: IRootState = {
	app: DEFAULT_APP_REDUCER
};

// export const rootReducer = (history: History) => {
export const rootReducer = () => {
	return combineReducers({
		app: appReducer
	});
};
