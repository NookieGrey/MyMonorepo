import { Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";
import styles from "./favoriteButton.module.scss";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Button
      type="text"
      className={styles.favoriteButton}
      icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
      onClick={() => setIsFavorite((isFavorite) => !isFavorite)}
    />
  );
};
