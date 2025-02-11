import { Typography } from "antd";
import { ShareDropdown } from "../ShareDropdown";
import styles from "./bookContent.module.scss";
import { BookGallery } from "../BookGallery";
import { BookDescription } from "../BookDescription";
import { BookContentProps } from "../../../../types/book";
import { OwnerCard } from "../OwnerCard";

const { Title, Text } = Typography;

export const BookContent = ({
  title,
  author,
  mainImage,
  thumbnails,
  bookDescription,
}: BookContentProps) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <Title level={1}>{title}</Title>
          <Text>{author}</Text>
        </div>
        <ShareDropdown />
      </header>

      <div className={styles.contentLayout}>
        <div className={styles.contentContainer}>
          <BookGallery {...{ mainImage, thumbnails }} />
          <BookDescription {...bookDescription} />
        </div>
        <aside>
          <OwnerCard />
        </aside>
      </div>
    </section>
  );
};
