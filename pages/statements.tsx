import styles from '$/Statements.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Statements: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based Capital | Statements</title>
			</Head>
			<Navbar />
			<div className={styles.content}>
				<h1 className={styles.title}>Company Statements</h1>
				<div className={styles.statement}>
					<h4 className={styles.date}>07/27/2021</h4>
					<div className={styles.part}>
						We regret to inform the public that [REDACTED], ex-CFO and ex-CAO has departed from our company within the past month. We have enjoyed
						his presence and his valuable contributions to our group and we jointly wish him well in the future.
					</div>
					<div className={styles.signature}>- The Based Capital Team</div>
				</div>
				<div className={styles.statement}>
					<h4 className={styles.date}>07/20/2022</h4>
					<div className={styles.part}>
						This July 4th, we celebrated the successful conclusion of our first year of operations. We hope to continue our growth into this coming
						year and continue to eagerly strive for excellence in our operations!
					</div>
					<div className={styles.signature}>- The Based Capital Team</div>
				</div>
			</div>
		</div>
	);
};

export default Statements;
