import {Dropdown} from "antd";
import styles from "../filter.module.scss";
import {useState} from "react";
import {SvgArrow} from "../svg/SvgArrow.tsx";

interface Type {
  label: string;
  key: string;
}

const types: Type[] = [
  { label: "Обменивают", key: "0" },
  { label: "Отдают", key: "1" },
  { label: "Все предложения", key: "2" },
];

export function FilterType() {
  const [showListState, setShowListState] = useState(false);
  const [selectedType, setSelectedType] = useState<Type>(types[2]);

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedType(types[Number(key)]);
  };

  return (
    <Dropdown
      overlayClassName={styles.typeFilter}
      menu={{
        items: types.filter((item) => item.key != selectedType.key),
        onClick: handleMenuClick,
      }}
      trigger={["click"]}
      onOpenChange={(vis) => setShowListState(vis)}
    >
      <button className={styles.buttonTypeFilter}>
        {selectedType.label}
        <SvgArrow showListState={showListState} />
      </button>
    </Dropdown>
  );
}
