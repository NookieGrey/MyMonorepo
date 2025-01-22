import styles from "./filter.module.scss"
import {useState} from 'react';
import {NavLink} from 'react-router';
import {
	Dropdown,
	Flex
} from 'antd';

const genres: string[] = ['Все', 'От ShareBook', 'Детективы', 'Романы', 'Научные', 'Исскуство', 'Учебные'];


const items = [
	{label: 'Обменивают', key: '0'},
	{label: 'Все предложения', key: '1',},
];

export const FilterComponent = () => {
	const [listState, setListState] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<div>
				<Flex >
					{genres.map(genre =>
						<NavLink to={genre == 'Все' ? '/' : `/filter/${genre}`} className={(isActive) => isActive.isActive ? styles.buttonActive : styles.buttonDefault}>
							{genre}
						</NavLink>
					)}
				</Flex>
			</div>
			<Dropdown menu={{ items }} trigger={['click']} onOpenChange={vis => setListState(vis)}>
				<button className={styles.buttonList}>
					Отдают
					<svg className={listState ? styles.svgActive : styles.svgDefault} width="20" height="16" fill="none">
						<path stroke="#2A7FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" d="m5 5.5 5 5 5-5"/>
					</svg>
				</button>
			</Dropdown>

			{/*Вторая реализация dropDown*/}
			{/*<div className={styles.buttonList} onClick={() => {*/}
			{/*	if (listState) setListState(false)*/}
			{/*	else setListState(true)*/}
			{/*}}>*/}
			{/*	Отдают*/}
			{/*	<svg className={listState ? styles.svgActive : styles.svgDefault} width="20" height="16" fill="none">*/}
			{/*		<path stroke="#2A7FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" d="m5 5.5 5 5 5-5"/>*/}
			{/*	</svg>*/}
			{/*	<ul onClick={e => e.stopPropagation()} className={listState ? `${styles.list} ${styles.listAcitve}` : styles.list}>*/}
			{/*		<li>Обменивают</li>*/}
			{/*		<li>Все предложения</li>*/}
			{/*	</ul>*/}
			{/*</div>*/}
		</div>
	);
};

