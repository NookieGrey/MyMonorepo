import { Button } from "antd";
import styles from "./auth.module.scss";
import { useState } from "react";
import { SignIn } from "./SignIn.tsx";
import { SignUp } from "./SignUp.tsx";
import { useTranslation } from "react-i18next";

export function Auth() {
  const [isSignIn, setSignIn] = useState(true);
  const { t } = useTranslation("auth");

  return (
    <div className={styles.wrapper}>
      <h1>{isSignIn ? t("SignIn") : "Sign Up"}</h1>
      {isSignIn ? <SignIn /> : <SignUp />}
      <Button onClick={() => setSignIn((signIn) => !signIn)}>
        {isSignIn ? "Sign Up" : "Sign In"}
      </Button>
    </div>
  );
}
