import { connectToDatabase } from "../../../lib/db";

// Endpoint -> /api/orders/create-order -> create order api endpoint

async function handler(req, res) {
	// check the method of the http request, if not throws error
	if (req.method !== "POST") {
		return;
	}

	// get data from request body (input on frontend)
	const data = req.body;

	// products
	const { email, products } = JSON.parse(data);

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

	// get result - mongodb function - updateMany
	const result = await db.collection("users").updateMany(
		{ email: email },
		{ $push: { "orders": products } }
	);

	// success - send message
	res.status(201).json({ message: "Vásárlás létrehozva!", result });
	client.close();
}

export default handler;