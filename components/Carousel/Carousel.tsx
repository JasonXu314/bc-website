import { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';

const images = [
	{ src: 'full-investors.jpg', title: 'Investors' },
	{ src: 'rig.jpg', title: 'Rig' },
	{ src: 'meeting.jpg', title: 'Meeting' },
	{ src: 'first-cards.jpg', title: 'First Cards' },
	{ src: 'fes.jpg', title: "Founders' Editions" }
];

const Carousel: React.FC = () => {
	const [imgIdx, setImgIdx] = useState<number>(0);

	useEffect(() => {
		const newIdx = (imgIdx + 1) % images.length;

		const interval = setTimeout(() => {
			setImgIdx(newIdx);
		}, 5000);

		return () => {
			clearTimeout(interval);
		};
	}, [imgIdx]);

	return (
		<div className={styles.main}>
			{images.map((image, i) => (
				<img
					key={i}
					className={styles.carousel + (i === imgIdx ? ' ' + styles.active : '')}
					src={image.src}
					title={i === imgIdx ? image.title : undefined}
					alt={image.title}
				/>
			))}
			<button className={styles['arrow-right-container']} onClick={() => setImgIdx((imgIdx + 1) % images.length)}>
				<img src="chevron-right.svg" alt="forwards" />
			</button>
			<button className={styles['arrow-left-container']} onClick={() => setImgIdx((imgIdx - 1) % images.length)}>
				<img src="chevron-left.svg" alt="backwards" />
			</button>
			<div className={styles['dot-row']}>
				{images.map((_, i) => (
					<button key={i} className={styles.dot + (i === imgIdx ? ' ' + styles.active : '')} onClick={() => setImgIdx(i)} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
