import { useGetProfileQuery } from "../../services/api/sharebookApi.ts";
import { Button } from "antd";
import photo from "./anna.png";
import { UserComponent } from "../../components/UserComponent/UserComponent.tsx";
import { useParams } from "react-router";

const user = {
  userId: "userId",
  name: "Анна Франс",
  photo,
};

export function User() {
  const { userId } = useParams();
  const { data } = useGetProfileQuery({ userId, zone: 1 });

  console.log(data);
  return (
    <UserComponent data={user}>
      <Button type="primary">Написать</Button>
    </UserComponent>
  );
}
