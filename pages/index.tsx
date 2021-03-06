import styles from '$/Index.module.scss';
import Carousel from '@/Carousel/Carousel';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Index: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based Capital</title>
			</Head>
			<Navbar />
			<Carousel />
			<div className={styles['mission-statement']}>
				<h4 className={styles.title}>Mission Statement</h4>
				<i className={styles['mission-text']}>
					We at Based Capital eagerly endeavor to contribute to the rising and critically important future of the decentralized finance networks of
					cryptocurrencies.
				</i>
			</div>
		</div>
	);
};

export default Index;
