import { DEFAULT_ROOT_STATE, IRootState, rootReducer } from "@/reducers";
import { applyMiddleware, createStore, Middleware, Store, StoreEnhancer } from "redux";
import { composeWithDevTools, EnhancerOptions } from "redux-devtools-extension";
import { logger } from "redux-logger";
// import { createEpicMiddleware, EpicMiddleware } from "redux-observable";
// import rootEpic from "./epics";

export const configureStore = (): Store<IRootState> => {
	// const epicMiddleware: EpicMiddleware<IAction, IAction, IStoreState> = createEpicMiddleware();
	// const customRouterMiddleware: Middleware = routerMiddleware(history);

	// TODO: Remove logging and tooling logic when in PROD mode
	const enhancerOptions: EnhancerOptions = {
		trace: true,
		traceLimit: 50
	};	
	const middleware: Middleware[] = [logger];
	const enhancers = composeWithDevTools(enhancerOptions);

	const storeEnhancer: StoreEnhancer = enhancers(applyMiddleware(...middleware));
	const store = createStore(rootReducer(), DEFAULT_ROOT_STATE, storeEnhancer);

	// epicMiddleware.run(rootEpic);

	return store;
};