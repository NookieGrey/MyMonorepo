import { Button, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export function Home() {
  return (
    <div>
      <Title>Who we are?</Title>
      <Paragraph>
        Why are <Text strong>we</Text> here?
      </Paragraph>
      <Button>Press Me One More Time</Button>
    </div>
  );
}
