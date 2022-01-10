import React from "react";
import classes from "./MealItem.module.css";
import Mealitemform from "./MealItemForm";

const Mealitem = ({ id, name, description, price }) => {
const fprice = `$${price.toFixed(2)}`;
return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <span className={classes.price}>{fprice}</span>
      </div>
      <div>
          <Mealitemform id={id}></Mealitemform>
      </div>
    </li>
  );
};

export default Mealitem;
