import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import styles from "../auth.module.scss";
import { useNavigate, useSearchParams } from "react-router";
import { useRegisterUserMutation } from "../../../services/api/sharebookApi.ts";
import { SvgPasswordShow } from "../svg/SvgPasswordShow.tsx";
import { SvgPasswordHide } from "../svg/SvgPasswordHide.tsx";

export function SignUpPassword() {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterUserMutation();

  const onFinish: FormProps["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      await register(values).unwrap();
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
      <h1 className={styles.title}>Регистрация через почту</h1>
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
              placeholder="Введите пароль"
              autoComplete="new-password"
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

          <Form.Item
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The new password that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Повторите пароль"
              autoComplete="new-password"
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
          Далее
        </Button>
      </div>
    </div>
  );
}
