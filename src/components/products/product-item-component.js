import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ item }) => {
	const dispatch = useDispatch();

	const { products } = useSelector(state => state.order);
    
	const { name, price, description } = item;

	const addToCart = () => {
		dispatch({
			type: "ORDER/addToCart",
			payload: {
				currentProducts: products,
				product: item,
				quantity: 1
			}
		});
	};
    
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 p-4 h-[450px]">
			<div className="h-full flex flex-col justify-between items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
				<div className="flex flex-col items-center justify-start">
					<h3 className="mb-4 text-lg md:text-xl text-green-500 font-medium">
						{name}
					</h3>
					<div className="mb-4">
						<span className="text-5xl text-coolGray-900 font-medium">
							{price} Ft
						</span>
					</div>
					<p className="mb-7 text-coolGray-400 font-medium">
						{description}
					</p>
				</div>
				<div 
					onClick={addToCart}
					className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm cursor-pointer">
                    Kosárba
				</div>
			</div>
		</div>

	);
};

export default ProductItem;