import React from "react";
import { useDispatch, useSelector } from "react-redux";


const CheckoutCartItem = ({ item }) => {
	const dispatch = useDispatch();
	const { products } = useSelector(state => state.order);

	const { name, price, quantity } = item;
	return(                    
		<div className="flex justify-between items-center flex-row w-full mb-3">
			<div className="pr-2 w-1/2">
				<h3 className="mb-2 text-xl font-bold font-heading">
					{name}
				</h3>
			</div>         
			<div className="flex flex-row space-x-4 items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
				<button 
					onClick={() => {
						if(quantity === 1) {
							dispatch({
								type: "ORDER/removeFromCart",
								payload: {
									currentProducts: products,
									product: item,
									quantity: quantity
								}
							});
						} else {
							dispatch({
								type: "ORDER/updateCartItem",
								payload: {
									currentProducts: products,
									product: item,
									quantity: quantity - 1,
									type: "minus"
								}
							});
						}
					}}
					className="py-2 hover:text-gray-700">
					<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect>
						</g>
					</svg>
				</button>
				<input
					min="1"
					className="w-8 m-0 px-2 py-2 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" 
					type="number"
					value={quantity}
					disabled
				/>
				<button 
					onClick={() => dispatch({
						type: "ORDER/updateCartItem",
						payload: {
							currentProducts: products,
							product: item,
							quantity: quantity + 1,
							type: "plus"
						}
					})}
					className="py-2 hover:text-gray-700">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g>
					</svg>
				</button>
			</div>
			<span className="text-lg text-blue-300 font-bold font-heading">
				{price * quantity} Ft
			</span>
		</div>
	);
};

export default CheckoutCartItem;