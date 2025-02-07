import styles from "../header.module.scss";
import { Button } from "antd";
import { SvgAvatar } from "../svg/SvgAvatar.tsx";
import { useSearchParams } from "react-router";

export function Avatar() {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <Button
        className={styles.avatar}
        type="primary"
        shape="circle"
        onClick={() => setSearchParams({ auth: "signIn" })}
      >
        <SvgAvatar />
      </Button>
    </>
  );
}
