import {Flex} from "antd";
import {NavLink} from "react-router";
import styles from "../filter.module.scss";

interface Genre {
  title: string;
  url: string;
}

const genres: Genre[] = [
  { title: "Все", url: "/" },
  { title: "От ShareBook", url: "/filter/FromShareBook" },
  { title: "Детективы", url: "/filter/Detectives" },
  { title: "Романы", url: "/filter/Novels" },
  { title: "Научные", url: "/filter/Scientific" },
  { title: "Исскуство", url: "/filter/Art" },
  { title: "Учебные", url: "/filter/Tutorials" },
];

export function FilterGenre() {
  return (
    <div>
      <Flex>
        {genres.map((genre, idx) => (
          <NavLink
            key={idx}
            to={genre.url}
            className={(isActive) =>
              isActive.isActive
                ? `${styles.buttonGenre} ${styles.buttonActive}`
                : `${styles.buttonGenre} ${styles.buttonDefault}`
            }
          >
            {genre.title}
          </NavLink>
        ))}
      </Flex>
    </div>
  );
}
