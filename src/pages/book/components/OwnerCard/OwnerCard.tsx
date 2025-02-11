import { Avatar, Card, Typography, Button, Image, Divider } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import styles from "./ownerCard.module.scss";
import { OwnerCardProps } from "../../../../types/user";
import { getMembershipTime } from "../../../../utils/date";
import { ExchangeInfoIcon } from "./svg-icons";

const { Text } = Typography;

const mockOwnerData: OwnerCardProps = {
  name: "Евгения",
  avatar: "/mocks/mockAvatar.png",
  registrationDate: new Date("2023-08-09"),
  booksGiven: 17,
  booksExchanged: 21,
  gender: "female",
  location: "Санкт-Петербург, Озерки",
  isMessageAvailable: true,
};

export const OwnerCard = () => {
  const {
    name,
    avatar,
    gender,
    location,
    isMessageAvailable,
    booksGiven,
    booksExchanged,
  } = mockOwnerData;

  const membershipTime = getMembershipTime(mockOwnerData.registrationDate);

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Avatar size={50} src={avatar} />
        <div className={styles.userInfo}>
          <Text className={styles.name}>{name}</Text>
          <Text className={styles.membershipTime}>{membershipTime}</Text>
        </div>
      </div>

      <div className={`${styles.detailsRow} ${styles.statsRow}`}>
        <div className={styles.iconWrapper}>
          <Image
            src="/statsIcon.png"
            preview={false}
            width={24}
            height={24}
            className={styles.statsIcon}
          />
        </div>
        <Text className={styles.statsText}>
          Отдано {booksGiven} книг • Обменяно {booksExchanged}
        </Text>
      </div>

      <div className={styles.detailsRow}>
        <div className={styles.iconWrapper}>
          <ExchangeInfoIcon className={styles.exchangeInfoIcon} />
        </div>
        <Text className={styles.exchangeInfoText}>
          {name} {gender === "female" ? "готова" : "готов"} обменять книгу на
          любую интересную
        </Text>
      </div>

      <div className={styles.detailsRow}>
        <div className={styles.iconWrapper}>
          <EnvironmentOutlined className={styles.locationIcon} />
        </div>
        <Text className={styles.location}>{location}</Text>
      </div>

      <Divider className={styles.divider} />

      <Button
        type="primary"
        className={styles.messageButton}
        disabled={!isMessageAvailable}
      >
        Написать
      </Button>
    </Card>
  );
};
