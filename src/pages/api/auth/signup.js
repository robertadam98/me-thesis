import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

// Endpoint -> /api/auth/signup -> register api endpoint

async function handler(req, res) {
	// check the method of the http request, if not throws error
	if (req.method !== "POST") {
		return;
	}

	// get data from request body (input on frontend)
	const data = req.body;

	const { email, password, name } = data;

	// error handling
	if (
		!email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
	) {
		res.status(422).json({
			message:
        "A jelszónak legalább 7 karakter hosszúnak kell lennie.",
		});
		return;
	}

	// connecting to db
	const client = await connectToDatabase();

	// declare db
	const db = client.db();

	// check if user exists - mongodb function - findOne
	const existingUser = await db.collection("users").findOne({ email: email });

	// return message if user exists
	if (existingUser) {
		res.status(422).json({ message: "A felhasználó már létezik!" });
		client.close();
		return;
	}

	// secure/hash password
	const hashedPassword = await hashPassword(password);

	// get result - mongodb function - insertOne
	const result = await db.collection("users").insertOne({
		email: email,
		password: hashedPassword,
		name: name,
		orders: []
	});

	// success - send message
	res.status(201).json({ message: "Felhasználó létrehozva!" });
	client.close();
}

export default handler;