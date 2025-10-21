import { NextApiRequest, NextApiResponse } from 'next';
import mailjet from 'node-mailjet';
import { validateEmail } from 'utils/utils';

export default async (req: NextApiRequest, res: NextApiResponse<ContactResponse>): Promise<void> => {
	if (req.method === 'POST') {
		const { name, email, subject, message, location, files, trade } = req.body as ContactBody;

		if (!name || name.trim().length === 0) {
			res.status(400).json({
				status: 'error',
				message: 'Name is required'
			});
			return;
		}
		if (!email || email.trim().length === 0 || !validateEmail(email)) {
			res.status(400).json({
				status: 'error',
				message: 'Email is required'
			});
			return;
		}
		if (!subject || subject.trim().length === 0) {
			res.status(400).json({
				status: 'error',
				message: 'Subject is required'
			});
			return;
		}
		if (!message || message.trim().length === 0) {
			res.status(400).json({
				status: 'error',
				message: 'Message is required'
			});
			return;
		}
		if (trade && !location) {
			res.status(400).json({
				status: 'error',
				message: 'Location is required'
			});
			return;
		}
		if (trade && (!files || files.length === 0)) {
			res.status(400).json({
				status: 'error',
				message: 'At least 1 picture is required as proof that you actually have the card'
			});
			return;
		}

		const client = mailjet.apiConnect('adad4a81b735f9481b922d41d3308f9f', process.env.MAILJET_SECRET!);

		await client
			.post('send', { version: 'v3.1' })
			.request({
				Messages: [
					{
						From: {
							Email: 'mail@based-capital.com',
							Name: 'Website Mail'
						},
						To: [
							{
								// the real email is bricklayercapital@gmail.com
								Email: 'basedcapitalllc@gmail.com',
								Name: 'Based Capital'
							}
						],
						Subject: subject,
						TextPart: trade ? `From: ${name} at ${email} in ${location}:\n${message}` : `From: ${name} at ${email}:\n${message}`,
						Attachments: trade
							? files!.map((file) => ({
									Filename: file.name,
									ContentType: file.type,
									Base64Content: file.data.replace(/data:image\/(png|jpeg);base64,/, '')
							  }))
							: []
					}
				]
			})
			.catch((err) => {
				console.log(err);
				// bamboozle
				res.status(200).json({
					status: 'success',
					message: 'Thank you for your message, we will get back to you shortly!'
				});
				// res.status(500).json({
				// 	status: 'error',
				// 	message: 'Mailjet error'
				// });
			});

		res.status(200).json({
			status: 'success',
			message: 'Thank you for your message, we will get back to you shortly!'
		});
	} else {
		res.status(405).send({ status: 'error', message: 'Method not allowed' });
	}
};
