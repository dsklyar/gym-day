import { Reducer } from "redux";
import { IRoutine } from "@/interfaces";
import { ActionTypes } from "@/actions/action-types";
import { DEFAULT_ROUTINE } from "@/constants";

export interface IAppReducer {
  lastWorkoutDate: Date;
  currentRoutine: IRoutine;
}

export const DEFAULT_APP_REDUCER: IAppReducer = {
  lastWorkoutDate: new Date(),
  currentRoutine: DEFAULT_ROUTINE
};

export const appReducer: Reducer<IAppReducer, IAction> = (
  state = DEFAULT_APP_REDUCER,
  action
) => {
  switch (action.type) {
    case ActionTypes.APP.CREATE_EXERCISE: {
    }
    default:
      return state;
  }
};