import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import styles from "../auth.module.scss";
import { useNavigate } from "react-router";
import { useRegisterUserMutation } from "../../../api/sharebookApi.ts";
import { SvgPasswordShow } from "../svg/SvgPasswordShow.tsx";
import { SvgPasswordHide } from "../svg/SvgPasswordHide.tsx";

export function SignUp() {
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterUserMutation();

  const onFinish: FormProps["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      await register(values).unwrap();
      // Being that the result is handled in extraReducers in authSlice,
      // we know that we're authenticated after this, so the user
      // and token will be present in the store
      navigate("/");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.container}
      >
        {/*<Form.Item*/}
        {/*  // label="Name"*/}
        {/*  // name="name"*/}
        {/*  rules={[{ required: true, message: "Please input your name!" }]}*/}
        {/*>*/}
        {/*  <Input autoComplete="name" />*/}
        {/*</Form.Item>*/}

        {/*<Form.Item*/}
        {/*  // label="Login"*/}
        {/*  // name="login"*/}
        {/*  rules={[{ required: true, message: "Please input your username!" }]}*/}
        {/*>*/}
        {/*  <Input autoComplete="login" />*/}
        {/*</Form.Item>*/}

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Почта" autoComplete="email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
          // label="Repeat Password"
          // name="passwordConfirm"
          rules={[
            { required: true, message: "Please input your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!"),
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
  );
}
