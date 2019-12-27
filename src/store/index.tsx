
import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { rootReducer } from "../reducers/";

// const persistConfig = {
// 	key: "root",
// 	storage,
// 	stateReconciler: autoMergeLevel2,
// 	whitelist: ["payments"] // what is this gaian?
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(rootReducer);
// const persistor = persistStore(store);

// export { store, persistor };