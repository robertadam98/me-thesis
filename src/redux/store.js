import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// redux-persist
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

import { rootReducer } from "./root-reducer.js";
import { rootSaga } from "./root-saga.js";

// redux-persist
const persistConfig = {
	// configuration object for redux-persist
	key: "root",
	storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const makeStore = () => {

	const sagaMiddleWare = createSagaMiddleware();

	let middleware =[]; 

	if (process.env.NODE_ENV === "development") {
		middleware = (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat(sagaMiddleWare).concat(logger);
	} else {
		middleware = (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat(sagaMiddleWare);
	}

	const store = configureStore({
		reducer: persistedReducer,
		devTools: process.env.NODE_ENV !== "production",
		middleware
	});


	store.sagaTask = sagaMiddleWare.run(rootSaga);

	return store;
};

const store = makeStore();

const persistor = persistStore(store);

export { store, persistor };