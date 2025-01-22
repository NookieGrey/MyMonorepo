// import styles from "./home.module.scss";
import { HeaderComponent } from './components/Header';
import { FilterComponent } from './components/Filter';

export function Home() {
  return (
    <div>
      <HeaderComponent />
      <FilterComponent />
    </div>
  );
}
