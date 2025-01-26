import styles from '../header.module.scss';
import {NavLink} from 'react-router';

interface IPages {
	title: string,
	url: string,
}

const pages: IPages[] = [
	{title: 'Главная', url: '/Главная'},
	{title: 'Избранное', url: '/Избранное'},
	{title: 'Чаты', url: '/Чаты'},
];

export function Nav () {
	return (
		<nav>
			<ul className={styles.navBar}>
				{pages.map((page, idx) =>
					<li key={idx}>
						<NavLink
							to={page.title == 'Главная' ? '/' : `${page.url}`}
							className={(isActive) => isActive.isActive ? styles.activePage : styles.defaultPage}>{page.title}
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};