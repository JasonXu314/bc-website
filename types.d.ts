interface EthPriceResponse {
	status: string;
	message: string;
	result: {
		ethbtc: string;
		ethbtc_timestamp: string;
		ethusd: string;
		ethusd_timestamp: string;
	};
}

interface Shareholder {
	name: string;
	address: string;
	owned: number;
}

interface Payouts {
	payoutUSD: number;
	payoutETH: number;
}

interface DropdownOption<T> {
	name: string;
	value: T;
}

interface Member {
	name: string;
	shortName: string;
	shortDescription: string;
	description: string;
	position: string;
	linkedIn?: string;
	resume?: boolean;
}

interface ContactBody {
	trade: boolean;
	name: string;
	email: string;
	subject: string;
	message: string;
	location?: string;
	files?: Img[];
}

type ContactResponse = SuccessfulContactResponse | ErrorContactResponse;

interface SuccessfulContactResponse {
	status: 'success';
	message: string;
}

interface ErrorContactResponse {
	status: 'error';
	message: string;
}

interface Img {
	name: string;
	data: string;
	type: string;
}
