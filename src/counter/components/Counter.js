import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/Store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const incrementHandler = (state) => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = (state) => {
    dispatch(counterActions.decrement());
  };

  if (!isAuthenticated) return <></>;
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
