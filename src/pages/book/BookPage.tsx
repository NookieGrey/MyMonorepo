import { Layout } from "antd";
import { BookContent } from "./components/BookContent";
import styles from "./bookPage.module.scss";
import { BookContentProps } from "../../types/book";

const { Content } = Layout;

const mockBookData: BookContentProps = {
  title: "Краткие ответы на большие вопросы",
  author: "Стивен Хокинг",
  coverImage: "/mocks/mockBookImage.jpg",
  galleryImages: [
    "/mocks/mockBookImage.jpg",
    "/mocks/mockBookImage.jpg",
    "/mocks/mockBookImage.jpg",
    "/mocks/mockBookImage.jpg",
    "/mocks/mockBookImage.jpg",
  ],
  bookDescription: {
    annotation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
    details: {
      author: "Стивен Хокинг",
      publisher: "Издательство АСТ",
      year: "2022",
      binding: "Жесткий",
      pages: 213,
      genre: "Научный",
      language: "Русский",
    },
  },
};

export const BookPage = () => {
  return (
    <Content className={styles.content}>
      <BookContent {...mockBookData} />
      <div>See Also Section Placeholder</div>
    </Content>
  );
};
