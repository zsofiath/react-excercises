import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/authSlice";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const loginHanlder = () => {
    dispatch(loginActions.login());
  };
  if (isAuthenticated) return <></>;
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginHanlder}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
