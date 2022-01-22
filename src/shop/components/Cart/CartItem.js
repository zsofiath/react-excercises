import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../store/ActionTypes";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseItemAmountHandler = () => {
    dispatch({ type: ADD_TO_CART, item: props.item });
  };
  const decreaseItemAmountHandler = () => {
    dispatch({ type: REMOVE_FROM_CART, item: props.item });
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemAmountHandler}>-</button>
          <button onClick={increaseItemAmountHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
