import styles from '$/Index.module.scss';
import Navbar from '@/Navbar/Navbar';
import { Center } from '@mantine/core';
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
				<div className={styles['splash-row']}>
					<h1 className={styles['splash-left'] + (entry?.isIntersecting ? ' ' + styles.visible : '')}>Brick</h1>
					<h1 className={styles['splash-middle'] + (entry?.isIntersecting ? ' ' + styles.visible : '')}>Layer</h1>
					<h1 className={styles['splash-right'] + (entry?.isIntersecting ? ' ' + styles.visible : '')}>
						Capital<small className={styles.llc}>, LLC.</small>
					</h1>
				</div>
				<Center>
					<span className={styles['mission-statement'] + (entry?.isIntersecting ? ' ' + styles.visible : '')}>
						Building the infrastructure of tomorrow&apos;s world
					</span>
				</Center>
			</div>
		</div>
	);
};

export default Index;

