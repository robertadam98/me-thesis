import React from "react";
import { NextSeo } from "next-seo";

import CheckoutCart from "../components/checkout/checkout-cart-component";

export default function Checkout() {
	return(
		<div className="container mx-auto px-4 w-full h-full flex flex-col items-center justify-center mt-20">
			<NextSeo
				title='Kosár | Miskolci Egyetemi Napok - MEN'
				description='Kosár | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Kosár | Miskolci Egyetemi Napok - MEN",
					description: "Kosár | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<h2 className="mb-14 text-5xl font-bold font-heading">
                    Kosár
			</h2>
			<CheckoutCart />
		</div>
	);
}