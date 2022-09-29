// helper to auth backend

// import function from package
import { hash, compare } from "bcryptjs";

// secure password
export async function hashPassword(password) {
	// bcryptjs function - hash
	const hashedPassword = await hash(password, 12);
	return hashedPassword;
}

// check password
export async function verifyPassword(password, hashedPassword) {
	// bcryptjs function - compare
	const isValid = await compare(password, hashedPassword);
	return isValid;
}

// create user function
export async function createUser(email, password, name) {
	// Calls backend endpoint - /api/auth/signup
	const response = await fetch("/api/auth/signup", {
		// declare method
		method: "POST",
		// req.body
		body: JSON.stringify({ email, password, name }),
		// http header - search google
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!");
	}

	return data;
}