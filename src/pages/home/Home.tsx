import { FilterComponent } from "./components/Filter";
import { BookCardComponent } from "./components/BookCard";
import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <FilterComponent />
      <BookCardComponent />
    </div>
  );
}
