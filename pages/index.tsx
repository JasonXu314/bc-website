import styles from '$/Index.module.scss';
import Navbar from '@/Navbar/Navbar';
import { useIntersection } from '@mantine/hooks';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Index: NextPage = () => {
	const { entry, ref } = useIntersection();

	return (
		<div className={styles.main}>
			<Head>
				<title>Based Capital</title>
			</Head>
			<Navbar />
			<div className={styles.splash} ref={ref}>
				<h1 className={styles['splash-left'] + (entry?.isIntersecting ? ' ' + styles.visible : '')}>Based</h1>
				<h1 className={styles['splash-right'] + (entry?.isIntersecting ? ' ' + styles.visible : '')}>Capital</h1>
			</div>
		</div>
	);
};

export default Index;
