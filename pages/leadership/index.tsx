import styles from '$/leadership/Index.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import members from 'utils/data/members';

const Members: NextPage = () => {
	const [smol, setSmol] = useState<boolean>(true);

	useEffect(() => {
		setSmol(window.innerWidth <= 588);

		const resizeListener = () => {
			setSmol(window.innerWidth <= 588);
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []);

	return smol ? (
		<div className={styles.main}>
			<Head>
				<title>Brick Layer Capital | Leadership</title>
			</Head>
			<Navbar />
			{members.map((member) => (
				<div key={member.name} className={styles['member-card']}>
					<div className={styles['picture-wrapper']}>
						<img className={styles.picture} src={`pictures/${member.shortName}.jpg`} alt="Picture Missing :(" />
					</div>
					<Link href="/leadership/[member]" as={`/leadership/${member.shortName}`}>
						<a className={styles.name}>{member.name}</a>
					</Link>
					<p className={styles.position}>
						{member.position}
						{member.linkedIn && (
							<span>
								<a className={styles.linkedin} href={member.linkedIn} target="_blank" rel="noreferrer noopener">
									LinkedIn
								</a>
							</span>
						)}
					</p>
					<p className={styles.desc}>{member.shortDescription}</p>
				</div>
			))}
		</div>
	) : (
		<div className={styles.main}>
			<Head>
				<title>Brick Layer Capital | Leadership</title>
			</Head>
			<Navbar />
			{members.map((member) => (
				<div key={member.name} className={styles['member-card']}>
					<div className={styles['picture-wrapper']}>
						<img className={styles.picture} src={`pictures/${member.shortName}.jpg`} alt="Picture Missing :(" />
					</div>
					<div className={styles.text}>
						<Link href="/leadership/[member]" as={`/leadership/${member.shortName}`}>
							<a className={styles.name}>{member.name}</a>
						</Link>
						<p className={styles.position}>
							{member.position}
							{member.linkedIn && (
								<span>
									<a className={styles.linkedin} href={member.linkedIn} target="_blank" rel="noreferrer noopener">
										LinkedIn
									</a>
								</span>
							)}
						</p>
						<p className={styles.desc}>{member.shortDescription}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export const getStaticProps: GetStaticProps = () => ({ props: {} });

export default Members;

