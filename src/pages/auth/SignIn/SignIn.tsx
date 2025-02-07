import { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useNavigate, useSearchParams } from "react-router";
import { useAuthMutation } from "../../../services/api/sharebookApi.ts";
import { SvgPasswordHide } from "../svg/SvgPasswordHide.tsx";
import { SvgPasswordShow } from "../svg/SvgPasswordShow.tsx";
import styles from "../auth.module.scss";

export function SignIn() {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [login, { isLoading }] = useAuthMutation();

  const onFinish: FormProps["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      await login({ loginRequest: values }).unwrap();
      navigate("/");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.containerContent}>
      <h1 className={styles.title}>Вход через почту</h1>
      <div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.container}
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your login!",
              },
            ]}
          >
            <Input placeholder="Почта" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Пароль"
              iconRender={(visible) =>
                visible ? (
                  <div className={styles.svgPassword}>
                    <SvgPasswordShow />
                  </div>
                ) : (
                  <div className={styles.svgPassword}>
                    <SvgPasswordHide />
                  </div>
                )
              }
            />
          </Form.Item>
        </Form>

        <Button
          className={styles.buttonAuth}
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Войти
        </Button>
      </div>
      <p className={styles.link}>
        Ещё нет аккаунта?
        <a onClick={() => setSearchParams({ auth: "signUp" })}> Регистрация</a>
      </p>
    </div>
  );
}
