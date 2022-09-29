import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextSeo } from "next-seo";
import { HashLoader } from "react-spinners";

export default function Success() {
	const dispatch = useDispatch();
	const { products } = useSelector(state => state.order);

	useEffect(() => {
		dispatch({ type: "ORDER/cleanCart"});
				
	}, [dispatch, products]);

	if(products.length > 0) {
		return <div className="flex items-center justify-center min-h-[80vh] w-screen">
			<HashLoader color='green' />
		</div>;
	}

	return (
		<div className="h-[70vh] pt-20 bg-white flex flex-col items-center justify-center">
			<NextSeo
				title='Sikeres vásárlás | Miskolci Egyetemi Napok - MEN'
				description='Sikeres vásárlás | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Sikeres vásárlás | Miskolci Egyetemi Napok - MEN",
					description: "Sikeres vásárlás | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<img
				className="w-1/4"
				src="/images/success.png"
				alt=""
			/>
			<p className="text-3xl mt-10">
				Köszönjük vásárlásod, visszaigazoló email-t küldtünk.
			</p>	 
		</div>
	);
}
