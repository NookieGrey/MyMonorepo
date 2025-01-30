import styles from "./bookCard.module.scss";
// import data from "./books.json";
import { Card } from "antd";

// const books = data.data;

export function BookCardComponent() {
  return (
    <div className={styles.container}>
      {/*Первый способ реализации. Минусы: не получается настроить boxShadow*/}
      <Card
        cover={
          <div className={styles.containerImage}>
            <img alt="example" src="/assets/image/Image1.png" />
          </div>
        }
        hoverable
        className={styles.card}
      >
        <div className={styles.containerContent}>
          <div className={styles.containerInfoBook}>
            <div>Старик и море, Зеленые холмы Африки</div>
            <a>Эрнест Хэмингуэй</a>
          </div>
          <p>Санкт-Петербург, Московский район</p>
        </div>
      </Card>

      {/*{books.map((book, idx) => (*/}
      {/*  <div key={idx} className={styles.card}>*/}
      {/*    <div className={styles.containerContent}>*/}
      {/*      <img alt="example" src={book.path} />*/}
      {/*      <div className={styles.containerInfoBook}>*/}
      {/*        <div>{book.title}</div>*/}
      {/*        <a>{book.author}</a>*/}
      {/*      </div>*/}
      {/*      <p className={styles.location}>{book.location}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
}
