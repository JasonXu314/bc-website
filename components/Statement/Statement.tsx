import React from 'react';
import styles from './Satement.module.scss';

interface Props {
	date: string;
	branch: 'Capital' | 'Enterprise' | 'DeFi';
}

const Statement: React.FC<React.PropsWithChildren<Props>> = ({ date, children, branch }) => {
	return (
		<div className={styles.main}>
			<h4 className={styles.date}>{date}</h4>
			<div className={styles.part}>{children}</div>
			<div className={styles.signature}>- The Based {branch} Team</div>
		</div>
	);
};

export default Statement;
