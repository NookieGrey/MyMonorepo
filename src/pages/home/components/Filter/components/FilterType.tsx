import {Dropdown} from "antd";
import styles from "../filter.module.scss";
import {useState} from "react";
import {SvgArrow} from "../svg/SvgArrow.tsx";
import {useSearchParams} from "react-router";

interface Type {
  label: string;
  key: string;
}

const types: Type[] = [
  { label: "Обменивают", key: "0" },
  { label: "Отдают", key: "1" },
  { label: "Все предложения", key: "2" },
];

const defaultType = types[2];

export function FilterType() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get("filterType") ?? defaultType.key;
  const [showListState, setShowListState] = useState(false);

  const handleMenuClick = ({ key }: { key: string }) => {
    searchParams.set("filterType", key);
    setSearchParams(searchParams);
  };

  return (
    <Dropdown
      overlayClassName={styles.typeFilter}
      menu={{
        items: types.filter((item) => item.key !== filterType),
        onClick: handleMenuClick,
      }}
      trigger={["click"]}
      onOpenChange={(vis) => setShowListState(vis)}
    >
      <button className={styles.buttonTypeFilter}>
        {types.find((item) => item.key === filterType)?.label ?? defaultType.label}
        <SvgArrow showListState={showListState} />
      </button>
    </Dropdown>
  );
}
