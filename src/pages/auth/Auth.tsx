import styles from "./auth.module.scss";
import { SvgCloseModal } from "./svg/SvgCloseModal.tsx";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Modal } from "antd";
import { useNavigate, useSearchParams } from "react-router";
import { SignUpPassword } from "./SignUpPassword";
import { ForgotPassword } from "./ForgotPassword";

const screensSignIn = ["signIn", "forgotPassword", "goToEmailSignIn"];

function ScreenAuth({ activeScreen }: { activeScreen: string | null }) {
  switch (activeScreen) {
    case "signIn":
      return <SignIn />;
    case "signUp":
      return <SignUp />;
    case "SignUpPassword":
      return <SignUpPassword />;
    case "forgotPassword":
      return <ForgotPassword />;
    default:
      return <div>No find auth</div>;
  }
}

export function Auth() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = searchParams.get("auth") != null;
  const activeScreen = searchParams.get("auth");

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
      getContainer={false}
      open={isModalOpen}
      onCancel={closeAuth}
      classNames={{
        content: styles.modal,
        body: styles.containerModal,
      }}
    >
      <div className={styles.wrapper}>
        <button
          onClick={() => navigate(-1)}
          className={
            activeScreen == "signIn"
              ? `${styles.buttonModal} ${styles.buttonHide}`
              : styles.buttonModal
          }
        ></button>
        {screensSignIn.includes(String(activeScreen)) ? (
          <ScreenAuth activeScreen={activeScreen} />
        ) : (
          <div className={styles.signUp}>
            <div></div>
            <ScreenAuth activeScreen={activeScreen} />
            <div className={styles.legalText}>
              Регистрируясь, вы соглашаетесь с политикой конфиденциальности и
              обработки данных
            </div>
          </div>
        )}
        <button onClick={closeAuth} className={styles.buttonModal}>
          <SvgCloseModal />
        </button>
      </div>
    </Modal>
  );
}
