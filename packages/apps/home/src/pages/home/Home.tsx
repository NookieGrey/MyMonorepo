import {Button, Typography} from "antd";
import styles from "./home.module.scss";

const { Title, Paragraph, Text } = Typography;

export function Home() {
  return (
    <div>
      <Title>Who we are?</Title>
      <Paragraph>
        Why are <Text strong>we</Text> here?
      </Paragraph>
        <Button className={styles.test}>Press Me One More Time</Button>
    </div>
  );
}
