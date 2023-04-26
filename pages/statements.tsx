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
				<Statement date="04/24/2023" branch="Capital">
					Yesterday was the 2nd anniversary of the conceptual foundation of our company. The name &ldquo;Based Capital&rdquo; didn&apos;t arise until
					our establishment had officially unionized. Yet, our team all shared the same aspirations in wanting to seize the opportunities offered by
					mining cryptocurrencies. Since our initial congregations and investments, Based Capital has become an international investment vehicle.
					<br />
					We, Based Capital, would like to direct a great thank you to our founder, <strong>Jacob Stolker</strong>, and all those who have been
					involved with our institution. Our entire group&apos;s teamwork and collaboration have allowed our organization to achieve many business
					accolades over these past two years. Subsequently, our mindset pushes us forward as we recognize that Based Capital&apos;s journey has just
					begun. Here is to another year of success -- may this year be the most triumphant of them all!
				</Statement>
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
