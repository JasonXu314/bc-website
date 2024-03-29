import styles from '$/enterprise/GalileanEstates.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';

const GalileanEstates: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based Enterprise | Galilean Estates</title>
				<link rel="icon" href="/favicons/blce.ico" />
			</Head>
			<Navbar logo="/logos/blce.svg" />
			<div className={styles.content}>
				<h1 className={styles.title}>
					Galilean Estates - <small>Investing in the Galilee, one property at a time</small>
				</h1>
				<p>
					Galilean Estates is the real estate firm, partially owned by Based Enterprise, that conducts our business operations on the ground in the
					Galilee.
				</p>
				<p>
					We seek to increase human development and living standards in the often overlooked Galilean region of Northern Israel. Home to many Arabs,
					Druze, and increasingly Jews, the Galilee is set to be the stage for a new chapter of rapid human development in the diverse Levant.
				</p>
			</div>
		</div>
	);
};

export default GalileanEstates;

