import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART } from "../../store/ActionTypes";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) =>
    state.cartItemList.reduce((ac, cur) => {
      return ac + cur.quantity;
    }, 0)
  );

  const toggleChartHandler = () => {
    dispatch({ type: TOGGLE_CART });
  };

  return (
    <button className={classes.button} onClick={toggleChartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
