import React from "react";
import Link from "next/link";
import {TiShoppingCart} from "react-icons/ti";
import { useSelector } from "react-redux";

const HeaderCart = () => {
	const { products } = useSelector(state => state.order);

	return (
		<Link href="/cart" passHref>
			<a className="w-1/5 flex flex-row items-center justify-center hover:opacity-70">
				<TiShoppingCart size={23} className="text-black" />
				<div className="flex items-center justify-center ml-2 rounded-full text-sm w-6 h-6 font-bold text-white bg-black">
					{products.length}
				</div>
			</a>
		</Link>
	);
};

export default HeaderCart;