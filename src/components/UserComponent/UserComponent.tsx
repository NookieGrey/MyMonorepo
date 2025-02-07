import styles from "./userComponent.module.scss";
import { Avatar, Typography } from "antd";

type Props = {
  data: {
    userId: string;
    name: string;
    photo: string;
  };
  children: JSX.Element;
};

export function UserComponent({ data, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <Avatar size={150} src={data.photo} /> {/* Changed size to 128 */}
          </div>
          <div className={styles.text}>
            <Typography.Title level={2} className={styles.name}>
              {data.name}
            </Typography.Title>
            <Typography.Text className={styles.score}>
              <span className={styles.emoji}>🎯</span> Отдано 17 книг • Обменяно
              21
            </Typography.Text>
            <Typography.Paragraph className={styles.description}>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.actions}>{children}</div>
      </div>
    </div>
  );
}
