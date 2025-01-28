import { FilterComponent } from "./components/Filter";
import { BookCardComponent } from "./components/BookCard";

export function Home(props: object) {
  console.log(props);
  return (
    <div>
      <FilterComponent />
      <BookCardComponent />
    </div>
  );
}
