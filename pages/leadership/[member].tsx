import styles from '$/leadership/Member.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import members from 'utils/data/members';

interface Props {
	member: Member;
}

const Member: NextPage<Props> = ({ member }) => {
	const [smol, setSmol] = useState<boolean>(true);

	useEffect(() => {
		setSmol(window.innerWidth <= 911);

		const resizeListener = () => {
			setSmol(window.innerWidth <= 911);
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []);

	return smol ? (
		<div className={styles.main}>
			<Head>
				<title>{`Brick Layer Capital | ${member.name}`}</title>
			</Head>
			<Navbar />
			<div className={styles.card}>
				<div className={styles['picture-wrapper']}>
					<img className={styles.picture} src={`/pictures/${member.shortName}.jpg`} alt="Picture Missing :(" />
				</div>
				<div className={styles.header}>
					<h4 className={styles.name}>{member.name}</h4>
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
				</div>
				<div className={styles['desc-wrapper']}>
					{member.description.split('\n').map((desc, i) => (
						<p key={i} className={styles.desc}>
							{desc}
						</p>
					))}
				</div>
			</div>
		</div>
	) : (
		<div className={styles.main}>
			<Head>
				<title>{`Brick Layer Capital | ${member.name}`}</title>
			</Head>
			<Navbar />
			<div className={styles.card}>
				<div className={styles['picture-wrapper']}>
					<img className={styles.picture} src={`/pictures/${member.shortName}.jpg`} alt="Picture Missing :(" />
				</div>
				<div className={styles.text}>
					<h4 className={styles.name}>{member.name}</h4>
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
					{member.description.split('\n').map((desc, i) => (
						<p key={i} className={styles.desc}>
							{desc}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props, { member: string }> = ({ params }) => {
	return {
		props: {
			member: members.find((member) => member.shortName === params!.member)!
		}
	};
};

export const getStaticPaths: GetStaticPaths<{ member: string }> = () => {
	return {
		paths: members.map((member) => ({ params: { member: member.shortName } })),
		fallback: false
	};
};

export default Member;

