import { createSlice } from "@reduxjs/toolkit";
import { pipe, prop } from "ramda";

const slice = "order";

const initialState = {
	products: [],
	price: 0,
	isLoading: false,
	error: null
};

export const {
	actions: {
		setError,
		setProducts,
		setLoading,
		setPrice,
		setPriceToNull
	},
	reducer,
} = createSlice({
	initialState,
	name: slice,
	reducers: {
		setProducts: (state, { payload }) => ({ ...state, products: payload }),
		setPrice: (state, { payload }) => ({ ...state, price: state.price + payload }),
		setPriceToNull: (state, { payload }) => ({ ...state, price: payload }),
		setLoading: (state, { payload }) => ({ ...state, isLoading: payload }),
		setError: (state, { payload }) => ({ ...state, error: payload }),
	},
});

const getOrder = prop(slice);
const getProducts = pipe(getOrder, prop("products"));
const getPrice = pipe(getOrder, prop("price"));
const getIsLoading = pipe(getOrder, prop("isLoading"));
const getError = pipe(getOrder, prop("error"));

export {
	getOrder,
	getPrice,
	getProducts,
	getIsLoading,
	getError,
	slice,
};