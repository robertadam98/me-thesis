const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export default async (req, res) => {
	try {
		const { items, email } = req.body;

		const transformedItems = items.map((item) => ({
			price_data: {
				currency: "huf",
				product_data: {
					name: item.name,
				},
				unit_amount: item.price * 100,
			},
			description: item.description,
			quantity: item.quantity,
		}));

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			shipping_address_collection: {
				allowed_countries: ["HU"],
			},
			line_items: transformedItems,
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/success`,
			cancel_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/error`,
			metadata: {
				email
			},
		});

		if(session.id) {
			const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/orders/create-order`, {
				method: "POST",
				// req.body
				body: JSON.stringify({
					email,
					products: items
				})
			});

			const resData = await response.json();

			if(resData.message === "Vásárlás létrehozva!") {
				await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/orders/send-order-email`, {
					method: "POST",
					body: JSON.stringify(email)
				});
			}

			res.status(200).json({ id: session.id });
		}

		res.status(500).json({ success: false });
	} catch (error) {
		console.log(error.message);
	}
};
