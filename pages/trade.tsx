import styles from '$/Trade.module.scss';
import Button from '@/Button/Button';
import Input from '@/Input/Input';
import Navbar from '@/Navbar/Navbar';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { useCallback, useState } from 'react';
import { validateEmail } from 'utils/utils';

const Trade: NextPage = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [location, setLocation] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [files, setFiles] = useState<Img[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const [hovering, setHovering] = useState<boolean>(false);

	const processFile = useCallback((file: File) => {
		setError(null);

		if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
			console.log(file.type);
			setError('We only accept PNG and JPG formats.');
		} else {
			const fr = new FileReader();

			fr.onloadend = () => {
				setFiles((files) => [...files, { name: file.name, data: fr.result as string, type: file.type }]);
			};

			fr.readAsDataURL(file);
		}
	}, []);

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
		if (!location || location.trim().length === 0) {
			setError('Your location is required');
			return;
		}
		if (!message || message.trim().length === 0) {
			setError('Message is required');
			return;
		}
		if (files.length === 0) {
			setError('You must attach at least one picture as proof that you actually have the card');
			return;
		}

		axios
			.post<SuccessfulContactResponse>('/api/contact', { name, email, subject, message, files, location, trade: true })
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
		setSuccess(null);
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
		setFiles([]);
		setLocation('');
	}, [email, message, name, subject, files, location]);

	return (
		<div className={styles.main}>
			<Head>
				<title>Based Capital | Trade</title>
			</Head>
			<Navbar />
			<div className={styles.content}>
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
					<Input
						label="Location"
						onChange={(evt) => {
							if (error) {
								setError(null);
							}
							setLocation(evt.target.value);
						}}
						value={location}
					/>
					<h4 className={styles.title}>Message (Please include LHR status, previous uses, reason for trading):</h4>
					<textarea className={styles.textarea} onChange={(evt) => setMessage(evt.target.value)} rows={4} cols={32} value={message} />
					<div>
						<h4 className={styles.title}>Proof of Posession:</h4>
						<label
							className={styles['file-input'] + (hovering ? ' ' + styles.hovering : '')}
							htmlFor="file-input"
							onDragOver={(evt) => {
								evt.preventDefault();
								setHovering(true);
							}}
							onDragLeave={() => setHovering(false)}
							onDrop={(evt) => {
								evt.preventDefault();

								setHovering(false);

								if (evt.dataTransfer.items) {
									for (const item of evt.dataTransfer.items) {
										if (item.kind === 'file') {
											const file = item.getAsFile()!;

											processFile(file);
										}
									}
								} else {
									for (const file of evt.dataTransfer.files) {
										processFile(file);
									}
								}
							}}>
							Upload Image
							<input
								type="file"
								id="file-input"
								className={styles.input}
								onChange={(evt) => {
									if (error) {
										setError(null);
									}

									const file = evt.target.files![0];
									evt.target.value = '';

									processFile(file);
								}}
							/>
						</label>
						<div className={styles.previews}>
							{files.map((file, i) => (
								<div className={styles.preview} key={i}>
									<img height="100" width="150" className={styles.image} src={file.data} alt={file.name} key={i} />
									<button
										className={styles.delete}
										onClick={() => {
											setFiles(files.filter((f) => f !== file));
										}}>
										<img src="trash.svg" alt="" className={styles.icon} />
									</button>
								</div>
							))}
						</div>
					</div>
					{error && <div className={styles.error}>{error}</div>}
					{success && <div className={styles.success}>{success}</div>}
					<Button onClick={trySubmit}>Send</Button>
				</div>
			</div>
		</div>
	);
};

export default Trade;
