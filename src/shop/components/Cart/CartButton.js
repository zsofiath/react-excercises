import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../store/store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) =>{
    return state.Cart.items.reduce((ac, cur) => {
      return ac + cur.quantity;
    }, 0);}
  );

  const toggleChartHandler = () => {
    dispatch(UIActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleChartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
