import styles from "../header.module.scss";
import { Input } from "antd";
import { SvgSearch } from "./svg/svgSearch.tsx";

export function Search() {
  return (
    <div className={styles.containerSearch}>
      <div className={styles.miniContainerSearch}>
        <Input placeholder="Ищите фентези, детективы, романы"></Input>
        <SvgSearch />
      </div>
    </div>
  );
}
