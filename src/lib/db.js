// helper files
// import db client from package
import { MongoClient } from "mongodb";

// function to connect to db
export async function connectToDatabase() {
	// mongodb function - .connect() -  get variables from environment variables (.env.local)
	const client = await MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return client;
}