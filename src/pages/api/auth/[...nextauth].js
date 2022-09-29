import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

// Endpoint -> /api/[...nextauth] -> login api endpoint

// next-auth package
export default NextAuth({
	session: {
		jwt: true,
	},
	// options to login
	providers: [
		// email + password login (CredentialsProviders - NextAuth)
		CredentialsProviders({
			// credentials - frontend input (email + password) - Login page
			async authorize(credentials) {
				// connect to db
				const client = await connectToDatabase();

				// get users mongodb function - db.collection
				const usersCollection = client.db().collection("users");

				// get user mongodb function - findOne by email
				const user = await usersCollection.findOne({
					email: credentials.email,
				});

				// no user -> error
				if (!user) {
					client.close();
					throw new Error("Email cím nem található!");
				}

				// check the password
				const isValid = await verifyPassword(
					credentials.password, // input paswword
					user.password // database user password
				);

				// not valid -> error
				if (!isValid) {
					client.close();
					throw new Error("A jelszó hibás!");
				}

				// close connection to db
				client.close();

				return { 
					email: user.email,
					name: user.name,
					orders: user.orders
				 };
			},
		}),
	],
});