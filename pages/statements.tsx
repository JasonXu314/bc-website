import styles from '$/Statements.module.scss';
import Navbar from '@/Navbar/Navbar';
import Statement from '@/Statement/Statement';
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
				<Statement date="09/19/2022" branch="Enterprise">
					After much hard work, we are excited to announce the beginning of our first joint venture! Representatives of Based Enterprise have
					negotiated an agreement with Rabbi Zevi Wineberg Shlit&quot;a to fund the printing of his new book, &ldquo;Baal Shem Tov&rdquo;. We wish
					him success in his work as an author and religious leader, and are excited to work with him!
				</Statement>
				<Statement date="08/04/2022" branch="DeFi">
					We are pleased to announce that as part of our expansion plan, our cryptocurrency operations have been moved to a subsidiary named Based
					DeFi, short for &ldquo;Decentralized Finance&rdquo;. Our parent company will retain the name of Based Capital, and will soon be involved in
					several exciting new ventures!
				</Statement>
				<Statement date="07/20/2022" branch="Capital">
					This July 4th, we celebrated the successful conclusion of our first year of operations. We hope to continue our growth into this coming
					year and continue to eagerly strive for excellence in our operations!
				</Statement>
				<Statement date="07/27/2021" branch="Capital">
					We regret to inform the public that our ex-CFO and ex-CAO has departed from our company within the past month. His role will be taken over
					by Matthew Levy. We have enjoyed his presence and his valuable contributions to our group and we jointly wish him well in the future.
				</Statement>
			</div>
		</div>
	);
};

export default Statements;
