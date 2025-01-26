import { Dropdown } from 'antd';
import styles from '../filter.module.scss';
import { useState } from 'react';

const items = [
  { label: 'Обменивают', key: '0' },
  { label: 'Все предложения', key: '1' },
];

export function FilterType() {
  const [listState, setListState] = useState(false);

  return (
    <Dropdown
      overlayClassName={styles.typeFilter}
      menu={{ items }}
      trigger={['click']}
      onOpenChange={(vis) => setListState(vis)}>
      <button className={styles.buttonList}>
        Отдают
        <svg className={listState ? styles.svgActive : styles.svgDefault} width="20" height="16" fill="none">
          <path stroke="#2A7FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m5 5.5 5 5 5-5" />
        </svg>
      </button>
    </Dropdown>
  );
}
