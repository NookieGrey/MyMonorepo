import styles from "../header.module.scss";
import { Logo } from "./logo.tsx";
import { Nav } from "./nav.tsx";
import { Search } from "./search.tsx";
import { Avatar } from "./avatar.tsx";

export function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Nav />
        <div className={styles.blank}></div>
        <Search />
        <Avatar />
      </div>
    </header>
  );
}
