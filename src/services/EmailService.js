import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const fromEmail =  process.env.DEFAULT_FROM;

const personalEmail = process.env.PERSONAL_EMAIL;

const WebUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

const sendOrderSuccessEmail = async(toEmail) => {
	try {
		await sendgrid.send({
			to: toEmail,
			cc: fromEmail,
			from: fromEmail,
			subject: "Vásárlás megerősítése - Miskolci Egyetemi Napok - MEN",
			html: `<div>
             <p>Köszönjük vásárlásod!</p>
			 <p>Vásárlásod részleteit az alábbi linken találod (bejelentkezés szükséges):</p>
             <p><a target='_blank' href="${WebUrl}/profile">${WebUrl}/profile</a></p>
             <p>Üdvözlettel,</p>
			 <p>A MEN csapata</p>
            </div>`,
		});
		return true;
	} catch (error) {

		console.error(error.message);
		if (error.response) {
			console.error(error.response.body);
		}
		return false;
	}
};

const sendContactMail = async(email, message) => {
	try {
		await sendgrid.send({
			to: fromEmail,
			from: fromEmail,
			subject: "Új kapcsolattartási e-mail! - Miskolci Egyetemi Napok - MEN",
			html: `<div>
             <p>Új kapcsolatfelvételi űrlapot küldtek be:</p>
             <p>Email: ${email}</p>
             <p>Üzenet: ${message}</p>
             <p>Üdvözlettel,</p>
			 <p>A MEN csapata</p>
            </div>`,
		});
		
		return true;
	} catch (error) {

		console.error(error.message);
		if (error.response) {
			console.error(error.response.body);
		}
		return false;
	}
};

export {
	sendOrderSuccessEmail,
	sendContactMail
};

