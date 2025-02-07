import styles from "../filter.module.scss";

export function SvgArrow({ showListState }: { showListState: boolean }) {
  return (
    <svg
      className={
        showListState
          ? `${styles.svgDefault} ${styles.svgActive}`
          : styles.svgDefault
      }
      width="18"
      height="18"
      fill="none"
    >
      <path
        stroke="#2A7FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.5 6.75 9 11.25l-4.5-4.5"
      />
    </svg>
  );
}
