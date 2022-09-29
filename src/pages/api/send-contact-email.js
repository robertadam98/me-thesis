import { sendContactMail } from "../../services/EmailService";

async function handler(req, res) {
	const { email, message } = req.body;
	try {
		await sendContactMail(email, message);
		
		res.status(200).json({success: true });
	} catch (error) {
		console.log("error in server:", error.message);
	}
}

export default handler;