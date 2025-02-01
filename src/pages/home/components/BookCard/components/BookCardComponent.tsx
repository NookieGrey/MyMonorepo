import styles from "../bookCard.module.scss";
import data from "../books.json";
import { BookCard } from "./BookCard.tsx";

const books = data.data;

export function BookCardComponent() {
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
}
