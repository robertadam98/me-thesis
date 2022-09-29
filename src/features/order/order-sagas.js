// import { sendOrder } from "lib/order";
import { /* call, */ put, takeEvery } from "redux-saga/effects";

import {
	setError,
	setProducts,
	setLoading,
	setPrice,
	setPriceToNull
} from "./order-reducer";

function* handleAddProductToCart({
	payload: { 
		currentProducts,
		product,
		quantity
	} 
}) {
	yield put(setLoading(true));
	try {
		yield put(setProducts([...currentProducts, { ...product, quantity }]));
		yield put(setPrice(product.price * quantity));
		yield put(setError(null));	
	} catch (error) {
		yield put(setError(error.message));
	}
	yield put(setLoading(false));
}

const addToCart = (payload) => ({
	type: addToCart.type,
	payload,
});
addToCart.type = "ORDER/addToCart";

function* watchAddToCart() {
	yield takeEvery(addToCart.type, handleAddProductToCart);
}

function* handleRemoveProductFromCart({
	payload: { 
		currentProducts,
		product,
		quantity
	} 
}) {
	yield put(setLoading(true));
	try {
		yield put(setProducts(currentProducts.filter((e) => e !== product)));
		yield put(setPrice(product.price * quantity * -1));
		yield put(setError(null));	
	} catch (error) {
		yield put(setError(error.message));
	}
	yield put(setLoading(false));
}

const removeFromCart = (payload) => ({
	type: removeFromCart.type,
	payload,
});
removeFromCart.type = "ORDER/removeFromCart";

function* watchRemoveFromCart() {
	yield takeEvery(removeFromCart.type, handleRemoveProductFromCart);
}

function* handleUpdateCartItem({
	payload: { 
		currentProducts,
		product,
		quantity,
		type
	} 
}) {
	yield put(setLoading(true));
	try {
		yield put(setProducts(currentProducts.map(e => {
			if (e === product) {
				return {
					...product,
					quantity
				};
			} else {
				return e;
			}
		})));
		yield put(setPrice(type === "plus" ? product.price : product.price * -1));
		yield put(setError(null));	
	} catch (error) {
		yield put(setError(error.message));
	}
	yield put(setLoading(false));
}

const updateCartItem = (payload) => ({
	type: updateCartItem.type,
	payload,
});
updateCartItem.type = "ORDER/updateCartItem";

function* watchUpdateCartItem() {
	yield takeEvery(updateCartItem.type, handleUpdateCartItem);
}

function* handleCleanCart() {
	yield put(setProducts([]));
	yield put(setPriceToNull(0));
}

const cleanCart = () => ({
	type: cleanCart.type
});
cleanCart.type = "ORDER/cleanCart";

function* watchCleanCart() {
	yield takeEvery(cleanCart.type, handleCleanCart);
}

export {
	addToCart,
	watchAddToCart,
	removeFromCart,
	watchRemoveFromCart,
	updateCartItem,
	watchUpdateCartItem,
	cleanCart,
	watchCleanCart
};