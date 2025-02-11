import users from "../users.json";
import { useAppSelector } from "../../../store.ts";
import defaultAvatar from "../defaultChatAvatar.png";
import styles from "./chatCurrentUser.module.scss";
import { SvgMenu } from "./SvgMenu.tsx";
import { Dropdown } from "antd";
import { SvgTrash } from "./SvgTrash.tsx";

const actions = [
  {
    danger: true,
    label: (
      <div className={styles.delete}>
        <SvgTrash />
        Удалить чат
      </div>
    ),
    key: "delete",
  },
];

export function ChatCurrentUser() {
  // const users = useAppSelector(sharebookApi.endpoints.getUsers.select);
  const activeChatId = useAppSelector((state) => state.chat.activeId);
  const activeUser = users.find((user) => user.author.id === activeChatId);

  if (!activeUser) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <img
        src={activeUser.img || defaultAvatar}
        alt=""
        className={styles.avatar}
      />
      <div className={styles.textContent}>
        <div className={styles.authorName}>{activeUser.author.name}</div>
        <div className={styles.bookTitle}>
          Книга{" "}
          <a
            href={`/profile/${activeUser.author.id}/book/${activeUser.book.id}`}
          >
            «{activeUser.book.title}»
          </a>
        </div>
      </div>
      <div className={styles.blank} />
      <Dropdown
        overlayClassName={styles.dropdownOverlay}
        placement="bottomRight"
        menu={{
          items: actions,
          onClick(info) {
            console.log(info.key);
          },
        }}
        trigger={["click"]}
      >
        <button className={styles.dropdownButton}>
          <SvgMenu />
        </button>
      </Dropdown>
    </div>
  );
}
