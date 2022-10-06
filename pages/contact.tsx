import styles from '$/Contact.module.scss';
import Navbar from '@/Navbar/Navbar';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Contact: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>Based Capital | Contact</title>
			</Head>
			<Navbar />
			<div className={styles.content}>
				If you are a small business owner and you would like to work with us, reach out to us <a href="mailto:basedcapitalllc@gmail.com">here</a>, and
				we will get back to you shortly!
			</div>
		</div>
	);
};

export default Contact;
