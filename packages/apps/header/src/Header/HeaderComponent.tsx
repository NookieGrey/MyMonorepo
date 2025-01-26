import styles from "./header.module.scss";
import { Button, Input } from "antd";

const pages: string[] = ["Главная", "Избранное", "Чаты"];

export const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg width="25" height="24" fill="none">
            <rect width="6" height="22" fill="#000" rx="1" />
            <rect width="6" height="22" x="8" fill="#000" rx="1" />
            <rect
              width="6"
              height="22"
              x="15.223"
              y="1.684"
              fill="#000"
              rx="1"
              transform="rotate(-10 15.223 1.684)"
            />
          </svg>
          ShareBook
        </div>
        <div className={styles.navBar}>
          {pages.map((page) => (
            <a
              key={page}
              href={page == "Главная" ? "/" : `/${page}`}
              className={styles.defaultPage}
            >
              {page}
            </a>
          ))}
        </div>
        <div></div>
        <div className={styles.containerSearch}>
          <div className={styles.miniContainerSearch}>
            <Input placeholder="Ищите фентези, детективы, романы"></Input>
            <svg width="18" height="18" fill="none">
              <path
                stroke="#909090"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.462"
                d="m12.75 12.75 3 3M2.25 8.25a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
              />
            </svg>
          </div>
        </div>
        {/* todo нужно у Button убрать анимацию нажатия и поменять размеры */}
        <Button className={styles.avatar} type="primary" shape="circle">
          <svg width="20" height="20" fill="none">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M4.4 16.4v-.8a5.6 5.6 0 1 1 11.2 0v.8"
            />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M10 10a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};
