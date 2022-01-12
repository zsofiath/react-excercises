import React, {useContext} from "react";
import classes from "./MealItem.module.css";
import Mealitemform from "./MealItemForm";
import CartContext from "../../../store/Cart-context";

const Mealitem = ({ id, name, description, price }) => {
  const fprice = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <span className={classes.price}>{fprice}</span>
      </div>
      <div>
        <Mealitemform id={id} onAddToCart={addToCartHandler}></Mealitemform>
      </div>
    </li>
  );
};

export default Mealitem;
