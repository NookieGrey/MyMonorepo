import { Dropdown } from "antd";
import styles from "../filter.module.scss";
import { useState } from "react";
import { SvgArrow } from "./svg/svgArrow.tsx";

const items = [
  { label: "Обменивают", key: "0" },
  { label: "Все предложения", key: "1" },
];

export function FilterType() {
  const [listState, setListState] = useState(false);

  return (
    <Dropdown
      overlayClassName={styles.typeFilter}
      menu={{ items }}
      trigger={["click"]}
      onOpenChange={(vis) => setListState(vis)}
    >
      <button className={styles.buttonList}>
        Отдают
        <SvgArrow listState={listState} />
      </button>
    </Dropdown>
  );
}
