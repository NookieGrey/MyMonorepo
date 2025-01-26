import { Flex } from 'antd';
import { NavLink } from 'react-router';
import styles from '../filter.module.scss';

const genres: string[] = [
  'Все',
  'От ShareBook',
  'Детективы',
  'Романы',
  'Научные',
  'Исскуство',
  'Учебные',
];

export function FilterGenre() {
  return (
    <div>
      <Flex>
        {genres.map((genre, idx) => (
          <NavLink
            key={idx}
            to={genre == 'Все' ? '/' : `/filter/${genre}`}
            className={(isActive) =>
              isActive.isActive ?
                `${styles.buttonGenre} ${styles.buttonActive}` :
                `${styles.buttonGenre} ${styles.buttonDefault}`
            }>
            {genre}
          </NavLink>
        ))}
      </Flex>
    </div>
  );
}
