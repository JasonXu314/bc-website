import styles from '$/Contact.module.scss';
import Button from '@/Button/Button';
import Input from '@/Input/Input';
import Navbar from '@/Navbar/Navbar';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { useCallback, useState } from 'react';
import { validateEmail } from 'utils/utils';

const Contact: NextPage = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const trySubmit = useCallback(() => {
		setError(null);
		if (!name || name.trim().length === 0) {
			setError('Name is required');
			return;
		}
		if (!email || email.trim().length === 0 || !validateEmail(email)) {
			setError('Email is required');
			return;
		}
		if (!subject || subject.trim().length === 0) {
			setError('Subject is required');
			return;
		}
		if (!message || message.trim().length === 0) {
			setError('Message is required');
			return;
		}

		axios
			.post<SuccessfulContactResponse>('/api/contact', { name, email, subject, message, trade: false })
			.then((res) => {
				setSuccess(res.data.message);
			})
			.catch((err: AxiosError<ErrorContactResponse>) => {
				if (err.response) {
					setError(err.response.data.message);
				} else {
					setError('Something went wrong when trying to submit...');
				}
			});
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}, [name, email, message, subject]);

	return (
		<div className={styles.main}>
			<Head>
				<title>Brick Layer Capital | Contact</title>
			</Head>
			<Navbar />
			<div className={styles.content}>
				<div className={styles.heading}>
					If you are interested in getting in contact with us, use the form below — we will get back to you shortly!
				</div>
				<div className={styles.form}>
					<Input
						label="Name"
						onChange={(evt) => {
							if (error) {
								setError(null);
							}
							setName(evt.target.value);
						}}
						value={name}
					/>
					<Input
						label="Email"
						onChange={(evt) => {
							if (error) {
								setError(null);
							}
							setEmail(evt.target.value);
						}}
						value={email}
					/>
					<Input
						label="Subject"
						onChange={(evt) => {
							if (error) {
								setError(null);
							}
							setSubject(evt.target.value);
						}}
						value={subject}
					/>
					<h4 className={styles.title}>Message:</h4>
					<textarea className={styles.textarea} onChange={(evt) => setMessage(evt.target.value)} rows={4} cols={32} value={message} />
					{error && <div className={styles.error}>{error}</div>}
					{success && <div className={styles.success}>{success}</div>}
					<Button onClick={trySubmit}>Send</Button>
				</div>
			</div>
		</div>
	);
};

export default Contact;

