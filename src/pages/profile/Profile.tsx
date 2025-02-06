import styles from "./profile.module.scss";
import { useGetProfileQuery } from "../../services/api/sharebookApi.ts";
import {Button } from "antd";
import photo from "./nikolay.png";
import { UserComponent } from "../../components/UserComponent/UserComponent.tsx";

const user = {
  userId: "userId",
  name: "Николай Андер",
  photo
};

export function Profile() {
  const { data } = useGetProfileQuery({ userId: "userId", zone: 1 });

  console.log(data);
  return (
    <UserComponent
      data={user}
      children={
        <>
          <Button className={styles.settingsButton}>⚙️</Button>
          <Button type="primary">Новое объявление</Button>
        </>
      }
    />
  );
}
