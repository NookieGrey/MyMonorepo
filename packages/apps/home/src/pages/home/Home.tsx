import { HeaderComponent } from "./components/Header";
import { FilterComponent } from "./components/Filter";
import { BookCardComponent } from "./components/BookCard";
import styles from "./home.module.scss";

export function Home() {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <FilterComponent />
        <BookCardComponent />
      </div>
    </div>
  );
}
