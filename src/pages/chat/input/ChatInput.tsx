import { Input } from "antd";
import styles from "./chatInput.module.scss";
import type { KeyboardEventHandler } from "react";
import { useAppSelector } from "../../../store.ts";

const { TextArea } = Input;

export function ChatInput() {
  const activeChatId = useAppSelector((state) => state.chat.activeId);

  const onPressEnter: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.shiftKey) {
      console.log("do nothing");

      return;
    }

    console.log((event.target as HTMLTextAreaElement).value);
  };

  if (!activeChatId) return null;

  return (
    <div className={styles.wrapper}>
      <TextArea
        autoSize
        className={styles.textArea}
        onPressEnter={onPressEnter}
      />
    </div>
  );
}
