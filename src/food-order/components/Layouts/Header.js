import React, { useState } from "react";
import MealImage from "../../assets/meals.jpg";
import Cart from "../Chart/Cart";
import classes from "./Header.module.css";
import HeaderChartButton from "./HeaderChartButon";

const Header = () => {
  const [isCartShown, setisCartShown] = useState(false);
  const showCartHandler = () => {
    setisCartShown(true);
  }
  const hideCartHandler = () => {
    setisCartShown(false);
  }

  return (
    <>
      {isCartShown && <Cart  onClose={hideCartHandler}/>}
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderChartButton onClick={showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="A table full of delicious food." />
      </div>
    </>
  );
};

export default Header;
