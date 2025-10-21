import styles from '$/Statements.module.scss';
import Navbar from '@/Navbar/Navbar';
import Statement from '@/Statement/Statement';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Statements: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Brick Layer Capital | Statements</title>
			</Head>
			<Navbar />
			<div className={styles.content}>
				<h1 className={styles.title}>Company Statements</h1>
				<Statement date="08/27/2025" branch="Capital" first>
					We are pleased to announce our first contract with Zhao Lab at Washington University in St. Louis. It is our honor to work with a
					prestigious academic institution such as WUSTL, and we look forward to continuing our important auxiliary work going forward.
				</Statement>
				<Statement date="06/18/2023" branch="Capital">
					We are pleased to announce the creation of Bricklayer Capital.
				</Statement>
			</div>
		</div>
	);
};

export default Statements;
