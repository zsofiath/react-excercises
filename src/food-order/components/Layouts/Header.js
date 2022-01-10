import React from "react";
import MealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderChartButton from "./HeaderChartButon";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
          <h1>React meals</h1>
          <HeaderChartButton/>
      </header>
      <div className={classes['main-image']}>
          <img src={MealImage} alt="A table full of delicious food."/>
      </div>
    </>
  );
};

export default Header;
