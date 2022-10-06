import styles from '$/Enterprise.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';

const DeFi: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based Enterprise</title>
			</Head>
			<Navbar />
			<div className={styles['description']}>
				<h4 className={styles.title}>Based Enterprise</h4>
				<i className={styles['text']}>
					Based Enterprise is the business arm of Based Capital, LLC. focused on venture capital and joint private enterprise. Expect more soon!
				</i>
			</div>
		</div>
	);
};

export default DeFi;
