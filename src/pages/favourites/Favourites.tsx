import { useGetProfileQuery } from "../../api/sharebookApi.ts";

export function Favourites() {
  const args = useGetProfileQuery({ userId: "-1", zone: 4 });

  return <pre>{JSON.stringify(args, null, 2)}</pre>;
}
