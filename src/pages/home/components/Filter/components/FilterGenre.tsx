import { NavLink , useSearchParams} from "react-router";
import styles from "../filter.module.scss";

interface Genre {
  title: string;
  url: string;
}

const genres: Genre[] = [
  {title: "Все", url: "/"},
  {title: "От ShareBook", url: "/filter/FromShareBook"},
  {title: "Детективы", url: "/filter/Detectives"},
  {title: "Романы", url: "/filter/Novels"},
  {title: "Научные", url: "/filter/Scientific"},
  {title: "Исскуство", url: "/filter/Art"},
  {title: "Учебные", url: "/filter/Tutorials"},
];

export function FilterGenre() {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.containerGenres}>
      {genres.map((genre, idx) => (
        <NavLink
          key={idx}
          to={{pathname: genre.url, search: searchParams.toString()}}
          className={(isActive) =>
            isActive.isActive
              ? `${styles.buttonGenre} ${styles.buttonActive}`
              : `${styles.buttonGenre} ${styles.buttonDefault}`
          }
        >
          {genre.title}
        </NavLink>
      ))}
    </div>
  );
}
