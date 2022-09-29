import { combineReducers } from "@reduxjs/toolkit";
import {
	reducer as orderReducer,
	slice as orderSlice,
} from "../features/order/order-reducer";

const combinedReducer = combineReducers({
	[orderSlice]: orderReducer
});

const rootReducer = (state, action) => {
	return combinedReducer(state, action);
};

const rootState = rootReducer(undefined, {});

export { rootReducer, rootState };