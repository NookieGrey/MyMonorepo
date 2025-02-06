import { SignUpFormEmail } from "../SignUpFormEmail";
import styles from "../auth.module.scss";

export function SignUp() {
  return (
    <div className={styles.signUp}>
      <div></div>
      <SignUpFormEmail />
      <div className={styles.legalText}>
        Регистрируясь, вы соглашаетесь с политикой конфиденциальности и
        обработки данных
      </div>
    </div>
  );
}
