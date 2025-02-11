import { Image } from "antd";
import styles from "./bookGallery.module.scss";

interface BookGalleryProps {
  mainImage: string;
  thumbnails: string[];
}

export const BookGallery = ({ mainImage, thumbnails }: BookGalleryProps) => {
  const visibleThumbnails = thumbnails.slice(0, 4);
  const additionalCount = thumbnails.length > 4 ? thumbnails.length - 3 : 0;

  return (
    <div className={styles.galleryContainer}>
      <Image
        width={315}
        className={styles.mainImage}
        preview={false}
        src={mainImage}
        alt="Обложка книги"
      />

      <div className={styles.thumbnailsContainer}>
        {visibleThumbnails.map((thumbnail, index) => (
          <div key={index} className={styles.relative}>
            <Image
              width={72}
              height={72}
              className={styles.thumbnailImage}
              preview={false}
              src={thumbnail}
              alt={`Изображение книги ${index + 1}`}
            />
            {index === 3 && additionalCount > 0 && (
              <div className={styles.overlay}>
                <span>+{additionalCount}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
