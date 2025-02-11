import { Typography, Layout, Space } from "antd";
import { FavoriteButton } from "../FavoriteButton";
import { ShareDropdown } from "../ShareDropdown";
import styles from "./bookContent.module.scss";
import { BookGallery } from "../BookGallery";
import { BookDescription } from "../BookDescription";
import { BookContentProps } from "../../../../types/book";
import { OwnerCard } from "../OwnerCard";

const { Title, Text } = Typography;
const { Header, Content } = Layout;

export const BookContent = ({
  title,
  author,
  coverImage,
  galleryImages,
  bookDescription,
}: BookContentProps) => {
  return (
    <section className={styles.container}>
      <Header className={styles.header}>
        <Space className={styles.titleWrapper}>
          <Title level={1}>{title}</Title>
          <Text>{author}</Text>
        </Space>
        <Space className={styles.buttonsWrapper}>
          <FavoriteButton />
          <ShareDropdown />
        </Space>
      </Header>

      <div className={styles.contentLayout}>
        <Content className={styles.contentContainer}>
          <BookGallery mainImage={coverImage} thumbnails={galleryImages} />
          <BookDescription {...bookDescription} />
        </Content>
        <aside>
          <OwnerCard />
        </aside>
      </div>
    </section>
  );
};
