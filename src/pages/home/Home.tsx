import {FilterComponent} from './components/Filter';
import {BookCardComponent} from './components/BookCard';

export function Home() {
  return (
    <div>
      <FilterComponent />
      <BookCardComponent />
    </div>
  );
}
