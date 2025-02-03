import styles from "../bookCard.module.scss";
import { BookCard } from "./BookCard.tsx";
import {
  BookDto,
  BooksApiResponse,
} from "../../../../../services/api/sharebookApi.ts";

interface Props {
  books?: BooksApiResponse;
}

export function BookCardComponent({ books }: Props) {
  return (
    <div className={styles.container}>
      {(books as unknown as BookDto[])?.map((book) => {
        // @ts-expect-error WIP
        return <BookCard key={book.bookId} book={book} />;
      })}
    </div>
  );
}
