import styles from "../header.module.scss";

export function SvgSearch({ focusSearch }: { focusSearch: boolean }) {
  return (
    <svg width="18" height="18" fill="none">
      <path
        className={
          focusSearch
            ? `${styles.svgSearch} ${styles.svgSearchFocus}`
            : styles.svgSearch
        }
        stroke="#909090"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.462"
        d="m12.75 12.75 3 3M2.25 8.25a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
      />
    </svg>
  );
}
