import styles from "../header.module.scss";
import { NavLink } from "react-router";

interface MainMenuItem {
  title: string;
  url: string;
}

const mainMenuItems: MainMenuItem[] = [
  { title: "Главная", url: "Main" },
  { title: "Избранное", url: "Favourites" },
  { title: "Чаты", url: "Chats" },
];

export function Nav() {
  return (
    <nav>
      <ul className={styles.navBar}>
        {mainMenuItems.map((page, idx) => (
          <li key={idx}>
            <NavLink
              to={page.title == "Главная" ? "/" : `/${page.url}`}
              className={(isActive) =>
                isActive.isActive ? styles.activeMenuItem : styles.menuItem
              }
            >
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
