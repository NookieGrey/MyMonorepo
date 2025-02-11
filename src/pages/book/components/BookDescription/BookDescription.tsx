import { Typography } from "antd";
import styles from "./bookDescription.module.scss";
import { BookDescriptionProps } from "../../../../types/book";

const { Title, Paragraph, Text } = Typography;

export const BookDescription = ({
  annotation,
  details,
}: BookDescriptionProps) => {
  const { author, publisher, year, binding, pages, genre, language } = details;

  const bookDetails = [
    { label: "Автор", value: author },
    { label: "Издательство", value: publisher },
    { label: "Год издания", value: year },
    { label: "Переплёт", value: binding },
    { label: "Страниц", value: pages },
    { label: "Жанр", value: genre },
    { label: "Язык книги", value: language },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.annotation}>
        <Title level={3}>Описание</Title>
        <Paragraph
          ellipsis={{
            rows: 4,
            expandable: true,
            symbol: (
              <Text className={styles.expandButton}>Читать полностью</Text>
            ),
          }}
          className={styles.annotationText}
        >
          {annotation}
        </Paragraph>
      </div>

      <ul className={styles.details}>
        {bookDetails.map(({ label, value }) => (
          <li key={label} className={styles.detailItem}>
            <Text className={styles.label}>{label}</Text>
            <Text className={styles.value}>{value}</Text>
          </li>
        ))}
      </ul>
    </main>
  );
};
