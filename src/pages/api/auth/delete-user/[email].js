import { connectToDatabase } from "../../../../lib/db";

// Endpoint -> /api/auth/delete-user/test@test.test -> delete user by api endpoint

async function handler(req, res) {
	// check the method of the http request, if not throws error
	if (req.method !== "DELETE") {
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
		res.status(422).json({ message: "Felhasználó nem található!" });
		client.close();
		return;
	}

	// get result - mongodb function - deleteOne
	const result = await db.collection("users").deleteOne({
		email: email
	});

	// success - send message
	res.status(201).json({ message: "Felhasználó törölve!" });
	client.close();
}

export default handler;