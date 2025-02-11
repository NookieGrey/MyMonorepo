import styles from "./bookGallery.module.scss";

type BookGalleryProps = {
  mainImage: string;
  thumbnails: string[];
};

export const BookGallery = ({ mainImage, thumbnails }: BookGalleryProps) => {
  const visibleThumbnails = thumbnails.slice(0, 4);
  const additionalCount = thumbnails.length > 4 ? thumbnails.length - 3 : 0;

  return (
    <div className={styles.galleryContainer}>
      <img className={styles.mainImage} src={mainImage} alt="Обложка книги" />

      <div className={styles.thumbnailsContainer}>
        {visibleThumbnails.map((thumbnail, index) => (
          <div key={index} className={styles.relative}>
            <img
              className={styles.thumbnailImage}
              src={thumbnail}
              alt={"Изображение книги"}
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
