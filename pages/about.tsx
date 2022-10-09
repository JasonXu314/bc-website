import styles from '$/About.module.scss';
import { useIntersection } from '@mantine/hooks';
import Head from 'next/head';
import { NextPage } from 'next/types';
import Navbar from '../components/Navbar/Navbar';

const About: NextPage = () => {
	// TODO: fix responsive layout

	const { entry: section1, ref: ref1 } = useIntersection({ threshold: 0.4 });
	const { entry: section2, ref: ref2 } = useIntersection({ threshold: 0.4 });
	const { entry: section3, ref: ref3 } = useIntersection({ threshold: 0.4 });
	const { entry: section4, ref: ref4 } = useIntersection({ threshold: 0.4 });
	const { entry: section5, ref: ref5 } = useIntersection({ threshold: 0.4 });
	const { entry: section6, ref: ref6 } = useIntersection({ threshold: 0.4 });
	const { entry: section7, ref: ref7 } = useIntersection({ threshold: 0.4 });
	const { entry: section8, ref: ref8 } = useIntersection({ threshold: 0.4 });
	const { entry: section9, ref: ref9 } = useIntersection({ threshold: 0.4 });

	return (
		<div className={styles.main}>
			<Head>
				<title>Based Capital | About Us</title>
			</Head>
			<Navbar />
			<section ref={ref1} className={styles.section + ' ' + styles['section-1'] + (section1?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>Founding</h1>
					<div className={styles.text}>
						<span className={styles.date}>4/22:</span> A group of enterprising high school students decide to pool together their talent to mine
						Ethereum.
					</div>
				</div>
			</section>
			<section ref={ref2} className={styles.section + ' ' + styles['section-2'] + (section2?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>4/30</h1>
					<div className={styles.text}>Our first batch of graphics cards are acquired, marking the effective start of our time in business.</div>
				</div>
			</section>
			<section ref={ref3} className={styles.section + ' ' + styles['section-3'] + (section3?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>Second Campout</h1>
					<div className={styles.text}>
						<span className={styles.date}>4/22:</span> Camping out overnight, we acquire our second, third, and fourth RTX 3080s, allowing our rig
						to be properly assembled
					</div>
				</div>
			</section>
			<section ref={ref4} className={styles.section + ' ' + styles['section-4'] + (section4?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>Operations Begin</h1>
					<div className={styles.text}>The first complete iteration of our mining rig goes online, making 520 Mh/s, equaling roughly $32 a day.</div>
				</div>
			</section>
			<section ref={ref5} className={styles.section + ' ' + styles['section-5'] + (section5?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>7/20</h1>
					<div className={styles.text}>
						Camping overnight at Best Buy, we manage to purchase a batch of 4 founder&apos;s edition 3080s and 1 3060, a 50% increase in mining
						power.
					</div>
				</div>
			</section>
			<section ref={ref6} className={styles.section + ' ' + styles['section-6'] + (section6?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>8/10</h1>
					<div className={styles.text}>
						Finalizing the card assortment, the 3 rigs are assembled in their current state, with 2 dedicated to 3080s, and a third for 3060s.
						Total hashrate exceeds 1.3 Gh/s, or over $80 a day.
					</div>
				</div>
			</section>
			<section ref={ref7} className={styles.section + ' ' + styles['section-7'] + (section7?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>June&nbsp;&apos;22</h1>
					<div className={styles.text}>Discussion begins on expanding the business beyond cryptocurrency mining.</div>
				</div>
			</section>
			<section ref={ref8} className={styles.section + ' ' + styles['section-8'] + (section8?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>8/4</h1>
					<div className={styles.text + ' ' + styles.dark}>
						Based Capital officially becomes a holding company, and Based Enterprise LLC. is born!
					</div>
				</div>
			</section>
			<section ref={ref9} className={styles.section + ' ' + styles['section-9'] + (section9?.isIntersecting ? ' ' + styles.active : '')}>
				<div className={styles.inner}>
					<h1 className={styles.heading}>9/29</h1>
					<div className={styles.text}>
						Based LLC finalizes its first business venture, a partnership with Rabbi Zevi Wineberg Shlit&quot;a to fund his new book.
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
