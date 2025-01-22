import styles from "./header.module.scss"

export const HeaderComponent = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<svg width="25" height="24" fill="none">
						<rect width="6" height="22" fill="#000" rx="1"/>
						<rect width="6" height="22" x="8" fill="#000" rx="1"/>
						<rect width="6" height="22" x="15.223" y="1.684" fill="#000" rx="1" transform="rotate(-10 15.223 1.684)"/>
					</svg>
					ShareBook
				</div>
				<div className={styles.navBar}>
					<div>Главная</div>
					<div>Избранное</div>
					<div>Чаты</div>
				</div>
				<div></div>
				<div
					className={styles.containerSearch}>
					<input
						className={styles.search}
						type="search"
						placeholder="Ищите фентези, детективы, романы"/>
					<svg width="18" height="18" fill="none">
						<path stroke="#909090" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.462" d="m12.75 12.75 3 3M2.25 8.25a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/>
					</svg>
				</div>
				<div className={styles.avatar}>
					<svg width="20" height="20" fill="none">
						<path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.4 16.4v-.8a5.6 5.6 0 1 1 11.2 0v.8"/>
						<path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M10 10a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"/>
					</svg>
				</div>
			</div>
		</header>
	);
};