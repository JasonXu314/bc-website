import React from 'react';
import styles from './Satement.module.scss';

interface Props {
	date: string;
	branch: 'Capital' | 'Enterprise' | 'DeFi';
	first?: boolean;
}

const Statement: React.FC<React.PropsWithChildren<Props>> = ({ date, children, branch, first = false }) => {
	return (
		<div className={styles.main}>
			{first ? (
				<div className={styles.heading}>
					<h4>{date}</h4>
					<h4>Most recent update</h4>
				</div>
			) : (
				<h4>{date}</h4>
			)}
			<div className={styles.part}>{children}</div>
			<div className={styles.signature}>- The Based {branch} Team</div>
		</div>
	);
};

export default Statement;
