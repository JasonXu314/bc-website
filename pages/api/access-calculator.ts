import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	if (req.body.secret === process.env.CALCULATOR_SECRET) {
		res.status(200).end();
	} else {
		res.status(403).end();
	}
};
