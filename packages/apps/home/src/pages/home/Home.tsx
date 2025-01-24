// import styles from "./home.module.scss";
import { HeaderComponent } from './components/Header';
import { FilterComponent } from './components/Filter';
import {
  BookCardComponent
} from './components/BookCard';

export function Home() {
  return (
    <div>
      <HeaderComponent />
      <FilterComponent />
      <BookCardComponent />
    </div>
  );
}
