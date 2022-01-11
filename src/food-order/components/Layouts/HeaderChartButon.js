import React, {useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/Cart-context";
const HeaderChartButton = ({onClick}) => {
  const context = useContext(CartContext);
  const numberOfChartItems = context.items.reduce((prev, item) => item.amount+prev, 0)
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfChartItems}</span>
    </button>
  );
};

export default HeaderChartButton;
