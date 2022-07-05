import axios from 'axios';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button/Button';
import Dropdown from '../components/Dropdown/Dropdown';
import Input from '../components/Input/Input';
import Navbar from '../components/Navbar/Navbar';
import styles from '../sass/Calculator.module.scss';
import { daysInMonth, getRate, SHAREHOLDERS } from '../utils/utils';

const monthOptions = [
	{ name: 'January', value: 0 },
	{ name: 'February', value: 1 },
	{ name: 'March', value: 2 },
	{ name: 'April', value: 3 },
	{ name: 'May', value: 4 },
	{ name: 'June', value: 5 },
	{ name: 'July', value: 6 },
	{ name: 'August', value: 7 },
	{ name: 'September', value: 8 },
	{ name: 'October', value: 9 },
	{ name: 'November', value: 10 },
	{ name: 'December', value: 11 }
];

const Calculator: NextPage = () => {
	const [wattage, setWattage] = useState<number>(0);
	const [eagerWattage, setEagerWattage] = useState<string | null>(null);
	const [revenue, setRevenue] = useState<number>(0);
	const [eagerRevenue, setEagerRevenue] = useState<string | null>(null);
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [ethPrice, setEthPrice] = useState<number | null>(null);

	const [payouts, setPayouts] = useState<Payouts | null>(null);
	const powerCosts = useMemo<Payouts | null>(
		() =>
			wattage
				? {
						payoutUSD: wattage * 24 * daysInMonth(month) * getRate(month),
						payoutETH: (wattage * 24 * daysInMonth(month) * getRate(month)) / ethPrice!
				  }
				: null,
		[wattage, ethPrice, month]
	);
	const toInvestors = useMemo<Payouts | null>(
		() => (payouts ? { payoutUSD: payouts.payoutUSD * 0.72, payoutETH: payouts.payoutETH * 0.72 } : null),
		[payouts]
	);

	useEffect(() => {
		axios
			.get<EthPriceResponse>(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_TOKEN}`)
			.then((res) => {
				setEthPrice(Number(res.data.result.ethusd));
			});
	}, []);

	return (
		<div className={styles.main}>
			<Head>
				<title>Payout Calculator</title>
			</Head>
			<Navbar />
			<div className={styles.content}>
				<Input
					onChange={(evt) => {
						setEagerWattage(evt.target.value);
					}}
					onBlur={(evt) => {
						const parsedVal = Number(evt.target.value);
						if (!Number.isNaN(parsedVal)) {
							setWattage(parsedVal);
						}
						setEagerWattage(null);
					}}
					value={eagerWattage ?? wattage}
					label="Rig Wattage (KWH)"
				/>
				<Input
					onChange={(evt) => {
						setEagerRevenue(evt.target.value);
					}}
					onBlur={(evt) => {
						const parsedVal = Number(evt.target.value);
						if (!Number.isNaN(parsedVal)) {
							setRevenue(parsedVal);
						}
						setEagerRevenue(null);
					}}
					value={eagerRevenue ?? revenue}
					label="Approx. Revenue (ETH)"
				/>
				<Dropdown
					options={monthOptions}
					onChange={(evt) => {
						setMonth(parseInt(evt.target.value));
					}}
					value={month}
				/>
				<Button
					onClick={() => {
						if (ethPrice) {
							const payoutUSD = revenue * ethPrice;
							const payoutETH = revenue;

							setPayouts({ payoutUSD, payoutETH });
						}
					}}>
					Generate Report
				</Button>
				{payouts && (
					<table className={styles.table}>
						<thead>
							<tr>
								<td>
									<h4>Shareholder</h4>
								</td>
								<td>
									<h4>Earnings (USD)</h4>
								</td>
								<td>
									<h4>Earnings (ETH)</h4>
								</td>
								<td>
									<h4>ETH Address</h4>
								</td>
							</tr>
						</thead>
						<tbody>
							{SHAREHOLDERS.map((holder, i) => (
								<tr key={i} className={styles['shareholder-card']}>
									<td>
										<h4>{holder.name}</h4>
									</td>
									<td>
										$
										{(toInvestors!.payoutUSD * holder.owned + (holder.name === 'Jacob Stolker' ? 0.03 * payouts.payoutUSD : 0)).toFixed(6)}
									</td>
									<td>
										{(toInvestors!.payoutETH * holder.owned + (holder.name === 'Jacob Stolker' ? 0.03 * payouts.payoutETH : 0)).toFixed(6)}
									</td>
									<td
										className={styles.address}
										onClick={() => {
											navigator.clipboard.writeText(holder.address);
										}}>
										{holder.address}
									</td>
								</tr>
							))}
							<tr className={styles['shareholder-card']}>
								<td>
									<h4>Operating Fund</h4>
								</td>
								<td>${(payouts.payoutUSD * 0.25 - powerCosts!.payoutUSD).toFixed(6)}</td>
								<td>{(payouts.payoutETH * 0.25 - powerCosts!.payoutETH).toFixed(6)}</td>
								<td
									className={styles.address}
									onClick={() => {
										navigator.clipboard.writeText('0x90Be6Cd7992358426eF162CC1792d7aa4175243E');
									}}>
									0x90Be6Cd7992358426eF162CC1792d7aa4175243E
								</td>
							</tr>
							<tr className={styles['shareholder-card']}>
								<td>
									<h4>Power Costs</h4>
								</td>
								<td>${powerCosts!.payoutUSD.toFixed(6)}</td>
								<td>{powerCosts!.payoutETH.toFixed(6)}</td>
							</tr>
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default Calculator;
