import { Stack } from '@mantine/core';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
	const [smol, setSmol] = useState<boolean>(true);
	const [closed, setClosed] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		Router.beforePopState(() => {
			setClosed(true);
			return true;
		});
	}, []);

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

	return (
		<nav className={styles.main}>
			<Link href="/">
				<a className={styles['logo-link']}>
					{router.pathname === '/defi' ? (
						<img src="/logos/bd.svg" className={styles.logo} alt="logo" />
					) : router.pathname === '/enterprise' ? (
						<img src="/logos/be.svg" className={styles.logo} alt="logo" />
					) : (
						<img src="/logos/bc.svg" className={styles.logo} alt="logo" />
					)}
				</a>
			</Link>
			<ul className={styles.list + (closed ? ' ' + styles.closed : '')}>
				{smol && (
					<li className={styles['chevron-buffer']}>
						<img
							className={styles.chevron}
							src={closed ? '/chevron-down.svg' : '/chevron-up.svg'}
							onClick={() => setClosed(!closed)}
							alt="chevron"
						/>
					</li>
				)}
				{/* <li className={styles.link}>
					<Link href="/about">
						<a className={styles['link-text']}>About Us</a>
					</Link>
				</li> */}
				{smol ? (
					<>
						<li className={styles.link}>
							<Link href="/enterprise">
								<a className={styles['link-text']}>Based Enterprise</a>
							</Link>
						</li>
					</>
				) : (
					<li className={`${styles.link} ${styles.dropdown}`}>
						<Stack spacing={0}>
							<span className={styles['link-text']}>Our Subsidiaries</span>
							<Link href="/enterprise">
								<a className={`${styles['link-text']} ${styles.link}`}>Based Enterprise</a>
							</Link>
						</Stack>
					</li>
				)}
				<li className={styles.link}>
					<Link href="/leadership">
						<a className={styles['link-text']}>Leadership</a>
					</Link>
				</li>
				<li className={styles.link}>
					<Link href="/contact">
						<a className={styles['link-text']}>Contact Us</a>
					</Link>
				</li>
				<li className={styles.link}>
					<Link href="/statements">
						<a className={styles['link-text']}>Statements</a>
					</Link>
				</li>
				<li className={styles.link}>
					<a href="https://www.linkedin.com/company/based-capital-llc" target="_blank" rel="noreferrer noopener" className={styles['link-text']}>
						LinkedIn
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

