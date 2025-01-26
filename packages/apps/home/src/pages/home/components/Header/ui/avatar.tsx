import styles from "../header.module.scss";
import { Button } from "antd";
import { SvgAvatar } from "./svg/svgAvatar.tsx";

export function Avatar() {
  return (
    <Button className={styles.avatar} type="primary" shape="circle">
      <SvgAvatar />
    </Button>
  );
}
