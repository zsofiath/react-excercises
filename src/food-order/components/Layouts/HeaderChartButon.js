import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
const HeaderChartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>7</span>
    </button>
  );
};

export default HeaderChartButton;
