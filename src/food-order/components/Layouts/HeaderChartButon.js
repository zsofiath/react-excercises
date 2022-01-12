import React, { useContext, useState, useEffect } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/Cart-context";
const HeaderChartButton = ({ onClick }) => {
  const context = useContext(CartContext);
  const [isButtonHighlighted, setisButtonHighlighted] = useState(false);
  const numberOfChartItems = context.items.reduce(
    (prev, item) => item.amount + prev,
    0
  );
  const buttonClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ""
  }`;

  const { items } = context;

  useEffect(() => {
    if (items.length === 0) return;
    setisButtonHighlighted(true);
    const timer = setTimeout(() => {
      setisButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfChartItems}</span>
    </button>
  );
};

export default HeaderChartButton;
