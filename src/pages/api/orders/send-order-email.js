import { sendOrderSuccessEmail } from "../../../services/EmailService";

async function handler(req, res) {
	const email = req.body;
	console.log(email);
	try {
		await sendOrderSuccessEmail(email);
		
		res.status(200).json({success: true });
	} catch (error) {
		console.log("error in server:", error.message);
	}
}

export default handler;