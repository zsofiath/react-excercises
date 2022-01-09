import React from "react";
import MealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
          <h1>React meals</h1>
          <button>Card</button>
      </header>
      <div>
          <img src={MealImage} alt="A table full of delicious food."/>
      </div>
    </>
  );
};

export default Header;
