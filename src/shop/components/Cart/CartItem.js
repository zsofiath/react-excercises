import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/store";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const increaseItemAmountHandler = () => {
    dispatch(CartActions.addItem({
      id,
      title,
      price,
    }));
  };
  const decreaseItemAmountHandler = () => {
    dispatch(CartActions.removeItem(props.item.id));
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
