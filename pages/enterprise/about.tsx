import styles from '$/enterprise/About.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';

const About: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based Enterprise | About Us</title>
				<link rel="icon" href="/favicons/blce.ico" />
			</Head>
			<Navbar logo="/logos/blce.svg" />
			<div className={styles.content}>
				<h1 className={styles.title}>Based Enterprise</h1>
				<p>
					Based Enterprise is the venture capital branch of Brick Layer Capital, dedicated to investing in the future of human standards. We are
					currently engaged with Rabbi Wine in real estate ventures in the Galilee region.
				</p>
			</div>
		</div>
	);
};

export default About;

