import styles from "../filter.module.scss";
import { FilterGenre } from "./filterGenre.tsx";
import { FilterType } from "./filterType.tsx";

export function FilterComponent() {
  return (
    <div className={styles.container}>
      <FilterGenre />
      <FilterType />
    </div>
  );
}
