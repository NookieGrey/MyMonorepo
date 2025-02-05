import styles from "./chatUserList.module.scss";
import { List } from "antd";
import cn from "classnames";
import defaultAvatar from "../defaultChatAvatar.png";
import data from "../users.json";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../store.ts";
import { setActiveId } from "../chatSlice.ts";

export type Data = ChatItem[];

export interface ChatItem {
  author: Author;
  img: string;
  book: Book;
  time: string;
  unreadCount: number;
}

export interface Author {
  name: string;
  id: string;
}

export interface Book {
  title: string;
  author: string;
  id: string;
}

export function ChatUserList() {
  const { t } = useTranslation("chat");
  const activeChatId = useAppSelector((state) => state.chat.activeId);
  const dispatch = useAppDispatch();

  return (
    <List
      className={styles.userListWrapper}
      header={<h2 className={styles.userListTitle}>{t("title")}</h2>}
      dataSource={data as Data}
      renderItem={(item) => (
        <List.Item
          onClick={() => dispatch(setActiveId(item.author.id))}
          className={cn(
            styles.userListItem,
            item.author.id === activeChatId && styles.active,
          )}
        >
          <img
            src={item.img || defaultAvatar}
            alt=""
            className={styles.avatar}
          />
          <div className={styles.textContent}>
            <div className={styles.authorName}>{item.author.name}</div>
            <div className={styles.bookTitle}>
              {item.book.author}{" "}
              <span className={styles.bookName}>«{item.book.title}»</span>
            </div>
          </div>
          <div className={styles.meta}>
            <div className={styles.time}>{item.time}</div>
            {item.unreadCount !== 0 && (
              <div className={styles.unreadCount}>{item.unreadCount}</div>
            )}
          </div>
        </List.Item>
      )}
    />
  );
}
