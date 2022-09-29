import { connectToDatabase } from "../../../../lib/db";

// Endpoint -> /api/orders/get-orders/test@test.test -> get orders by email from db api endpoint

async function handler(req, res) {
	// check the method of the http request, if not throws error
	if (req.method !== "GET") {
		return;
	}

	// get data from request query -> this comes from the URL
	const { email } = req.query;

	// connecting to db
	const client = await connectToDatabase();

	// declare db
	const db = client.db();

	// check if user exists - mongodb function - findOne
	const user = await db.collection("users").findOne({ email: email });

	// return message if user exists
	if (!user) {
		res.status(422).json({ message: "Szerverhiba!" });
		client.close();
		return;
	}

	// success - send orders of the user
	res.send({ orders: user.orders });
	client.close();
}

export default handler;