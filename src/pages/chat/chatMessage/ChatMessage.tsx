import styles from "./chatMessage.module.scss";
import { MessageDto } from "../../../services/api/sharebookApi.ts";
import cn from "classnames";

interface ChatMessageProps {
  message: MessageDto;
  profileId: string | number;
}

export function ChatMessage(props: ChatMessageProps) {
  return (
    <div className={cn(styles.wrapper, props.profileId === 6 && styles.own)}>
      {props.message.text}
      <span className={styles.time}>
        {props.message.departureDate?.split("T")[1].slice(0, 5)}
      </span>
    </div>
  );
}
