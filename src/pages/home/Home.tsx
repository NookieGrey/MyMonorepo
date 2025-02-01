import { FilterComponent } from "./components/Filter";
import { BookCardComponent } from "./components/BookCard";
import styles from "./home.module.scss";
import { useBooksQuery } from "../../api/sharebookApi.ts";

export function Home() {
  const { data } = useBooksQuery();

  return (
    <div className={styles.container}>
      <FilterComponent />
      <BookCardComponent books={data} />
    </div>
  );
}
