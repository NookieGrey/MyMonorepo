import { Flex } from "antd";
import { NavLink } from "react-router";
import styles from "../filter.module.scss";

interface Genre {
  title: string;
  url: string;
}

const genres: Genre[] = [
  { title: "Все", url: "AllOfThem" },
  { title: "От ShareBook", url: "FromShareBook" },
  { title: "Детективы", url: "Detectives" },
  { title: "Романы", url: "Novels" },
  { title: "Научные", url: "Scientific" },
  { title: "Исскуство", url: "Art" },
  { title: "Учебные", url: "Tutorials" },
];

export function FilterGenre() {
  return (
    <div>
      <Flex>
        {genres.map((genre, idx) => (
          <NavLink
            key={idx}
            to={genre.url == "AllOfThem" ? "/" : `/filter/${genre.url}`}
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
