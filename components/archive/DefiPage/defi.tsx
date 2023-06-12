import Carousel from '@/Carousel/Carousel';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';
import styles from './Defi.module.scss';

const DeFi: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based DeFi</title>
				<link rel="icon" href="/favicons/bd.png" />
			</Head>
			<Navbar />
			<Carousel />
			<div className={styles['mission-statement']}>
				<h4 className={styles.title}>Mission Statement</h4>
				<i className={styles['mission-text']}>
					We at Based DeFi eagerly endeavor to contribute to the rising and critically important future of the decentralized finance networks of
					cryptocurrencies.
				</i>
			</div>
		</div>
	);
};

export default DeFi;
