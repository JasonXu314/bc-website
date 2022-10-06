export const SHAREHOLDERS: Shareholder[] = [
	{ name: 'Jasar Ali', address: '0x264fa059F9c02eE53a8B493315899BD3B934c84E', owned: 0.2809036999 },
	{ name: 'Samuel Garza', address: '0x0bAd8c5e188B44636e81813C9d0c744a43FC3098', owned: 0.0169952413 },
	{ name: 'Matthew Levy', address: '0xF21a6097Fdb54D010fE554daBE0A30692b32d509', owned: 0.4300293565 },
	{ name: 'Louis Li', address: '0x0EB1870072Ef71ba56edA95C0a2C478F6e53DBE6', owned: 0.10909463 },
	{ name: 'Jake Page', address: '0xd2d00EB4864BDFA1f753abbFBdf6D4cfb77c32fB', owned: 0.013596193 },
	{ name: 'Jacob Stolker', address: '0x9aB6a2e276C15C6535CaA855C33aE0c1aBfed33D', owned: 0.1323856379 },
	{ name: 'Jason Xu', address: '0x879C0d3529c135d7794892C356FeB7346f621EF0', owned: 0.0169952413 }
];

const EMAIL_REGEX =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export function daysInMonth(month: number): number {
	switch (month) {
		case 0:
		case 2:
		case 4:
		case 6:
		case 7:
		case 9:
		case 11:
			return 31;
		case 1:
			return new Date().getFullYear() % 4 === 0 ? 29 : 28;
		case 3:
		case 5:
		case 8:
		case 10:
			return 30;
		default:
			throw new Error('Invalid month');
	}
}

export function getRate(month: number): number {
	return month < 10 && month >= 5 ? 0.1269 : 0.05;
}

export function validateEmail(email: string): boolean {
	return EMAIL_REGEX.test(email);
}
