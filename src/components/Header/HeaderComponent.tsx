import styles from "./header.module.scss";
import { Logo } from "./components/Logo.tsx";
import { Nav } from "./components/Nav.tsx";
import { SearchInput } from "./components/SearchInput.tsx";
import { Avatar } from "./components/Avatar.tsx";

export function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Nav />
        <div className={styles.blank}></div>
        <SearchInput />
        <Avatar />
      </div>
    </header>
  );
}
