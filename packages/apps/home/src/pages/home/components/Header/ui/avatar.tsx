import styles
	from '../header.module.scss';
import {Button} from 'antd';

export function Avatar () {
	return (
		<Button className={styles.avatar} type="primary" shape="circle">
			<svg width="20" height="20" fill="none">
				<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4.4 16.4v-.8a5.6 5.6 0 1 1 11.2 0v.8"/>
				<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M10 10a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"/>
			</svg>
		</Button>
	);
};