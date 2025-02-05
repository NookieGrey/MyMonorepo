import styles from "./auth.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SvgCloseModal } from "./svg/SvgCloseModal.tsx";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Modal } from "antd";
import { useSearchParams } from "react-router";

export function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = searchParams.get("auth") == "open";
  const [isSignIn, setSignIn] = useState(true);
  const { t } = useTranslation("auth");

  const closeAuth = () => {
    searchParams.delete("auth");
    setSearchParams(searchParams);
  };

  return (
    <Modal
      width={826}
      centered={true}
      footer={null}
      closable={false}
      maskClosable={true}
      open={isModalOpen}
      onCancel={closeAuth}
      classNames={{
        content: styles.modal,
      }}
    >
      <div className={styles.wrapper}>
        <button className={styles.buttonModal}></button>
        <div className={styles.wrapperAuth}>
          <h1 className={styles.title}>
            {isSignIn ? t("Вход через почту") : "Регистрация через почту"}
          </h1>
          {isSignIn ? <SignIn /> : <SignUp />}
          <p
            className={styles.link}
            onClick={() => setSignIn((signIn) => !signIn)}
          >
            {isSignIn ? "Ещё нет аккаунта?" : "Уже есть аккаунт"}
            <a> {isSignIn ? "Регистрация" : "Войти"}</a>
          </p>
        </div>
        <button onClick={closeAuth} className={styles.buttonModal}>
          <SvgCloseModal />
        </button>
      </div>
    </Modal>
  );
}
