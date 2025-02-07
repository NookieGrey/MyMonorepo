import styles from "./chat.module.scss";
import { ChatUserList } from "./userList";
import { ChatCurrentUser } from "./currentUser";
import { ChatInput } from "./input";
import { ChatBody } from "./body";

export function Chat() {
  return (
    <div className={styles.container}>
      <ChatUserList />
      <div className={styles.chatBodyWrapper}>
        <ChatCurrentUser />
        <ChatBody />
        <ChatInput />
      </div>
    </div>
  );
}
