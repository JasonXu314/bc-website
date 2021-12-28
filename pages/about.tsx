import styles from '$/About.module.scss';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { useRef, useState } from 'react';
import { roundDown, roundUp } from 'utils/utils';
import Navbar from '../components/Navbar/Navbar';

const About: NextPage = () => {
	const divRef = useRef<HTMLDivElement | null>(null);
	const [img, setImg] = useState<number>(typeof window === 'undefined' ? 0 : roundUp((divRef.current?.scrollTop || 0) / window.innerHeight));

	return (
		<div
			className={styles.main}
			ref={(div) => (divRef.current = div)}
			onWheel={(evt) =>
				setImg(evt.deltaY > 0 ? roundUp(divRef.current!.scrollTop / window.innerHeight) : roundDown(divRef.current!.scrollTop / window.innerHeight))
			}>
			<Head>
				<title>Based Capital | About Us</title>
			</Head>
			<Navbar />
			<section className={styles.section + ' ' + styles['section-1'] + (img === 0 ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>Founding</h1>
					<div className={styles.text}>
						<span className={styles.date}>4/22:</span> A group of enterprising high school students decide to pool together their talent to mine
						Ethereum.
					</div>
				</div>
			</section>
			<section className={styles.section + ' ' + styles['section-2'] + (img === 1 ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>4/30</h1>
					<div className={styles.text}>Our first batch of graphics cards are acquired, marking the effective start of our time in business.</div>
				</div>
			</section>
			<section className={styles.section + ' ' + styles['section-3'] + (img === 2 ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>Second Campout</h1>
					<div className={styles.text}>
						<span className={styles.date}>4/22:</span> Camping out overnight, we acquire our second, third, and fourth RTX 3080s, allowing our rig to
						be properly assembled
					</div>
				</div>
			</section>
			<section className={styles.section + ' ' + styles['section-4'] + (img === 3 ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>Operations Begin</h1>
					<div className={styles.text}>The first complete iteration of our mining rig goes online, making 520 Mh/s, equaling roughly $32 a day.</div>
				</div>
			</section>
			<section className={styles.section + ' ' + styles['section-5'] + (img === 4 ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>7/20</h1>
					<div className={styles.text}>
						Camping overnight at Best Buy, we manage to purchase a batch of 4 founder&apos;s edition 3080s and 1 3060, a 50% increase in mining power.
					</div>
				</div>
			</section>
			<section className={styles.section + ' ' + styles['section-6'] + (img === 5 ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>8/10</h1>
					<div className={styles.text}>
						Finalizing the card assortment, the 3 rigs are assembled in their current state, with 2 dedicated to 3080s, and a third for 3060s. Total
						hashrate exceeds 1.3 Gh/s, or over $80 a day.
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
