import styles from "../bookCard.module.scss";
import { Card } from "antd";
import img1 from "../img/Image1.png";
import img2 from "../img/Image2.png";

interface Book {
  id: string;
  path?: string;
  title: string;
  author: string;
  location: string;
  transferType: string;
  gene: string;
}

export function BookCard({ book }: { book: Book }) {
  return (
    <>
      <Card
        key={book.id}
        cover={
          <div className={styles.containerImage}>
            <img alt={book.title} src={img2 || img1} />
          </div>
        }
        hoverable
        className={styles.card}
      >
        <div className={styles.containerContent}>
          <div className={styles.containerInfoBook}>
            <div className={styles.title}>{book.title}</div>
            <a className={styles.author}>{book.author}</a>
          </div>
          <p className={styles.location}>{book.location}</p>
        </div>
      </Card>
    </>
  );
}
