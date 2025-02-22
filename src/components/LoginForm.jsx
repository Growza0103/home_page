import React, { useState } from "react";
import styles from "../styles/LoginForm.module.css"; // Import styles as a module

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className={styles.loginpagewrapper}>
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.screen__content}>
          <form className={styles.login} onSubmit={handleSubmit}>
            <div className={styles.login__field}>
              <i className={`${styles.login__icon} fas fa-user`}></i>
              <input
                type="text"
                className={styles.login__input}
                placeholder="User name / Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.login__field}>
              <i className={`${styles.login__icon} fas fa-lock`}></i>
              <input
                type="password"
                className={styles.login__input}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={`${styles.button} ${styles.login__submit}`} type="submit">
              <span className={styles.button__text}>Log In Now</span>
              <i className={`${styles.button__icon} fas fa-chevron-right`}></i>
            </button>
          </form>
          <div className={styles.socialLogin}>
            <h3>Log in via</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={`${styles.socialLogin__icon} fab fa-instagram`}></a>
              <a href="#" className={`${styles.socialLogin__icon} fab fa-facebook`}></a>
              <a href="#" className={`${styles.socialLogin__icon} fab fa-twitter`}></a>
            </div>
          </div>
        </div>
        <div className={styles.screen__background}>
          <span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`}></span>
          <span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`}></span>
          <span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`}></span>
          <span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`}></span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
