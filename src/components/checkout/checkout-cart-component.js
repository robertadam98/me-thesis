import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

import CheckoutCartItem from "./checkout-cart-item-component";
import Link from "next/link";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

const CheckoutCart = () => {
	const { data: session} = useSession();
	const [isLoading, setIsLoading] = useState(false);

	const { products, price } = useSelector(state => state.order);

	const createCheckOutSession = async () => {
		setIsLoading(true);
		const stripe = await stripePromise;

		const checkoutSession = await axios.post("/api/checkout/create-checkout-session", {
			items: products,
			email: session.user.email,
		});

		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id,
		});

		if (result.error) {
			alert(result.error.message);
		}
		
		setIsLoading(false);
	};
	
	return(
		<div className="w-full md:w-1/2 px-4 bg-gray-100 rounded-xl">
			<div className="py-8 px-6 md:px-8 flex flex-col items-start justify-between w-full h-full">
				<div className="flex flex-col items-start justify-start w-full">
					<div className="flex mb-8 items-center">
						<h2 className="text-4xl font-bold font-heading">
                        Kosár tartalma
						</h2>
						<span className="flex-shrink-0 inline-flex ml-4 w-8 h-8 items-center justify-center rounded-full bg-black text-white">
							{products.length}
						</span>
					</div>
					<div className="flex flex-col w-full items-start justiy-start max-h-[60vh] overflow-y-auto">
						{products.map((item, index) => (
							<CheckoutCartItem key={index} item={item} />
						))}
					</div>
				</div>
				<div className="w-full flex flex-col items-center justify-end">
					<div className="flex justify-between w-full mb-10">
						<span className="text-base md:text-xl font-bold font-heading">
                                    Végösszeg:
						</span>
						<span className="font-bold font-heading">
							{price}   Ft
						</span>
					</div>
					<button
						onClick={products.length < 0 || !session ? null : createCheckOutSession}
						className="flex items-center justify-center w-full py-4 bg-green-500 hover:bg-green-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200 h-[55px]"
						style={{
							cursor: products.length < 1 || !session ? "not-allowed" : "pointer"
						}}
					>
						{isLoading ? <ClipLoader color="white" size={20} /> : "Tovább a fizetéshez"}
					</button>
					{!session && (
						<div className="mt-5 text-xl text-center">
							Kérlek 
							 <Link href='/login' passHref>
								<a className="text-green-500 mx-1">jelentkezz be
								</a>
							</Link>
							 a vásárláshoz!	
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CheckoutCart;