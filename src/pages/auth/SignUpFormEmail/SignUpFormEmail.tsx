import { Button, Form, Input } from "antd";
import styles from "../auth.module.scss";
import { useSearchParams } from "react-router";

export function SignUpFormEmail() {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className={styles.containerContent}>
      <h1 className={styles.title}>Присоединяйтесь к ShareBook</h1>
      <div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          className={styles.container}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Почта" autoComplete="email" />
          </Form.Item>
        </Form>

        <Button className={styles.buttonAuth} type="primary" htmlType="submit">
          Далее
        </Button>
      </div>
      <p className={styles.link}>
        Уже есть аккаунт?
        <a
          onClick={() => setTimeout(() => setSearchParams({ auth: "signIn" }))}
        >
          {" "}
          Войти
        </a>
      </p>
    </div>
  );
}
