import styles from "../../filter.module.scss";

export function SvgArrow({ listState }: { listState: boolean }) {
  return (
    <svg
      className={listState ? styles.svgActive : styles.svgDefault}
      width="20"
      height="16"
      fill="none"
    >
      <path
        stroke="#2A7FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="m5 5.5 5 5 5-5"
      />
    </svg>
  );
}
