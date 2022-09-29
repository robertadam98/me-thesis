import { all } from "redux-saga/effects";

import {
	watchAddToCart,
	watchRemoveFromCart,
	watchUpdateCartItem,
	// watchSendOrderFnc,
	watchCleanCart
} from "../features/order/order-sagas";

function* rootSaga() {
	yield all([
		watchAddToCart(),
		watchRemoveFromCart(),
		watchUpdateCartItem(),
		// watchSendOrderFnc(),
		watchCleanCart()
	]);
}

export { rootSaga };