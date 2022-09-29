import React from "react";
import { NextSeo } from "next-seo";

import ProductHero from "../components/products/product-hero-component";
import ProductItem from "../components/products/product-item-component";

const products = [
	{
		name: "ME hallgató/dolgozó",
		price: 5000,
		description: "Kizárólag ME hallgató/dolgozó részére! A belépésnél mindenki hozza magával az ezt igazoló hivatalos okmányokat, azt a biztonsági személyzet ellenőrizni fogja!"
	},
	{
		name: "Más intézmények hallgatói",
		price: 6000,
		description: "Kizárólag más intézmények hallgatói részére! A belépésnél mindenki hozza magával az ezt igazoló hivatalos okmányt, azt a biztonsági személyzet ellenőrizni fogja!"
	},
	{
		name: "Külsős",
		price: 7000,
		description: "Nem felsőoktatásban tanuló személyek részére!"
	}
];

export default function Products() {
	return (
		<div className="container px-4 mx-auto">
			<NextSeo
				title='Jegyvásárlás | Miskolci Egyetemi Napok - MEN'
				description='Jegyvásárlás | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Jegyvásárlás | Miskolci Egyetemi Napok - MEN",
					description: "Jegyvásárlás | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<ProductHero />
			<div className="flex flex-row items-center justify-between w-full">
				{products.map((item, index) => (
					<ProductItem 
						key={index}
						item={item}
					/>
				))}
			</div>
		</div>
	);
}
