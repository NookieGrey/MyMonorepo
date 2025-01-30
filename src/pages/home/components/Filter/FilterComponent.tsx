import styles from "./filter.module.scss";
import {FilterGenre} from "./components/FilterGenre.tsx";
import {FilterType} from "./components/FilterType.tsx";

export function FilterComponent() {
  return (
    <div className={styles.container}>
      <FilterGenre />
      <FilterType />
    </div>
  );
}
