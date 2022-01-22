import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { TOGGLE_CART } from "../../store/ActionTypes";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleChartHandler = () => {
    dispatch({type: TOGGLE_CART});
  }

  return (
    <button className={classes.button} onClick={toggleChartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
