import { Button } from "antd";
import styles from "./profileOwnButtons.module.scss";

export function ProfileOwnButtons() {
  return (
    <>
      <Button className={styles.settingsButton}>⚙️</Button>
      <Button type="primary">Новое объявление</Button>
    </>
  );
}
