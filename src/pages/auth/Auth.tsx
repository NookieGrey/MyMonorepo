import styles from "./auth.module.scss";
import { SvgCloseModal } from "./svg/SvgCloseModal.tsx";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Modal } from "antd";
import { useSearchParams } from "react-router";

export function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = searchParams.get("auth") != null;

  console.log(searchParams.get("auth"));

  const closeAuth = () => {
    searchParams.delete("auth");
    setTimeout(() => setSearchParams(searchParams));
  };

  return (
    <Modal
      width={826}
      centered={true}
      footer={null}
      closable={false}
      maskClosable={true}
      open={isModalOpen}
      afterClose={closeAuth}
      onCancel={closeAuth}
      classNames={{
        content: styles.modal,
        body: styles.containerModal,
      }}
    >
      <div className={styles.wrapper}>
        <button className={styles.buttonModal}></button>
        {searchParams.get("auth") == "signIn" ? <SignIn /> : <SignUp />}
        <button onClick={closeAuth} className={styles.buttonModal}>
          <SvgCloseModal />
        </button>
      </div>
    </Modal>
  );
}
