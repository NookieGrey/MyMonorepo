import styles from "../header.module.scss";
import { Input } from "antd";
import { SvgSearch } from "../svg/SvgSearch.tsx";
import { useState } from "react";

export function SearchInput() {
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div className={styles.containerSearch}>
      <div className={styles.miniContainerSearch}>
        <Input
          placeholder="Ищите фентези, детективы, романы"
          onFocus={() => setFocusSearch(true)}
          onBlur={() => setFocusSearch(false)}
          className={styles.search}
          suffix={<SvgSearch focusSearch={focusSearch} />}
        ></Input>
      </div>
    </div>
  );
}
