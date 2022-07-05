import { useEffect, useRef, useState } from 'react';
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
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const newIdx = (imgIdx + 1) % (images.length + 1);

		const interval =
			imgIdx === 0
				? setTimeout(() => {
						setImgIdx(newIdx);
						videoRef.current!.currentTime = 0;
				  }, 50_000)
				: setTimeout(() => {
						setImgIdx(newIdx);
				  }, 5000);
		if (imgIdx === 0) {
			videoRef.current!.play();
		}

		return () => {
			clearTimeout(interval);
		};
	}, [imgIdx]);

	return (
		<div className={styles.main}>
			{images.map((image, i) => (
				<img
					key={i}
					className={styles.carousel + (i + 1 === imgIdx ? ' ' + styles.active : '')}
					src={image.src}
					title={i + 1 === imgIdx ? image.title : undefined}
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
				<button className={styles.dot + (imgIdx === 0 ? ' ' + styles.active : '')} onClick={() => setImgIdx(0)} />
				{images.map((_, i) => (
					<button key={i} className={styles.dot + (i + 1 === imgIdx ? ' ' + styles.active : '')} onClick={() => setImgIdx(i + 1)} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
