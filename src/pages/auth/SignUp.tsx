import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import styles from "./auth.module.scss";
import { useRegistrationMutation } from "./auth.ts";
import { useNavigate } from "react-router";

export function SignUp() {
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegistrationMutation();

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
    <div className={styles.wrapper}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input autoComplete="name" />
        </Form.Item>

        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input autoComplete="login" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input autoComplete="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>

        <Form.Item
          label="Repeat Password"
          name="passwordConfirm"
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
          <Input.Password autoComplete="new-password" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
