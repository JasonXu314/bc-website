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
				<Statement date="06/18/2023" branch="Capital" first>
					We are pleased to announce the creation of Bricklayer Capital.
				</Statement>
			</div>
		</div>
	);
};

export default Statements;

