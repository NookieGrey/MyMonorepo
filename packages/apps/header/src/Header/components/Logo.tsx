import { Link } from "react-router";
import { SvgLogo } from "../svg/SvgLogo.tsx";
import styles from "../header.module.scss";

export function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      <SvgLogo />
    </Link>
  );
}
